import React from "react";
import "../Style/account.css"
import Logo from "../Style/tp-icon.png";
import Product from "../pages/Product";
import Nav from "../components/Nav";

function Account() {
    return (
        <div>
            <Nav />
            <hr /><hr />
            <section className="account-area">
                <ul className="account-content">
                    <li className="account-left">
                        <div className="card" style={{ width: "18rem", height: "18rem" }}>
                            <img className="card-img-top" src="ImageUpload" alt="Profile pic" />
                        </div>
                    </li>
                    <li className="account-right">
                        <h2 className="name-title text-darkgray">Account page</h2>
                        <hr /><hr />
                        <ul className="account-content">
                            <li>
                                <br />
                                <h4>Full Name:</h4>
                                <br />
                                <p>Name here</p>
                                <br />
                                <br />
                                <h4>Email address:</h4>
                                <br />
                                <p>Address here</p>
                                <br />
                            </li>
                            <li>
                                <br />
                                <h4>Home Address:</h4>
                                <br />
                                <p>Home address here</p>
                                <br />
                            </li>
                            <li>
                                <br />
                                <h4>Phone number:</h4>
                                <br />
                                <p>Phone number here</p>
                                <br />
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
            <br /><br />
            <br /><br />
            <hr /><hr />
            <section className="favorite-area">
                <h2 className="favorite-title text-lightgray">Favorites List</h2>
                <span className="brand-cards">
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={Logo} alt="Card logo cap" />
                        <div className="card-body">
                            <h5 className="card-title">Toilet Paper product title</h5>
                            <p className="card-text">Company Title of toilet paper brand</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Price From Walmart</li>
                            <li className="list-group-item">Price From Target</li>
                            <li className="list-group-item">Price From Amazon</li>
                        </ul>
                        <div className="card-body">
                            <a href={{ Product }} className="card-link">View item</a>
                            <a href={{ Account }} className="card-link">Remove item</a>
                        </div>
                    </div>
                </span>
            </section>
        </div>
    );
}
export default Account;
