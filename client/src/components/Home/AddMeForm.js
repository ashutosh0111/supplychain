import React, { useState } from "react";

const AddMeForm = ({ contract }) => {
  const [address, setAddress] = useState("");
  const [role, setRole] = useState(0);

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
    <div>
      <h2>Add Me Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Role:</label>
          <input
            type="number"
            value={role}
            onChange={(e) => setRole(parseInt(e.target.value))}
          />
        </div>
        <button type="submit">Add Me</button>
        <div>
            <table> 
                <tr> 
                    <th>Role No</th>
                    <th> Role</th>
                </tr>
                <tr>
                    <td>1 </td>
                    <td> Manufacturer</td>

                </tr>
                <tr><td>2</td>
                <td>Distributor</td></tr>
                <tr> 
                    <td>3</td>
                <td>Retailer</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Consumer</td>
                </tr>
            </table>
        </div>
       
      </form>
    </div>
  );
};

export default AddMeForm;
