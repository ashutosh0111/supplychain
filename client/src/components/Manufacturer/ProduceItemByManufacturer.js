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
    <div className="form">
      <div className="form-heading">Produce Item by Manufacturer</div>
      <div className="breakline"></div>
      {/* <form> */}
        <div className="form-input">
          <div className="form-item">
            <label>Product Code:</label>
            <input
              type="number"
              value={productCode}
              onChange={handleProductCodeChange}
            />
          </div>
          <div className="form-item">
            <label>Product Info:</label>
            <input
              type="text"
              value={productInfo}
              onChange={handleProductInfoChange}
            />
          </div>
        </div>
        <div className="form-input">
          <div className="form-item">
            <label>Expiry Date:</label>
            <input
              type="number"
              value={expiryDate}
              onChange={handleExpiryDateChange}
            />
          </div>
          <div className="form-item">
            <label>Manufacturing Date:</label>
            <input
              type="number"
              value={manufacturingDate}
              onChange={handleManufacturingDateChange}
            />
          </div>
        </div>
        <div className="form-input">
          <div className="form-item">
            <label>Price:</label>
            <input type="number" value={price} onChange={handlePriceChange} />
          </div>
          <div className="form-item">
            <label>Product Quantity:</label>
            <input
              type="number"
              value={productQuantity}
              onChange={handleProductQuantityChange}
            />
          </div>
        </div>
        <div className="form-input">
          <button type="button" onClick={handleProduceItem}>
            Produce Item
          </button>
        </div>
      {/* </form> */}
    </div>
  );
};

export default ProduceItemByManufacturer;
