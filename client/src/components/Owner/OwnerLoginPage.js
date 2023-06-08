import React, { useState } from "react";
import { ethers } from "ethers";

function OwnerLoginPage({ contract, setLoggedIn, contractFunction, alertMessage }) {
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      // Prompt user to connect with MetaMask
      await window.ethereum.enable();

      // Get the selected Ethereum account
      const accounts = await window.ethereum.request({ method: "eth_accounts" });

      if (accounts.length > 0) {
        const account = accounts[0].toLowerCase();
        const ownerAddress = "0xf5a83BFca55756D88a9a76a32b75005270D0D4d5";

        if (account === ownerAddress.toLowerCase()) {
          setLoggedIn(true);
        } else {
          alert("You are not the owner of this contract.");
        }
      } else {
        alert("No Ethereum accounts found. Please make sure MetaMask is connected.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while logging in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form">
      {/* <div className="form-heading">Login Page</div> */}
      <div style={{ height:"100px" }}></div>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Loading..." : "Login with MetaMask"}
      </button>
    </div>
  );
}

export default OwnerLoginPage;
