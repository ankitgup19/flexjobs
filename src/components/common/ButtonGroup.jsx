import React, { useState } from "react";
import { Button } from "../../../styles/components/common/ButtonGroup.styles";
import {
  DropdownList,
  Checkbox,
} from "../../../styles/components/searchResults/Filters.styles";

const ButtonGroup = (props) => {
  const [count, setCount] = useState([]);
  const [activeCount, setActiveCount] = useState(0);

  const changeHandler = () => {
    setCount([]);
    document
      .querySelectorAll(".btn-group.active input[type=checkbox]:checked")
      .forEach((e) => {
        count.push(e.value);
      });
    setActiveCount(count.length);
  };

  const getFilterOptions = (filters, child) => {
    return (
      <ul>
        {filters.map((item, index) => (
          <li key={item.name + index}>
            {child && (
              <a href="/">
                <Checkbox
                  type="checkbox"
                  value={item.name}
                  onChange={changeHandler}
                />
                {item.name}
              </a>
            )}
            {item.children && getFilterOptions(item.children, true)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={`btn-group ${props.active ? "active" : ""}`}>
      {props.name && (
        <Button
          type={props.type || "button"}
          onClick={props.onToggle}
          className={`${props.className} ${activeCount > 0 ? "active" : ""}`}
          bgColor={props.bgColor}
          boxShadow={props.boxShadow}
          position={props.position}
        >
          {props.name}
          {activeCount > 1 && <span className="count">({activeCount})</span>}
        </Button>
      )}
      {props.children && (
        <DropdownList className="dropdown">
          {getFilterOptions(props.children, true)}
        </DropdownList>
      )}
    </div>
  );
};

export default ButtonGroup;
