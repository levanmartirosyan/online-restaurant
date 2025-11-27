import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <div className="logo">
        <h3>Logo</h3>
      </div>
      <nav>
        <Link to={"/"} className="item">
          <p>Home</p>
        </Link>
        <Link to={"/cart"} className="item">
          <p>Cart</p>
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
