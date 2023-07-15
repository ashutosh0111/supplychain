import React, { useState } from 'react';

const ReceivedItem = ({ contract, contractFunction, title }) => {
  const [productCode, setProductCode] = useState('');

  const handleProductCodeChange = (event) => {
    setProductCode(event.target.value);
  };

  const handleReceivedItem = async () => {
    try {
      await contract[contractFunction](productCode);

         } catch (error) {
      // Handle error
      console.error(`${title}`, error);
    }
  };

  return (
    <div>
      <label>Product Code:</label>
      <input
        type="number"
        value={productCode}
        onChange={handleProductCodeChange}
      />
      <button onClick={handleReceivedItem}>Mark as Received</button>
    </div>
  );
};

export default ReceivedItem;
