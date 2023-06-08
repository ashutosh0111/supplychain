import React, { useState, useEffect } from "react";
import { formatDateFromTimestamp } from "../../utilities";

const ReceivedItemList = ({ contract, contractFunction, title }) => {
  const [itemsReceived, setItemsReceived] = useState([]);

  useEffect(() => {
    const fetchItemsReceived = async () => {
      try {
        const itemReceived = await contract[contractFunction]();
        const items = itemReceived.map((item) => ({
          receivedProduct: item.receivedproduct.toString(),
          receivedBy: item.receivedby.toString(),
          Timestamp: formatDateFromTimestamp(item.timestamp.toString()),
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
    <div className="form">
      <div className="form-heading">{title}</div>
      <div className="breakline"></div>
        <div
          className="form-input"
          // style={{ width: "100%" }}
          // key={index}
        >
          <table >
            <thead>
              <tr>
                <th>Received Product </th>
                <th>Received By </th>
                <th>Timestamp</th>
                {/* <th>Price</th> */}
              </tr>
            </thead>
            <tbody>
      {itemsReceived.map((item, index) => (
              <tr key={index}>
                <td
                  // style={{
                  //   backgroundColor: "#96D4D4",
                  //   border: "1px solid white",
                  //   borderCollapse: "collapse",
                  //   padding: "7px",
                  //   width: "100px",
                  // }}
                >
                  {item.receivedProduct}
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
                  {item.receivedBy}
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
      ))}
      </tbody>
    </table>
  </div>
    </div>
  );
};

export default ReceivedItemList;
