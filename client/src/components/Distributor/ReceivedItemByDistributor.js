import React, { useState } from "react";


const ReceivedItemByDistributor = ({ contract }) => {
  const [productCode, setProductCode] = useState("");

  const handleProductCodeChange = (e) => {
    setProductCode(e.target.value);
  };

  const handleReceivedItem = async () => {
    try {
      await contract.receivedItemByDistributor(productCode);
      setProductCode(""); // Reset product code after successful transaction
      alert("Item received successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to receive item");
    }
  };

  return (
    <div>
      <h2>Receive Item by Distributor</h2>
      <form>
        <label>Product Code:</label>
        <input
          type="number"
          value={productCode}
          onChange={handleProductCodeChange}
        />
        <br />
        <button type="button" onClick={handleReceivedItem}>
          Receive Item
        </button>
      </form>
    </div>
  );
};

export default ReceivedItemByDistributor;
