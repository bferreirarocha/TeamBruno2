import React, { useState } from "react";
import BaseFilter from "../../components/base/BaseFilter";
import BaseList from "../../components/base/BaseList";
import "./style.scss";

function Identity(props) {
  const [showMsg, setShowMgs] = useState(false);
  const [ICardData, setICardData] = useState(props.Service[0]["IdCard"]);
  const [TemplateFilters, setTemplateFilters] = useState(
    props.Service[0]["TemplateFilters"]
  );

  const [Selected, setSelected] = useState("0");

  const setFilterHandler = (selectedItem) => {
    setSelected(selectedItem);
  };

  const filteredOptions = () => {
    return parseInt(Selected) !== 0
      ? ICardData.filter((item) => item.currency === Selected)
      : ICardData;
  };

  function showMessages() {
    setShowMgs(!showMsg);
  }

  return (
    <div className="identity-layout">
      <div className="leftContent">
        <div className="container">
          <div className="wrapper MenuCards">
            <BaseList
              Component={props.ComponentsList[0]["Menu"]}
              data={props.Service[0]["Menu"]}
              columns={1}
            />
          </div>
          <div className="wrapper IdCards">
            <BaseFilter
              onChangeFilter={setFilterHandler}
              Selected={Selected}
              TemplateFilters={TemplateFilters}
            />
            <BaseList
              Component={props.ComponentsList[0]["IdCard"]}
              data={filteredOptions()}
              columns={2}
            />
          </div>
        </div>
      </div>
      <div className="rightContent">
        <div className="container">
          <div className="wrapper Templates">
            <button onClick={showMessages}> change component</button>
            <span>Temaplates</span>
            <input type="search" />
            <BaseList
              Component={
                showMsg
                  ? props.ComponentsList[0]["Template"]
                  : props.ComponentsList[0]["Messages"]
              }
              data={
                showMsg
                  ? props.Service[0]["Template"]
                  : props.Service[0]["Messages"]
              }
              columns={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Identity;
