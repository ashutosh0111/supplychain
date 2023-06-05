import React, { useState } from 'react';

const PurchaseItem = ({ contract,contractFunction , actionName }) => {
  const [productCode, setProductCode] = useState('');
  const [amount, setAmount] = useState('');

  const handleProductCodeChange = (e) => {
    setProductCode(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handlePurchaseItem = async () => {
    try {
      await contract[contractFunction](productCode, { value: amount });
      // Reset form fields after successful transaction
      setProductCode('');
      setAmount('');
      alert('Item purchased successfully');
    } catch (error) {
      console.log(error);
      alert('Failed to purchase item');
    }
  };

  return (
    <div>
      <h2>{actionName}</h2>
      <form>
        <label>Product Code:</label>
        <input type="number" value={productCode} onChange={handleProductCodeChange} />
        <br />
        <label>Amount (in ethers):</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
        <br />
        <button type="button" onClick={handlePurchaseItem}>
          Purchase Item
        </button>
      </form>
    </div>
  );
};

export default PurchaseItem;
