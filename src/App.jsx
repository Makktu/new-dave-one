import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

function App() {
  const [items, setItems] = useState([
    { id: 1, checked: false, item: "Some kind of buttery margarine thing" },
    { id: 2, checked: true, item: "Milk" },
    { id: 3, checked: false, item: "Tea" },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  return (
    <div className="App">
      <Header title="ScrapPad" motto="a very basic jotting pad" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer amount={items.length} />
    </div>
  );
}

export default App;
