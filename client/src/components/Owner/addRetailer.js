import React from "react";
import { ethers } from "ethers";
import useAddEntity from "./useAddEntity";

function AddRetailer({ contract }) {
  const { account, setAccount, entityInfo, setEntityInfo, loading, error, success, addEntity } = useAddEntity(
    contract.addRetailer
  );

  return (
    <div className="AddUser">
      <h1>Add Retailer</h1>
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
  );
}

export default AddRetailer;
