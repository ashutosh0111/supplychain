import React from "react";
import FetchItemDetails from "./FetchItemDetails";
import AddMeForm from "./AddMeForm";

function Home({ contract }) {
    return (
      <div>
        <FetchItemDetails contract={contract} />
        <AddMeForm contract={contract}/>
      </div>
    );
  }
  
  export default Home;
  