import React, { useState, useEffect } from "react";

const PurchasedItemList = ({ contract, contractFunction, title }) => {
  const [itemsPurchased, setItemsPurchased] = useState([]);

  useEffect(() => {
    const fetchItemsPurchased = async () => {
      try {
        const itemPurchased = await contract[contractFunction]();
        const items = itemPurchased.map((item) => ({
          purchasedProduct: item.purchasedproduct.toString(),
          purchasedBy: item.purchasedby.toString(),
          Timestamp: item.timestamp.toString(),
        }));
        setItemsPurchased(items);
      } catch (error) {
        console.log(error);
      }
    };

    if (contract) {
      fetchItemsPurchased();
    }
  }, [contract, contractFunction]);

  return (
    <div className="form">
      <div className="form-heading">{title}</div>
      <div className="breakline"></div>
      {itemsPurchased.map((item, index) => (
        <div
          className="form-input"
          // style={{ width: "100%" }}
          key={index}
        >
          <table>
            <thead>
              <tr>
                <th>Purchased Product </th>
                <th>Purchased By </th>
                <th>Timestamp</th>
                {/* <th>Price</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  // style={{
                  //   backgroundColor: "#96D4D4",
                  //   border: "1px solid white",
                  //   borderCollapse: "collapse",
                  //   padding: "7px",
                  //   width: "100px",
                  // }}
                >
                  {item.purchasedProduct}
                </td>
                <td
                  // style={{
                  //   backgroundColor: "#96D4D4",
                  //   border: "1px solid white",
                  //   borderCollapse: "collapse",
                  //   padding: "7px",
                  //   width: "200px",
                  // }}
                >
                  {item.purchasedBy}
                </td>
                <td
                  // style={{
                  //   backgroundColor: "#96D4D4",
                  //   border: "1px solid white",
                  //   borderCollapse: "collapse",
                  //   padding: "7px",
                  //   width: "100px",
                  // }}
                >
                  {item.Timestamp}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default PurchasedItemList;
