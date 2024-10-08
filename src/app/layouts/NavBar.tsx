import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className={"navbar"}>
      <div><Link to="/">Home</Link></div>
      <div><Link to="/products">Products</Link></div>
    </div>
  );
}

export default Navbar;