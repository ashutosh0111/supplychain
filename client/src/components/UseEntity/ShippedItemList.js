import { useState, useEffect } from "react";
import { formatDateFromTimestamp } from "../../utilities";

const ShippedItemList = ({ contract , contractFunction , title  }) => {
  const [shippedItems, setShippedItems] = useState([]);

  useEffect(() => {
    const fetchShippedItems = async () => {
      try {
        const shippedItem = await contract[contractFunction]();
        const items = shippedItem.map((item) => ({
          ShippedProduct: item.shippedproduct.toString(),
          ShippedBy: item.shippedby.toString(),
          ShippedTo: item.shippedto.toString(),
         timestamp: formatDateFromTimestamp(item.timestamp.toString()),
        }));
        setShippedItems(items);
      } catch (error) {
        console.log(error);
      }
    };

    if (contract) {
      fetchShippedItems();
    }
  }, [contract]);

  return (
    <div className="form">
      <div className="form-heading">{title}</div>
      <div className="breakline"></div>
        <div
          className="form-input"
          // style={{ width: "100%" }}
          // key={index}
        >
          <table
            // style={{
            //   marginBottom: "10px",
            //   width: "100%",
            // }}
          >
            <tbody>
            <tr>
        <th>
            Product Shipped
        </th>
        <th> Shipped By
            
        </th>
        <th> Shipped To

        </th>
        <th> 
            Timestamp

        </th>
      </tr>
      {shippedItems.map((item, index) => (
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
                  {item.ShippedProduct}
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
                  {item.ShippedBy}
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
                  {item.ShippedTo}
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
                  {item.timestamp}
                </td>
              </tr>
      ))}
      </tbody>
    </table>
  </div>
    </div>
  );
};

export default ShippedItemList;
