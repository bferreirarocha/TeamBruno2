import React from "react";
import styled from "styled-components";

function BaseFilter(props) {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  const BaseFilter = styled.div`
    BaseFilter {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      margin: 1rem 0;
    }
    label {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    select {
      padding: 0.5rem 2rem;
      font-weight: bold;
      border-radius: 6px;
    }
  `;

  return (
    <div className="BaseFilter">
      <label>Select choice</label>
      <select value={props.Selected} onChange={dropdownChangeHandler}>
        <option defaultValue value="0">
          Select Option
        </option>
        {props.TemplateFilters.map((item, key) => (
          <option key={key} value={item.currency}>
            {item.currency}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BaseFilter;
