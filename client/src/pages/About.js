import React from "react";
import "../Style/style.css";
import Logo from "../Style/tp-icon.png";
import Nav from "../components/Nav";

function About() {

  return (
    <div>
      <Nav />
      <section className="tp-banner">
        <h1 className="mt-5">About Us</h1>
        <h2><img src={Logo} style={{ height: "110px", width: "150px" }} alt="logo" />TP-Express</h2>
        <p>We created this website for your TP needs. We know the situation when all toilet paper is going out from stores to your left and right.</p>
        <p>Use this app to find and settle on prices that fit in your budget and avaliability, so you'll be walking out the store with a TP in hand.</p>
        <p>We appreciate you using our app in hopes of improving in the future!</p>
        <h6>Hopefully not in another toilet paper apocalypes...</h6>
      </section>
    </div>
  );
}
export default About;
