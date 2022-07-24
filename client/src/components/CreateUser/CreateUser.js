import React, { useState } from "react";
import "./CreateUser.css";

function CreateUser() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  return (
    <div className="createuser-container">
      Add new User
      <input placeholder="Name" className="createuser-input" onChange={(e)=>{setName(e.target.value)}} />
      <input placeholder="username" className="createuser-input" onChange={(e)=>{setUsername(e.target.value)}} />
      <button className="createuser-button">Add</button>
    </div>
  );
}

export default CreateUser;
