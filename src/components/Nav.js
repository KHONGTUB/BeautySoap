import React from "react";
import "./Nav.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Nav() {
  return (
    <nav className="navigation">
      <ul className="list">
        <li className="listitem">home</li>
        <li className="listitem">product</li>
        <li className="listitem">
          <ShoppingCartIcon />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
