import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

function WelcomeNote() {
  const [address, setAddress] = useState(null);

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const { ethereum } = window;
        if (ethereum) {
          await ethereum.request({
            method: "eth_requestAccounts",
          });
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          setAddress(address);

          // Subscribe to accountsChanged event
          ethereum.on("accountsChanged", handleAccountsChanged);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const handleAccountsChanged = async (accounts) => {
      if (accounts.length > 0) {
        const address = accounts[0];
        setAddress(address);
      } else {
        setAddress(null);
      }
    };

    fetchAddress();

    return () => {
      // Unsubscribe from accountsChanged event when component unmounts
      if (window.ethereum) {
        window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
      }
    };
  }, []);

  return (
    <div className="welcome-note">
      {address ? `Welcome!  ${address}` : "Loading..."}
    </div>
  );
}

export default WelcomeNote;
