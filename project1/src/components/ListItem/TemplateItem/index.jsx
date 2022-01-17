import React from "react";
import "./style.scss";

function TemplateItem(props) {
  return (
    <div className="TemplateItem">
      <header>{props.data.title}</header>
      <section></section>
    </div>
  );
}

export default TemplateItem;
