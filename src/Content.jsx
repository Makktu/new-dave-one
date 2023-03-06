import React, { useState } from "react";
import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  // _

  return (
    <>
      <main>
        {items.length ? null : <p>The list is empty</p>}
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
