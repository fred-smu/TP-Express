import React from "react";
import { Link } from  "react-router-dom";

function Nav2() {
  
  return (
    <header>
    <h2><Link to="/">TP-Express</Link></h2>
    <nav>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Account">Account</Link></li>
        <li><Link to = "/">Sign Out</Link></li>
    </nav>
    </header>
  );
}
export default Nav2;
