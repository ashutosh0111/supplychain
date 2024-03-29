import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import WelcomeNote from "./components/WelcomeNote";
import Owner from "./components/Owner/Ownerpage";
import Manufacturer from "./components/Manufacturer/Manufacturerpage";
import Distributor from "./components/Distributor/Distributorpage";
import Retailer from "./components/Retailer/Retailerpage";
import Consumer from "./components/Consumer/Consumerpage";
import Home from "./components/Home/Home";
import abi from "./Contract/Supplychain.json";
import { ethers } from "ethers";


import "./App.scss";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x5Cc38D74B35b1ACFAE35F014D14080682eaFc272";
      const contractABI = abi.abi;

      try {
        const { ethereum } = window;

        if (ethereum) {
          await ethereum.request({
            method: "eth_requestAccounts",
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );

          setState({
            provider,
            signer,
            contract,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    connectWallet();
  }, []);

  return (
    
    <div className="App">
      <div className="header">
        <h1>The Medichain</h1>
        <div className="welcome-note">
          <WelcomeNote />
        </div>
      </div>
      
      <div>
        <Router>
        <div className="navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Owner">Owner Page</NavLink>
          <NavLink to="/Manufacturer">Manufacturer Page</NavLink>
          <NavLink to="/Distributor">Distributor page</NavLink>
          <NavLink to ="/Retailer">Retailer Page</NavLink>
          <NavLink to ="/Consumer">Consumer Page</NavLink>
        </div>

        <Routes>
        <Route
            path="/"
            element={<Home contract={state.contract} />}
          />
          <Route
            path="/owner"
            element={<Owner contract={state.contract} />}
          />
          <Route
            path="/Manufacturer"
            element={<Manufacturer contract={state.contract} />}
          />
          <Route
            path="/Distributor"
            element={<Distributor contract={state.contract} />}
          />
          <Route
            path="/Retailer"
            element={<Retailer contract={state.contract} />}
          />
          <Route
            path="/Consumer"
            element={<Consumer contract={state.contract} />}
          />
          {/* Add more routes for other pages */}
        </Routes>

        {/* Add other components and content */}
      
    </Router>
    </div>
    </div>
  );
}

export default App;
