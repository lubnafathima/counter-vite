import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ count, setCount }) => {
  return (
    <div className="header">
      <nav className="link">
        <Link to="/" className="button link_item">Counter 1</Link>
        <Link to="/counter2" className="button link_item">Counter 2</Link>
        <Link to="/counter3" className="button link_item">Counter 3</Link>
      </nav>
      <div className="count_handle">
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

export default Header;
