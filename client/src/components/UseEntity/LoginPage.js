import React, { useState } from "react";
import { ethers } from "ethers";

function LoginPage({ contract, setLoggedIn , contractFunction , alertMessage }) {
  const [loading, setLoading] = useState(false);

  // Function to handle the login button click
  const handleLogin = async () => {
    try {
      setLoading(true);

      // Prompt user to connect with MetaMask
      await window.ethereum.enable();

      // Get the selected Ethereum account
      const accounts = await window.ethereum.request({ method: "eth_accounts" });

      if (accounts.length > 0) {
        const account = accounts[0];

        // Call the smart contract function
        const isManufacturer = await contract[contractFunction](account);

        // Check the result and set the logged-in state
        if (isManufacturer) {
          setLoggedIn(true);
        } else {
          alert(alertMessage);
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
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Loading..." : "Login with MetaMask"}
      </button>
    </div>
  );
}

export default LoginPage;
