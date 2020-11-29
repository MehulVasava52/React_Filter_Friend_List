import React from "react";
import "../css/styles.css";

export default function Tile(props) {
  return (
    <div className="tile">
      <h2>{props.friend.name}</h2>
      <ul>
        <li> category : {props.friend.category} </li>
        <li> hobby : {props.friend.hobby} </li>
        <li> occupation : {props.friend.job} </li>
        <li> age : {props.friend.age}</li>
      </ul>
    </div>
  );
}
