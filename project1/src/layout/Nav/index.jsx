import React from "react";
import BaseList from "../../components/base/BaseList";
import Avatar from "./Avatar";
import MenuLink from "./MenuLink";
import "./style.scss";
import { NavData } from "./data";

function LeftNav() {
  console.log(NavData[0]["MenuLink"]);
  return (
    <div className="LeftNav">
      <Avatar />
      <BaseList data={NavData[0]["MenuLink"]} Component={MenuLink} />
    </div>
  );
}

export default LeftNav;
