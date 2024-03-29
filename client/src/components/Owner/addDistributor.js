import React from "react";
import { ethers } from "ethers";
import useAddEntity from "./useAddEntity";

function AddDistributor({ contract }) {
  const { account, setAccount, entityInfo, setEntityInfo, loading, error, success, addEntity } = useAddEntity(
    contract.addDistributor
  );

  return (

    <div className="form">
     <div className="form-heading"> Add Distributor</div>
     <div className="breakline"></div>
     <div className="form-input">
        <div div className="form-item">
      {error && <p>Error: {error}</p>}
      {success && <p>Distributor added successfully!</p>}
      <input
        type="text"
        value={account}
        onChange={(e) => setAccount(e.target.value)}
        placeholder="Distributor account address"
      />
      {/* <input
        type="text"
        value={entityInfo}
        onChange={(e) => setEntityInfo(e.target.value)}
        placeholder="Distributor information"
      /> */}
      <button onClick={addEntity} disabled={loading}>
        Add Distributor
      </button>
      </div>
      </div>
    </div>
  );
}

export default AddDistributor;
