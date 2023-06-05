import React from "react";
import { ethers } from "ethers";
import FetchItemDetails from "./FetchItemDetails";
import AddMeForm from "./AddMeForm";
function Home({ contract }) {
    return (
      <div>
        <h1>Home Page</h1>
        <FetchItemDetails contract={contract} />
        <AddMeForm contract={contract}/>
      
        
      </div>
    );
  }
  
  export default Home;
  