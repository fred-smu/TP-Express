import React from "react";
import "../Style/product.css";
import Nav from "../components/Nav";

function Product() {

    return (
        <div>
            <Nav />
            <hr /><hr />
            <section className="brand-area">
                <ul className="brand-content">
                    <li className="brand-left">
                        <div className="card" style={{ width: "18rem", height: "18rem" }}>
                            <img className="card-img-top" src="API Image" alt="Card logo cap" />
                        </div>
                    </li>
                    <li className="brand-right">
                        <h2 className="product-title text-darkgray">Product title here</h2>
                        <hr /><hr />
                        <ul className="store-content">
                            <li><br />
                                <h4>Walmart Price</h4>
                                <br />
                                <p>Price: Price here!</p>
                                <p>Avaliability: Status here</p>
                                <br />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Add to favorites</button>
                                <br /><br />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Store Website</button>
                            </li>
                            <li><br />
                                <h4>Target Price</h4>
                                <br />
                                <p>Price: Price here!</p>
                                <p>Avaliability: Status here</p>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Add to favorites</button>
                                <br /><br />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Store Website</button>
                            </li>
                            <li><br />
                                <h4>Amazon Price</h4>
                                <br />
                                <p>Price: Price here!</p>
                                <p>Avaliability: Status here</p>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Add to favorites</button>
                                <br /><br />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Store Website</button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
    );
}
export default Product;
