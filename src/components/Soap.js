import React, { useContext, useState } from "react";
import CartContext from "../context";

function Soap(props) {
  const { name, image, ingredients, price } = props.element;
  const [add, setAdded] = useState(false);

  const cart = useContext(CartContext);
  return (
    <li className="flower">
      <h3>{name}</h3>
      <img style={{ width: 300, height: "auto" }} src={image} alt="soap"></img>
      <p>{ingredients}</p>
      <p>${Number.parseFloat(price).toFixed(2)}</p>
      {add === false ? (
        <button
          className="addbutton"
          onClick={() => {
            cart.setCart([
              ...cart.cart,
              {
                product: props.element,
                quantity: 1,
              },
            ]);
            setAdded(true);
            console.log(cart.cart[0]);
          }}
        >
          Add to Cart
        </button>
      ) : (
        <button
          onClick={() => {
            console.log(cart.cart[0].product === props.element);
          }}
          className="addbutton"
        >
          Added!
        </button>
      )}
    </li>
  );
}

export default Soap;
