import React from "react";
import { ethers } from "ethers";
import useAddEntity from "./useAddEntity";

function AddRole({ contract, roleName }) {
  const { account, setAccount, entityInfo, setEntityInfo, loading, error, success, addEntity } = useAddEntity(
    contract.AddRole
  );

  return (
    <div className="form">
      <div className="form-heading">Add {roleName}</div>
      <div className="breakline"></div>
      <div className="form-input">
        <div className="form-item">
          {error && <p>Error: {error}</p>}
          {success && <p>{roleName} added successfully!</p>}
          <input
            type="text"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            placeholder={roleName + " account address"}
            style={{ width: "95%" }}
          />
          {/* <input
            type="text"
            value={entityInfo}
            onChange={(e) => setEntityInfo(e.target.value)}
            placeholder="Manufacturer information"
          /> */}
          <button onClick={addEntity} disabled={loading}>
            Add {roleName}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddRole;
