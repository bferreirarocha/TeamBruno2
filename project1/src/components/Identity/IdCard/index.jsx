import React from "react";
import "./style.scss";

function IdCard(props) {
  return (
    <div className="IdCard">
      <header>Card Id: {props.data.id}</header>
      <section>Currency:{props.data.currency}</section>
    </div>
  );
}

export default IdCard;
