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
      alert("Item sold successfully");
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
    <div>
      <h2>{title}</h2>
      <div>
        <label>Product Code: </label>
        <input type="text" value={productCode} onChange={handleProductCodeChange} />
      </div>
      <div>
        <label>Price: </label>
        <input type="text" value={price} onChange={handlePriceChange} />
      </div>
      <div>
        <label>Product Quantity: </label>
        <input type="text" value={productQuantity} onChange={handleProductQuantityChange} />
      </div>
      <button onClick={handleSellItem}>Sell Item</button>
    </div>
  );
}

export default SellItemForm;
