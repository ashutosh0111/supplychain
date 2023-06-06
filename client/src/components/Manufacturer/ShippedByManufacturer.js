import React, { useState } from "react";
import { ethers } from "ethers";

const ShippedItemByManufacturer = ({ contract }) => {
  const [productCode, setProductCode] = useState("");

  const handleProductCodeChange = (e) => {
    setProductCode(e.target.value);
  };

  const handleShippedItem = async () => {
    try {
      await contract.shippedItemByManufacturer(productCode);
      setProductCode(""); // Reset product code after successful transaction
      alert("Item shipment successful");
    } catch (error) {
      console.log(error);
      alert("Failed to ship item");
    }
  };

  return (
    <div className="form">
      <div className="form-heading">Ship Item by Manufacturer</div>
      <div className="breakline"></div>
      <form>
        <div className="form-input">
          <div className="form-item">
            <label>Product Code:</label>
            <input
              type="number"
              value={productCode}
              onChange={handleProductCodeChange}
            />
          <button style={{ width: "200px" }} type="button" onClick={handleShippedItem}>
            Ship Item
          </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShippedItemByManufacturer;
