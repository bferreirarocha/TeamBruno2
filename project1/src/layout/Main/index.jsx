import React from "react";
import "./style.scss";

function Main(props) {
  return (
    <div className="Main">
      <header></header>
      <section>
        {/* Identity Page*/}
        <props.PageContent
          Service={props.Service}
          ComponentsList={props.ComponentsList}
        />
      </section>
    </div>
  );
}

export default Main;
