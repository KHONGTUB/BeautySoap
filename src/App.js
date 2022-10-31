import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import CartContext from "./context";
import Soaps from "./components/Soaps";
import soap from "./data/soap";
import TemporaryDrawer from "./components/Drawer";

function App() {
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);

  return (
    <CartContext.Provider value={{ cart, setCart, open, setOpen }}>
      <div className="App">
        <Nav />
        <Soaps />
        <TemporaryDrawer />
      </div>
    </CartContext.Provider>
  );
}

export default App;
