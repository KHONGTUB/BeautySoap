import React, { useContext } from "react";
import Soap from "./Soap";
import soap from "../data/soap";

function Soaps() {
  return (
    <ul className="flowerlist">
      {soap.map((element) => {
        return <Soap element={element} />;
      })}
    </ul>
  );
}

export default Soaps;
