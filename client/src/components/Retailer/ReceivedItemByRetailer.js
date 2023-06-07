import React, { useState } from "react";


const ReceivedItemByRetailer = ({ contract }) => {
  const [productCode, setProductCode] = useState("");

  const handleProductCodeChange = (e) => {
    setProductCode(e.target.value);
  };

  const handleReceivedItem = async () => {
    try {
      await contract.receivedItemByRetailer(productCode);
      setProductCode(""); // Reset product code after successful transaction
      alert("Item received successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to receive item");
    }
  };

  return (
    <div className="form">
      <div className="form-heading">Receive Item by Retailer</div>
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
        <button type="button" onClick={handleReceivedItem}>
          Receive Item
        </button>
      </form>
    </div>
  );
};

export default ReceivedItemByRetailer;
