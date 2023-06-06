import React, { useState } from "react";
import Modal from 'react-modal';
import { ethers } from "ethers";

function convertDate(dateString) {
  const day = dateString.substring(0, 2);
  const month = dateString.substring(2, 4);
  const year = dateString.substring(4);

  const formattedDate = day + "/" + month + "/" + year;
  return formattedDate;
}

function FetchItemDetails({ contract }) {
  const [productCode, setProductCode] = useState("");
  const [itemDetails, setItemDetails] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

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
        expiryDate: convertDate(itemBufferOne.expiryDate.toString()),
        manufacturingDate: convertDate(itemBufferOne.manufacturingDate.toString()),
        itemState: itemBufferOne.itemState,
        productPrice: ethers.utils.formatEther(itemBufferTwo.productPrice),
        distributorID: itemBufferTwo.distributorID,
        retailerID: itemBufferTwo.retailerID,
        consumerID: itemBufferTwo.consumerID,
      };

      setItemDetails(itemDetails);
      openModal();
    } catch (error) {
      console.log(error);
      alert("Failed to fetch item details");
    }
  };


  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
  }

  function closeModal() {
    setIsOpen(false);
  }

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
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <div className="form-output">
            {itemDetails && (
              <div>
                <h3>Item Details</h3>
                <div className="breakline"></div>
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
                <p>Retailer ID: {itemDetails.retailerID}</p>
                <p>Consumer ID: {itemDetails.consumerID}</p>
              </div>
            )}
          </div>
        </Modal>

    </div>
  );
}

export default FetchItemDetails;
