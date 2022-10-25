import "./App.css";
import Nav from "./components/Nav";
import soap from "./data/soap";

function App() {
  return (
    <div className="App">
      <Nav />
      <ul className="flowerlist">
        {soap.map((element) => {
          return (
            <li className="flower">
              <h3>{element.name}</h3>
              <p>{element.ingredients}</p>
              <p>${Number.parseFloat(element.price).toFixed(2)}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
