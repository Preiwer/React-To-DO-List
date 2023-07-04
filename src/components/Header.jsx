import React, { useState } from "react";

function Header({ listsArr, setListsArr }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim() === "") {
      return;
    }

    const newItem = {
      id: Date.now(),
      txt: inputValue,
      isChecked: false,
    };

    setListsArr([...listsArr, newItem]);
    setInputValue("");
  };

  return (
    <div className="Header">
      <input className="inpt" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default Header;
