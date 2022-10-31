import React, { useContext, useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import CartContext from "../context";
import "./Drawer.css";

export default function TemporaryDrawer() {
  const [subtotal, setSubtotal] = useState(0);
  const { cart, open, setOpen } = useContext(CartContext);

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

  const updateTotal = (e, price) => {
    console.log(e.target.value);
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
                      src={element.image}
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
                      <h3>{element.name}</h3>
                      <p>${element.price}.00</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: 10,
                        alignItems: "center",
                      }}
                    >
                      <p>Quantity:</p>
                      <input
                        onChange={updateTotal(element.price)}
                        style={{ height: 25, width: 30 }}
                        defaultValue={1}
                        type="number"
                      ></input>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </Drawer>
    </div>
  );
}
