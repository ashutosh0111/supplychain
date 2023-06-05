import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
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
      const contractAddress = "0xEF45EB3d6571B69A1428b86729617FB68DBD8B24";
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
          <Link to="/">Home</Link>
          <Link to="/Owner">Owner Page</Link>
          <Link to="/Manufacturer">Manufacturer Page</Link>
          <Link to="/Distributor">Distributor page</Link>
          <Link to ="/Retailer">Retailer Page</Link>
          <Link to ="/Consumer">Consumer Page</Link>
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
