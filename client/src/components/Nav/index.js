import React from "react";
import { Link } from  "react-router-dom";

function Nav() {
  
  return (
    <header>
    <h2><Link to="/">TP-Express</Link></h2>
    <nav>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/">SignUp/Login</Link></li>
    </nav>
    </header>
  );
}
export default Nav;
