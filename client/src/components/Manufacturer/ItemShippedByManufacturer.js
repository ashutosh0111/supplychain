import React, { useState, useEffect } from "react";

const ItemShippedByManufacturer = ({ contract }) => {
  const [shippedItems, setShippedItems] = useState([]);

  useEffect(() => {
    const fetchShippedItems = async () => {
      try {
        const itemShipped = await contract.getItemShippedByManufacturer();
        const items = itemShipped.map((item) => ({
          shippedProduct: item.shippedproduct.toString(),
          shippedBy: item.shippedby.toString(),
          shippedTo: item.shippedto.toString(),
          timestamp: item.timestamp.toString(),
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
    <div>
      <h2 className="section-title">Shipped Items</h2>
      <div className="shipped-items-container">
        {shippedItems.map((item, index) => (
          <div className="shipped-item" key={index}>
            <p className="item-info">Shipped Product: {item.shippedProduct}</p>
            <p className="item-info">Shipped By: {item.shippedBy}</p>
            <p className="item-info">Shipped To: {item.shippedTo}</p>
            <p className="item-info">Timestamp: {item.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemShippedByManufacturer;
