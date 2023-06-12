import { useState } from "react";

export function Food({ food }) {
  // state for checking if the user is interested to add the food into the cart
  const [addingToCart, setAddingToCart] = useState(false);

  // State for quantity and address
  const [quantity, setQunatity] = useState(0);
  const [address, setAddress] = useState("");

  function handleAddToCart(e, name, price) {
    e.preventDefault();

    if (!quantity || !address) return;
    setAddingToCart((c) => !c);
    window.alert(
      `${quantity} ${name} were successfully added to your cart with a total price of $${
        price * quantity
      } ($${price} each) will be delivered to ${address}`
    );
  }

  return (
    <div className="food">
      <div className="food-display">
        <img src={food.image} alt={food.name} className="food-logo" />
        <div className="food-item-name">{food.name}</div>
        <div className="food-item-price">
          {food.price < 10 ? `0${food.price}` : food.price} $
        </div>
        <button className="btn" onClick={() => setAddingToCart((c) => !c)}>
          {!addingToCart ? "Add to cart 🛒" : "Close"}
        </button>
      </div>
      {addingToCart && (
        <form className="add-to-cart-form">
          <div className="quantity">
            <label>Quantity: </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQunatity(e.target.value)}
            />
          </div>
          <div className="address">
            <label>Address: </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="final-price">
            $<span>{food.price * quantity}</span>
          </div>
          <button
            onClick={(e) => handleAddToCart(e, food.name, food.price, quantity)}
            className="btn"
          >
            Add
          </button>
        </form>
      )}
    </div>
  );
}
