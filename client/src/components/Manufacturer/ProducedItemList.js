import { useState, useEffect } from "react";

const ProducedItemList = ({ contract }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemProduced = await contract.getItemProduced();
        const items = itemProduced.map((item) => ({
          producedBy: item.producedby.toString(),
          producedCode: item.producedcode.toString(),
        }));
        setItems(items);
      } catch (error) {
        console.log(error);
      }
    };

    if (contract) {
      fetchItems();
    }
  }, [contract]);

  return (
    <div className="form">
      <div className="form-heading">Produced Items</div>
      <div className="breakline"></div>
        <div
          className="form-input"
          style={{ width: "100%" }}
          // key={index}
        >
          <table
            // style={{
            //   marginBottom: "10px",
            //   width: "100%",
            // }}
          >
             <tr>              
                <th>
                    Produced By
                </th>
                <th>
                    Product Code
                </th>
              </tr>
            <tbody>
      {items.map((item, index) => (
               
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
                  {item.producedBy}
                </td>
                <td
                  // style={{
                  //   backgroundColor: "#96D4D4",
                  //   border: "1px solid white",
                  //   borderCollapse: "collapse",
                  //   padding: "7px",
                  //   width: "300px",
                  // }}
                >
                  {item.producedCode}
                </td>
              </tr>
      ))}
      </tbody>
    </table>
  </div>
    </div>
  );
};

export default ProducedItemList;
