import React, { useContext, useState } from "react";
import "./Nav.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartContext from "../context";

function Nav() {
  const { setOpen } = useContext(CartContext);

  return (
    <nav className="navigation">
      <ul className="list">
        <li className="listitem">home</li>
        <li className="listitem">product</li>
        <li
          onClick={() => {
            setOpen(true);
          }}
          className="listitem"
        >
          <ShoppingCartIcon />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
