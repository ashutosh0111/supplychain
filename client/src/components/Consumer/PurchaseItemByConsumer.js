import React, { useState } from "react";
import { ethers } from "ethers";

const PurchaseItemByConsumer = ({ contract }) => {
  const [productCode, setProductCode] = useState("");
  const [amount, setAmount] = useState("");

  const handleProductCodeChange = (e) => {
    setProductCode(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handlePurchaseItem = async () => {
    try {
      await contract.purchaseItemByConsumer(productCode, {
        value: amount,
      });
      // Reset form fields after successful transaction
      setProductCode("");
      setAmount("");
      alert("Item purchased successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to purchase item");
    }
  };

  return (
    <div className="form">
      <div className="form-heading">Purchase Item by Consumer</div>
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
          </div>
        </div>
        <div className="form-input">
          <div className="form-item">
            <label>Amount (in Ether):</label>
            <input type="number" value={amount} onChange={handleAmountChange} />
            <button style={{ width: "200px" }} type="button" onClick={handlePurchaseItem}>
              Purchase Item
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PurchaseItemByConsumer;
