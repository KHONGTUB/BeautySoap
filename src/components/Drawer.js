import React, { useContext, useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import CartContext from "../context";
import "./Drawer.css";

export default function TemporaryDrawer() {
  const [subtotal, setSubtotal] = useState(0);
  const { cart, open, setOpen } = useContext(CartContext);

  useEffect(() => {
    console.log(cart);
    if (cart.length > 0) {
      setSubtotal(subtotal + cart[cart.length - 1].product.price);
    }
  }, [cart]);

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const changeQuantity = (e, { product }) => {
    let index = cart.findIndex((obj) => obj.product.name === product.name);

    if (e.target.id === "+") {
      cart[index].quantity = cart[index].quantity + 1;
      setSubtotal(subtotal + product.price);
    }
    if (e.target.id === "-") {
      cart[index].quantity = cart[index].quantity - 1;
      setSubtotal(subtotal - product.price);
    }
    TemporaryDrawer.forceUpdate();
  };

  return (
    <div>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => {
          toggleDrawer("right", false);
          setOpen(false);
        }}
      >
        {" "}
        {cart.length === 0 ? (
          <div> Your cart is empty</div>
        ) : (
          <div className="cart">
            <ul className="cartlist">
              {cart.map((element) => {
                return (
                  <li className="cartitem">
                    <img
                      src={element.product.image}
                      alt="soap"
                      style={{ width: 200, height: "auto" }}
                    ></img>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <h3>{element.product.name}</h3>
                      <p>${element.product.price}.00</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: 10,
                        alignItems: "center",
                      }}
                    >
                      <p>Quantity:</p>
                      <button
                        onClick={(e) => changeQuantity(e, element)}
                        id="-"
                      >
                        -
                      </button>
                      <div
                        id={element.product.name}
                        style={{ height: 25, width: 15 }}
                        type="number"
                      >
                        {element.quantity}
                      </div>
                      <button
                        onClick={(e) => changeQuantity(e, element)}
                        id="+"
                      >
                        +
                      </button>
                    </div>
                  </li>
                );
              })}
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  marginRight: 25,
                }}
              >
                subtotal: ${subtotal}.00
              </div>
            </ul>
          </div>
        )}
      </Drawer>
    </div>
  );
}
