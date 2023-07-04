import React, { useEffect, useState } from "react";

function Lists({ listsArr, setListsArr }) {
  const handleDelete = (id) => {
    setListsArr((prevListsArr) =>
      prevListsArr.filter((item) => item.id !== id)
    );
    localStorage.removeItem(id.toString());
  };

  const handleCheck = (id) => {
    setListsArr((prevListsArr) =>
      prevListsArr.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  useEffect(() => {
    listsArr.forEach((elem) => {
      console.log(elem);
    });
  }, [listsArr]);

  return (
    <ul className="Lists">
      {listsArr.map((elem) => (
        <li key={elem.id}>
          <input
            type="checkbox"
            name="check"
            checked={elem.isChecked}
            onChange={() => handleCheck(elem.id)}
          />
          {elem.txt}
          <button onClick={() => handleDelete(elem.id)}>&#10005;</button>
        </li>
      ))}
    </ul>
  );
}

export default Lists;
