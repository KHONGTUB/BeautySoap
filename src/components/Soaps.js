import React, { useEffect, useState } from "react";
import Soap from "./Soap";
import soap from "../data/soap";
import "./Soaps.css";

function Soaps() {
  const [scent, setScent] = useState("");
  const [scrub, setScrub] = useState("");
  const [filtered, setFiltered] = useState(soap);

  const toggleScent = (e) => {
    scent === e.target.id ? setScent("") : setScent(e.target.id);
  };

  const toggleScrub = (e) => {
    scrub === e.target.id ? setScrub("") : setScrub(e.target.id);
  };

  const filter = () => {
    if (scent.length > 0 && scrub.length > 0) {
      if (scrub === "scrub") {
        setFiltered(
          soap.filter((element) => {
            return element.name.includes(scent) && element.scrub === true;
          })
        );
      } else {
        setFiltered(
          soap.filter((element) => {
            return element.name.includes(scent) && element.scrub === false;
          })
        );
      }
    } else if (scent.length > 0) {
      setFiltered(
        soap.filter((element) => {
          return element.name.includes(scent);
        })
      );
    } else if (scrub === "scrub") {
      setFiltered(
        soap.filter((element) => {
          return element.scrub === true;
        })
      );
    } else if (scrub === "without scrub") {
      setFiltered(
        soap.filter((element) => {
          return element.scrub === false;
        })
      );
    } else {
      setFiltered(soap);
    }
  };

  useEffect(() => {
    filter();
  }, [scent, scrub]);

  return (
    <div>
      <div className="selectors">
        <div className="scent">
          <button
            id="Lavender"
            className={scent === "Lavender" ? "active" : "nonactive"}
            onClick={toggleScent}
          >
            Lavender
          </button>
          <button
            id="Lotus"
            className={scent === "Lotus" ? "active" : "nonactive"}
            onClick={toggleScent}
          >
            Lotus
          </button>
          <button
            id="Chrysanthemum"
            className={scent === "Chrysanthemum" ? "active" : "nonactive"}
            onClick={toggleScent}
          >
            Chrysanthemum
          </button>
        </div>
        <div className="scrubs">
          <button
            id="without scrub"
            className={scrub === "without scrub" ? "active" : "nonactive"}
            onClick={toggleScrub}
          >
            without scrub
          </button>
          <button
            id="scrub"
            className={scrub === "scrub" ? "active" : "nonactive"}
            onClick={toggleScrub}
          >
            with scrub
          </button>
        </div>
      </div>
      <ul className="flowerlist">
        {filtered.map((element) => {
          return <Soap element={element} />;
        })}
      </ul>
    </div>
  );
}

export default Soaps;
