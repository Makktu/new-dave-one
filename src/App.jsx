import React, { useState, useEffect } from "react";

import Header from "./Header";
import SearchItem from "./SearchItem";
import Footer from "./Footer";
import Content from "./Content";
import AddItem from "./AddItem";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist")) || []
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  // __________________________________________

  useEffect(() => {
    localStorage.setItem("shoppinglist", JSON.stringify(items));
  }, [items]);

  // ___________________________________________

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
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
    setItems(newItems);
  };

  return (
    <div className="App">
      <Header title="ScrapPad" motto="a very basic jotting pad" />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
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
