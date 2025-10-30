import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const btnClickHandler = (type) => {
    if (type === "inc") {
      setCount((prev) => prev + 1);
    } else {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="app-container" data-testid="app">
      <h1 className="title" data-testid="title">
        Counter App
      </h1>

      <p className="count-text" data-testid="count">
        Count: {count}
      </p>

      <div className="button-container" data-testid="button-container">
        <button
          className="increment-btn"
          data-testid="increment-btn"
          onClick={() => btnClickHandler("inc")}
        >
          Increment
        </button>

        <button
          className="decrement-btn"
          data-testid="decrement-btn"
          onClick={() => btnClickHandler("dec")}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
