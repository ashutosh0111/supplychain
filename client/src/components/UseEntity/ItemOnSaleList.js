import { useState, useEffect } from "react";

const ItemOnSaleList = ({ contract , contractFunction , title  }) => {
  const [itemsOnSale, setItemsOnSale] = useState([]);

  useEffect(() => {
    const fetchItemsOnSale = async () => {
      try {
        const itemOnSale = await contract[contractFunction]();
        const items = itemOnSale.map((item) => ({
          onSaleProduct: item.onsaleproduct.toString(),
          onSaleBy: item.onsaleby.toString(),
          onSaleQuantity: item.onsalequantity.toString(),
          onSalePrice: item.onsaleprice.toString(),
        }));
        setItemsOnSale(items);
      } catch (error) {
        console.log(error);
      }
    };

    if (contract) {
      fetchItemsOnSale();
    }
  }, [contract]);

  return (
    <div className="form">
      <div className="form-heading">{title}</div>
      <div className="breakline"></div>
      {itemsOnSale.map((item, index) => (
        <div
          className="form-input"
          // style={{ width: "100%" }}
          key={index}
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
            Product Code
        </th>
        <th> Seller
            
        </th>
        <th> Qunatity

        </th>
        <th> 
            Price

        </th>
      </tr>
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
                  {item.onSaleProduct}
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
                  {item.onSaleBy}
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
                  {item.onSaleQuantity}
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
                  {item.onSalePrice}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ItemOnSaleList;
