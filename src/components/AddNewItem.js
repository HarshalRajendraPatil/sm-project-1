import { useState } from "react";

export function AddNewItem({ setIsAddingNewItem, setFoodItemList }) {
  const [newItemName, setNewItemName] = useState("");
  const [newItemUrl, setNewItemUrl] = useState("");
  const [newItemPrice, setNewItemPrice] = useState(0);

  function handleAddNewItem(e) {
    e.preventDefault();

    if (!newItemName || !newItemPrice || !newItemUrl)
      return alert("please fill out all the fields");

    const newItem = {
      image: newItemUrl,
      name: newItemName,
      price: newItemPrice,
    };

    setFoodItemList((food) => [...food, newItem]);

    setIsAddingNewItem((adding) => !adding);

    setNewItemName("");
    setNewItemUrl("");
    setNewItemPrice(0);
  }

  function handleCloseAddNewItem(e) {
    e.preventDefault();
    setIsAddingNewItem((adding) => !adding);
  }
  return (
    <div className="add-item">
      <form className="add-item-form">
        <div className="add-item-name">
          <label>Item Name: </label>
          <input
            type="text"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
          />
        </div>
        <div className="add-item-image">
          <label>Item URL: </label>
          <input
            type="url"
            value={newItemUrl}
            onChange={(e) => setNewItemUrl(e.target.value)}
          />
        </div>
        <div className="add-item-price">
          <label>Item Price: </label>
          <input
            type="text"
            value={newItemPrice}
            onChange={(e) => setNewItemPrice(e.target.value)}
          />
        </div>
        <button className="btn" onClick={handleAddNewItem}>
          Add Item
        </button>
        <button className="btn" onClick={handleCloseAddNewItem}>
          close
        </button>
      </form>
    </div>
  );
}
