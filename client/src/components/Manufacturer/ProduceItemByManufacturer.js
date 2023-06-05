import React, { useState } from "react";
import { ethers } from "ethers";


const ProduceItemByManufacturer = ({ contract }) => {
  const [productCode, setProductCode] = useState("");
  const [productInfo, setProductInfo] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [manufacturingDate, setManufacturingDate] = useState("");
  const [price, setPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");

  const handleProductCodeChange = (e) => {
    setProductCode(e.target.value);
  };

  const handleProductInfoChange = (e) => {
    setProductInfo(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleManufacturingDateChange = (e) => {
    setManufacturingDate(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleProductQuantityChange = (e) => {
    setProductQuantity(e.target.value);
  };

  const handleProduceItem = async () => {
    try {
      await contract.ProduceItemByManufacturer(
        productCode,
        productInfo,
        expiryDate,
        manufacturingDate,
        price,
        productQuantity
      );
      // Reset form fields after successful transaction
      setProductCode("");
      setProductInfo("");
      setExpiryDate("");
      setManufacturingDate("");
      setPrice("");
      setProductQuantity("");
      alert("Item produced successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to produce item");
    }
  };

  return (
    <div>
      <h2>Produce Item by Manufacturer</h2>
      <form>
        <label>Product Code:</label>
        <input
          type="number"
          value={productCode}
          onChange={handleProductCodeChange}
        />
        <br />
        <label>Product Info:</label>
        <input
          type="text"
          value={productInfo}
          onChange={handleProductInfoChange}
        />
        <br />
        <label>Expiry Date:</label>
        <input
          type="number"
          value={expiryDate}
          onChange={handleExpiryDateChange}
        />
        <br />
        <label>Manufacturing Date:</label>
        <input
          type="number"
          value={manufacturingDate}
          onChange={handleManufacturingDateChange}
        />
        <br />
        <label>Price:</label>
        <input type="number" value={price} onChange={handlePriceChange} />
        <br />
        <label>Product Quantity:</label>
        <input
          type="number"
          value={productQuantity}
          onChange={handleProductQuantityChange}
        />
        <br />
        <button type="button" onClick={handleProduceItem}>
          Produce Item
        </button>
      </form>
    </div>
  );
};

export default ProduceItemByManufacturer;
