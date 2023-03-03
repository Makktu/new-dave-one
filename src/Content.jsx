import React, { useState } from "react";
import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  // _

  return (
    <>
      <main>
        {items.length ? null : <h1>List is Empty</h1>}
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      </main>
    </>
  );
};

export default Content;
