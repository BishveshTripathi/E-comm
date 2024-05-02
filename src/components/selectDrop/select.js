import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import "../selectDrop/select.css";

const Select = ({data,placeholder}) => {
  const [isOpenSelect, setisOpenSelect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(placeholder);

  const openSelect = () => {
    setisOpenSelect(!isOpenSelect);
  };

  const closeSelect = (index, name) => {
    setSelectedIndex(index);
    setisOpenSelect(false);
    setSelectedItem(name);
  };

  return (
    <ClickAwayListener onClickAway={() => setisOpenSelect(false)}>
      <div className="selecrDropWrapper cursor position-relative">
        <span className="openSelect" onClick={openSelect}>
          {selectedItem} <KeyboardArrowDownIcon className="arrow" />
        </span>
        {isOpenSelect === true && (
          <div className="selectDrop">
            <div className="searchField">
              <input type="text" placeholder="Search here" />
            </div>
            <ul className="searchResults">
            <li
                  key={0}
                    onClick={() => closeSelect(0, placeholder)}
                    className={`${selectedIndex === 0 ? "active" : ""}`}
                  >
                    {placeholder}
                  </li>
              {data.map((item, index) => {
                return (
                  <li
                  key={index+1}
                    onClick={() => closeSelect(index+1, item)}
                    className={`${selectedIndex === index+1 ? "active" : ""}`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Select;
