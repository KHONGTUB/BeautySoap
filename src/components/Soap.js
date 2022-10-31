import React, { useContext } from "react";
import CartContext from "../context";

function Soap(props) {
  const { name, image, ingredients, price } = props.element;

  const cart = useContext(CartContext);
  return (
    <li className="flower">
      <h3>{name}</h3>
      <img style={{ width: 300, height: "auto" }} src={image} alt="soap"></img>
      <p>{ingredients}</p>
      <p>${Number.parseFloat(price).toFixed(2)}</p>
      <button
        onClick={() => {
          cart.setCart([...cart.cart, props.element]);
        }}
      >
        Add to Cart
      </button>
    </li>
  );
}

export default Soap;
