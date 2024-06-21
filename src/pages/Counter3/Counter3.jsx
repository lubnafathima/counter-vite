import { useState } from "react";
import "../../App.css";
import "./Counter3.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Counter3 = () => {
  const [ count, setCount ] = useState(0);
  return (
    <div className="counter3_container">
      <Header count={count} setCount={setCount} />
      <div className="counter3_content">
        <h1 className="counter3">Counter: {count}</h1>
      </div>
      <Footer count={count} setCount={setCount} />
    </div>
  );
};

export default Counter3;
