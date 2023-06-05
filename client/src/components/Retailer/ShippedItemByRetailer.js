import React, { useState } from "react";
import { ethers } from "ethers";

const ShippedItemByRetailer = ({ contract }) => {
  const [productCode, setProductCode] = useState("");

  const handleProductCodeChange = (e) => {
    setProductCode(e.target.value);
  };

  const handleShippedItem = async () => {
    try {
      await contract.shippedItemByRetailer(productCode);
      setProductCode(""); // Reset product code after successful transaction
      alert("Item shipment successful");
    } catch (error) {
      console.log(error);
      alert("Failed to ship item");
    }
  };

  return (
    <div>
      <h2>Shipped Item by Retailer </h2>
      <form>
        <label>Product Code:</label>
        <input
          type="number"
          value={productCode}
          onChange={handleProductCodeChange}
        />
        <br />
        <button type="button" onClick={handleShippedItem}>
          Ship Item
        </button>
      </form>
    </div>
  );
};

export default ShippedItemByRetailer;
