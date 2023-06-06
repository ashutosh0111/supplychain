import React, { useState } from "react";
import { MdArrowDropDownCircle } from "react-icons/md";

const AddMeForm = ({ contract }) => {
  const [address, setAddress] = useState("");
  const [role, setRole] = useState(0);

  const rolesList = ["Manufacturer", "Distributor", "Retailer", "Consumer"];
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await contract.AddMe(address, role);
      console.log("AddMe function called successfully!");
      // Additional logic or state updates after function call
    } catch (error) {
      console.log("Error calling AddMe function:", error);
      // Handle error state or display error message
    }

    // Clear form fields after successful submission
    setAddress("");
    setRole(0);
  };

  return (
    <div className="form">
      <div className="form-heading">Add Me Form</div>
      <div className="breakline"></div>
      <form onSubmit={handleSubmit}>
      <div className="form-input">
        <div className="form-item">
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </div>
      <div className="form-item">
        <div className="dropdown">
          <div className="dropbtn" style={{ width: "200px" }}>{rolesList[role]} <MdArrowDropDownCircle /></div>
          <div className="dropdown-content">
            {rolesList.map((role, idx) => {
              return (
                <div onClick={e => setRole(idx)} style={{ width: "200px" }} className="dropdown-item">
                  {role}
                </div>
              )
            })}
          </div>
        </div>
        <button type="submit">Add Me</button>
      </div>
      </form>
    </div>
  );
};

export default AddMeForm;
