import "./Header.css";

const Header = ({ count, setCount }) => {
  return (
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
  )
}

export default Header
