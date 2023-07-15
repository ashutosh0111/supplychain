import React from "react";
import { ethers } from "ethers";
import useAddEntity from "./useAddEntity";


function AddManufacturer({ contract }) {
  const { account, setAccount, entityInfo, setEntityInfo, loading, error, success, addEntity } = useAddEntity(
    contract.addManufacturer
  );

  return (
    <div className="form">
     <div className="form-heading"> Add Manufacturer</div>
     <div className="breakline"></div>
     <div className="form-input">
        < div className="form-item">
      {error && <p>Error: {error}</p>}
      {success && <p>Manufacturer added successfully!</p>}
      <input
        type="text"
        value={account}
        onChange={(e) => setAccount(e.target.value)}
        placeholder="Manufacturer account address"
      />
      {/* <input
        type="text"
        value={entityInfo}
        onChange={(e) => setEntityInfo(e.target.value)}
        placeholder="Manufacturer information"
      /> */}
      <button onClick={addEntity} disabled={loading}>
        Add Manufacturer
      </button>
      </div>
      </div>
    </div>
  );
}

export default AddManufacturer;
