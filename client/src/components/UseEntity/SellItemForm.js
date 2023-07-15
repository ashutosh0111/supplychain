import React, { useState } from "react";
import { ethers } from "ethers";

function SellItemForm({ title, sellItemFunction }) {
  const [productCode, setProductCode] = useState("");
  const [price, setPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");

  const handleProductCodeChange = (e) => {
    setProductCode(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleProductQuantityChange = (e) => {
    setProductQuantity(e.target.value);
  };

  const handleSellItem = async () => {
    try {
      await sellItemFunction(productCode, price, productQuantity);
      alert("Item on sale successfully");
      // Clear the form fields
      setProductCode("");
      setPrice("");
      setProductQuantity("");
    } catch (error) {
      console.log(error);
      alert("Failed to sell item");
    }
  };

  return (
    <div className="form">
      <div className="form-heading">{title}</div>
      <div className="breakline"></div>
      <div className="form-input">
        <div className="form-item">
          <label>Product Code: </label>
          <input type="text" value={productCode} onChange={handleProductCodeChange} />
        </div>
        <div className="form-item">
          <label>Price: </label>
          <input type="text" value={price} onChange={handlePriceChange} />
        </div>
      </div>
      <div className="form-input">
        <div className="form-item">
          <label>Product Quantity: </label>
          <input type="text" value={productQuantity} onChange={handleProductQuantityChange} />
          <button style={{ width: "15%" }} onClick={handleSellItem}>Sell Item</button>
        </div>
      </div>
    </div>
  );
}

export default SellItemForm;
