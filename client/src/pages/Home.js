import React from "react";
import "../Style/style.css"
import Logo from "../Style/tp-icon.png"

function Home() {

    return (
    <div>
    <section className="tp-banner">
        <h2><img src={Logo} style={{height: "110px", width: "150px"}} />TP-Express</h2>
        <h6 className="brand-slogan">We can find you your TP!</h6>
        <form className="form-inline my-2 my-lg-0">
            <a>
            <input className="form-control mr-sm-2" type="search" placeholder="Search brand" aria-label="Search"/>
            </a>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>  
    </section>
    <span className="brand-cards">
        <div className="card" style={{width: "18rem"}}>
                   <a>
                   <img className="card-img-top" src={Logo} alt="Card image cap" aria-placeholder="Brand image here"/>
                   </a>
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
                           <a href="#" className="card-link">Show in map</a>
                           <a href="#" className="card-link">Add to wishlist</a>
            </div>
        </div>
    </span>
    <span className="brand-cards">
        <div className="card" style={{width: "18rem"}}>
            <a>
                <img className="card-img-top" src={Logo} alt="Card image cap" aria-placeholder="Brand image here"/>
            </a>
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
                        <a href="#" className="card-link">Show in map</a>
                        <a href="#" className="card-link">Add to wishlist</a>
            </div>
        </div>
    </span>
        <span className="brand-cards">
            <div className="card" style={{width: "18rem"}}>
                <a>
                    <img className="card-img-top" src={Logo} alt="Card image cap" aria-placeholder="Brand image here"/>
                </a>
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
                    <a href="#" className="card-link">Show in map</a>
                    <a href="#" className="card-link">Add to wishlist</a>
                </div>
             </div>
        </span>
    </div>
  );
}
export default Home;