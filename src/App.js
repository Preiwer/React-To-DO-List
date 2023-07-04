import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Lists from "./components/Lists";
import "./App.css";

function App() {
  const [listsArr, setListsArr] = useState([]);
  const [storedItems, setStoredItems] = useState(localStorage.getItem("todo"));

  useEffect(() => {
    if (storedItems) {
      const parsedItems = JSON.parse(storedItems);
      setListsArr(parsedItems);
      console.log("Parsed-Items: ", parsedItems);
    }
  }, [storedItems]);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(listsArr));
  }, [listsArr]);

  return (
    <div className="App">
      <Header listsArr={listsArr} setListsArr={setListsArr} />
      <Lists listsArr={listsArr} setListsArr={setListsArr} />
    </div>
  );
}

export default App;
