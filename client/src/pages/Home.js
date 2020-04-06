import React from "react";
import "../Style/style.css";
import Logo from "../Style/tp-icon.png";
import Nav from "../components/Nav";

function Home() {

    return (
        <div>
            <Nav />
            <section className="tp-banner">
                <h2><img src={Logo} style={{ height: "110px", width: "150px" }} alt="logo" />TP-Express</h2>
                <h6 className="brand-slogan">We can find you your TP!</h6>
            </section>
            <span className="brand-cards">
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={Logo} alt="Card logo cap" />
                    <div className="card-body">
                        <h5 className="card-title">Toilet Paper product title</h5>
                        <p className="card-text">Company Title of toilet paper brand</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Price From Walmart</li>
                    </ul>
                </div>
            </span>
            <span className="brand-cards">
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={Logo} alt="Card logo cap" />
                    <div className="card-body">
                        <h5 className="card-title">Toilet Paper product title</h5>
                        <p className="card-text">Company Title of toilet paper brand</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Price From Walmart</li>
                    </ul>
                </div>
            </span>
            <span className="brand-cards">
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={Logo} alt="Card logo cap" />
                    <div className="card-body">
                        <h5 className="card-title">Toilet Paper product title</h5>
                        <p className="card-text">Company Title of toilet paper brand</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Price From Walmart</li>
                    </ul>
                </div>
            </span>
            <span className="brand-cards">
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={Logo} alt="Card logo cap" />
                    <div className="card-body">
                        <h5 className="card-title">Toilet Paper product title</h5>
                        <p className="card-text">Company Title of toilet paper brand</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Price From Amazon</li>
                    </ul>
                </div>
            </span>
            <span className="brand-cards">
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={Logo} alt="Card logo cap" />
                    <div className="card-body">
                        <h5 className="card-title">Toilet Paper product title</h5>
                        <p className="card-text">Company Title of toilet paper brand</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Price From Amazon</li>
                    </ul>
                </div>
            </span>
            <span className="brand-cards">
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={Logo} alt="Card logo cap" />
                    <div className="card-body">
                        <h5 className="card-title">Toilet Paper product title</h5>
                        <p className="card-text">Company Title of toilet paper brand</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Price From Amazon</li>
                    </ul>
                </div>
            </span>
        </div>
    );
}
export default Home;