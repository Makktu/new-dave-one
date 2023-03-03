import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import AddItem from "./AddItem";

function App() {
  const [items, setItems] = useState([
    { id: 1, checked: false, item: "Some kind of buttery margarine thing" },
    { id: 2, checked: true, item: "Milk" },
    { id: 3, checked: false, item: "Tea" },
  ]);

  const [newItem, setNewItem] = useState("");

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  const addItem = (newItem) => {
    let makeNewItem = {
      id: items.length + 1,
      checked: false,
      item: newItem,
    };
    let newItems = [...items, makeNewItem];
    setAndSaveItems(newItems);
  };

  return (
    <div className="App">
      <Header title="ScrapPad" motto="a very basic jotting pad" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Footer amount={items.length} />
    </div>
  );
}

export default App;
