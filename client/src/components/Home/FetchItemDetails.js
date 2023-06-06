import React, { useState } from "react";
import { ethers } from "ethers";

function FetchItemDetails({ contract }) {
  const [productCode, setProductCode] = useState("");
  const [itemDetails, setItemDetails] = useState(null);

  const handleProductCodeChange = (e) => {
    setProductCode(e.target.value);
  };

  const handleFetchItemDetails = async () => {
    try {
      const itemBufferOne = await contract.fetchItemBufferOne(productCode);
      const itemBufferTwo = await contract.fetchItemBufferTwo(productCode);

      const itemDetails = {
        itemstockUnit: itemBufferOne.itemstockUnit.toString(),
        itemproductCode: itemBufferOne.itemproductCode.toString(),
        ownerID: itemBufferOne.ownerID,
        manufacturerID: itemBufferOne.manufacturerID,
        productInfo: itemBufferOne.productInfo,
        expiryDate: itemBufferOne.expiryDate.toString(),
        manufacturingDate: itemBufferOne.manufacturingDate.toString(),
        itemState: itemBufferOne.itemState,
        productPrice: ethers.utils.formatEther(itemBufferTwo.productPrice),
        distributorID: itemBufferTwo.distributorID,
        wholesalerID: itemBufferTwo.wholesalerID,
        retailerID: itemBufferTwo.retailerID,
        consumerID: itemBufferTwo.consumerID,
      };

      setItemDetails(itemDetails);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch item details");
    }
  };

  return (
    <div className="form">
      <div className="form-heading">Fetch Item Details:</div>
      <div className="breakline"></div>
      <div className="form-input">
        <div className="form-item">
          <label>Product Code: </label>
          <input type="text" value={productCode} onChange={handleProductCodeChange} />
          <button onClick={handleFetchItemDetails}>Fetch</button>
        </div>
      </div>
        <div className="form-output">
        {itemDetails && (
          <div>
            <h3>Item Details</h3>
            <p>Stock Unit: {itemDetails.itemstockUnit}</p>
            <p>Product Code: {itemDetails.itemproductCode}</p>
            <p>Owner ID: {itemDetails.ownerID}</p>
            <p>Manufacturer ID: {itemDetails.manufacturerID}</p>
            <p>Product Info: {itemDetails.productInfo}</p>
            <p>Expiry Date: {itemDetails.expiryDate}</p>
            <p>Manufacturing Date: {itemDetails.manufacturingDate}</p>
            <p>Item State: {itemDetails.itemState}</p>
            <p>Product Price: {itemDetails.productPrice} ethers</p>
            <p>Distributor ID: {itemDetails.distributorID}</p>
            <p>Wholesaler ID: {itemDetails.wholesalerID}</p>
            <p>Retailer ID: {itemDetails.retailerID}</p>
            <p>Consumer ID: {itemDetails.consumerID}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FetchItemDetails;
