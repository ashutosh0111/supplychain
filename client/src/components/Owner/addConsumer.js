import React from "react";
import { ethers } from "ethers";
import useAddEntity from "./useAddEntity";


function AddConsumer({ contract }) {
  const { account, setAccount, entityInfo, setEntityInfo, loading, error, success, addEntity } = useAddEntity(
    contract.addConsumer
  );

  return (
    <div className="form">
    <div className="form-heading"> Add Consumer</div>
    <div className="breakline"></div>
    <div className="form-input">
       < div className="form-item">
      {error && <p>Error: {error}</p>}
      {success && <p>Consumer added successfully!</p>}
      <input
        type="text"
        value={account}
        onChange={(e) => setAccount(e.target.value)}
        placeholder="Consumer account address"
      />
      {/* <input
        type="text"
        value={entityInfo}
        onChange={(e) => setEntityInfo(e.target.value)}
        placeholder="Consumer information"
      /> */}
      <button onClick={addEntity} disabled={loading}>
        Add Consumer
      </button>
      </div>
      </div>
    </div>
  );
}

export default AddConsumer;
