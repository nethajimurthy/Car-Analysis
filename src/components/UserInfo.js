import React, { useEffect, useState } from "react";
import "./stylesheets/UserInfo.css";

// Constructing user info card to be displayed on click of the user from the users list
const UserInfo = (props) => {
  const [data, setData] = useState(props.info);
  useEffect(() => {
    setData(props.info);
  });

  const Close=()=>{
    props.close(false)
  }

  return (
    <>
      {data ? (
        <>
        <div key='user' className="UserInfo">
        <button className="Close" onClick={Close}>X</button>
          <div className="ID">ID: {data.id}</div>
          <div className="SubHead">Name: {data.userName}</div>
          <ul>Address: {data.address}</ul>
          <ul>Phone: {data.phone}</ul>
          <ul>Job: {data.occupation}</ul>
          <div className="VehicleDetails">
            <div className="SubHead">Vehicle Details</div>
            <ul>Model: {data.vehicleInfo.model}</ul>
            <ul>Brand: {data.vehicleInfo.maker}</ul>
            <ul>Age: {data.vehicleInfo.carAge}</ul>
          </div>
        </div>
        </>
      ) : null}
    </>
  );
};

export default UserInfo;
