import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const FriendDetails = () => {
  const { friendId } = useParams();
  const [friend, setfriend] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
      .then((res) => res.json())
      .then((data) => setfriend(data));
  }, []);
  return (
    <div className="mt-5 border rounded w-50 m-auto">
      <h1>Name: {friend.name}</h1>
      <h4>Username: {friend.username}</h4>
      <h4>Email: {friend.email}</h4>
      <h4>Street: {friend.address?.street}</h4>
      <h4>Suite: {friend.address?.suite}</h4>
      <h4>City: {friend.address?.city}</h4>
      <h4>Zip-Code: {friend.address?.zipcode}</h4>
      <h4>Lantitude: {friend.address?.geo.lat}</h4>
      <h4>Longitude: {friend.address?.geo.lng}</h4>
      <h4>Phone: {friend.phone}</h4>
      <h4>Website: {friend.website}</h4>
      <h4>Company name: {friend.company?.name}</h4>
      <h4>Catch Phrase: {friend.company?.catchPhrase}</h4>
      <h4>BS: {friend.company?.bs}</h4>
    </div>
  );
};

export default FriendDetails;
