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
    <>
      <div className="count">
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <div className="btn">
          <button onClick={() => btnClickHandler("inc")}>Increment</button>
          <button onClick={() => btnClickHandler("dec")}>Decrement</button>
        </div>
      </div>
    </>
  );
}

export default App;
