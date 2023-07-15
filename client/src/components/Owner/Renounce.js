import React from "react";
import { ethers } from "ethers";

const Renounce = ({ contract, contractFunction, title, handleRenounce }) => {
  const renounce = async () => {
    try {
      await contract[contractFunction]();
      handleRenounce();
      console.log("Role renounced successfully");
      alert("Role renounced successfully"); // Display alert message
    } catch (error) {
      console.log(error);
      alert("Error occurred while renouncing the role"); // Display alert message for error
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={renounce}>Renounce</button>
    </div>
  );
};

export default Renounce;
