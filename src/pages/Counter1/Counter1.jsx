import { useState } from "react";
import "./Counter1.css";
import "../../App.css";

const Counter1 = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter1_container">
      <h1 className="counter1">Counter: {count}</h1>
      <div className="counter_handle">
        <button onClick={() => setCount(count + 1)} className="button">
          +
        </button>
        <button onClick={() => setCount(count - 1)} className="button">
          -
        </button>
        <button onClick={() => setCount(0)} className="button">
          0
        </button>
      </div>
    </div>
  );
};

export default Counter1;
