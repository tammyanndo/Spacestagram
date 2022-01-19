import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <Link className="nav-link" to="/">Spacestagram</Link>
      </ul>
    </div>
  )
}

export default NavBar;