import { useState } from "react";
import { Link } from "react-router-dom";
import "./Counter1.css";
import "../../App.css";

const Counter1 = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="main">
      <nav className="menu">
        <Link to="/" className="button menu_item">
          Counter 1
        </Link>
        <Link to="/counter2" className="button menu_item">
          Counter 2
        </Link>
        <Link to="/counter3" className="button menu_item">
          Counter 3
        </Link>
      </nav>
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
    </div>
  );
};

export default Counter1;
