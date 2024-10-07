import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className={"navbar"}>
      <div><Link to="/">HOME</Link></div>
      <div><Link to="/detail">Details</Link></div>
    </div>
  );
}

export default Navbar;