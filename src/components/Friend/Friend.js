import React from "react";
import { Link } from "react-router-dom";

const Friend = (props) => {
  const { id, name, phone, website, address, username, email } = props.friend;
  const friendStyle = {
    border: "1px solid green",
    padding: "10px",
    borderRadius: "5px",
    margin: "20px",
  };
  return (
    <div style={friendStyle}>
      <h1>Name: {name}</h1>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
      <p>Address: {address.city}</p>
      <Link className="btn btn-outline-danger fs-5" to={`/friend/${id}`}>
        Details
      </Link>
    </div>
  );
};

export default Friend;
