import React from "react";
import { ethers } from "ethers";
import useAddEntity from "./useAddEntity";

function AddRetailer({ contract }) {
  const { account, setAccount, entityInfo, setEntityInfo, loading, error, success, addEntity } = useAddEntity(
    contract.addRetailer
  );

  return (
    <div className="form">
     <div className="form-heading"> Add Retailer</div>
     <div className="breakline"></div>
     <div className="form-input">
        < div className="form-item">
      {error && <p>Error: {error}</p>}
      {success && <p>Retailer added successfully!</p>}
      <input
        type="text"
        value={account}
        onChange={(e) => setAccount(e.target.value)}
        placeholder="Retailer account address"
      />
      {/* <input
        type="text"
        value={entityInfo}
        onChange={(e) => setEntityInfo(e.target.value)}
        placeholder="Retailer information"
      /> */}
      <button onClick={addEntity} disabled={loading}>
        Add Retailer
      </button>
    </div>
    </div>
    </div>
  );
}

export default AddRetailer;
