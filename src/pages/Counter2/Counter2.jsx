import { useState } from "react";
import "../../App.css";
import "./Counter2.css";
import Header from "../../components/Header/Header";

const Counter2 = () => {
  const [ count, setCount ] = useState(0);
  return (
    <div className="counter2_container">
      <Header count={count} setCount={setCount} />
      <div className="counter2_content">
        <h1 className="counter2">Counter: {count}</h1>
      </div>
    </div>
  );
};

export default Counter2;
