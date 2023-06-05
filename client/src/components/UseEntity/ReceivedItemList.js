import React, { useState, useEffect } from "react";

const ReceivedItemList = ({ contract, contractFunction, title }) => {
  const [itemsReceived, setItemsReceived] = useState([]);

  useEffect(() => {
    const fetchItemsReceived = async () => {
      try {
        const itemReceived = await contract[contractFunction]();
        const items = itemReceived.map((item) => ({
          receivedProduct: item.receivedproduct.toString(),
          receivedBy: item.receivedby.toString(),
          Timestamp: item.timestamp.toString(),
        }));
        setItemsReceived(items);
      } catch (error) {
        console.log(error);
      }
    };

    if (contract) {
      fetchItemsReceived();
    }
  }, [contract, contractFunction]);

  return (
    <div>
      <p style={{ textAlign: "center", marginTop: "20px" }}>{title}</p>
      {itemsReceived.map((item, index) => (
        <div
          className="container-fluid"
          style={{ width: "100%" }}
          key={index}
        >
          <table style={{ marginBottom: "10px", width: "100%" }}>
            <thead>
              <tr>
                <th>Received Product </th>
                <th>Received By </th>
                <th>Timestamp</th>
                {/* <th>Price</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    backgroundColor: "#96D4D4",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "7px",
                    width: "100px",
                  }}
                >
                  {item.receivedProduct}
                </td>
                <td
                  style={{
                    backgroundColor: "#96D4D4",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "7px",
                    width: "200px",
                  }}
                >
                  {item.receivedBy}
                </td>
                <td
                  style={{
                    backgroundColor: "#96D4D4",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "7px",
                    width: "100px",
                  }}
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

export default ReceivedItemList;
