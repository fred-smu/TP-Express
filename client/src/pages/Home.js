import React, { Component } from 'react';
import axios from "axios";
import "../Style/style.css";
import Logo from "../Style/tp-icon.png";
import Nav2 from "../components/Nav2";

// function Product() {
class TPComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            WalItems: [],
            Taritems: [],
            Amzitems: [],
            WalProd: [],
            WalPrice: [],
            WalAval: []
        }
    }
    componentDidMount() {

        axios({
            "method": "GET",
            "url": "https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-search-by-keyword",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "axesso-walmart-data-service.p.rapidapi.com",
                "x-rapidapi-key": "3b8ee98b70mshf74d3fe848bde7dp1f7b3ajsn392bc6e2ea65"
            }, "params": {
                "sortBy": "best_match",
                "page": 1,
                "keyword": "toilet paper",
                "type": "text",
            }
        })
            .then((response) => {
                this.setState({ WalItems: "https://www.walmart.com" + response.data.foundProducts.slice(0, 3) });
                console.log(response.data.foundProducts.slice(0, 3));
                WalCall();
            })
            .catch((error) => {
                console.log('error', error)
            })
        const WalCall=()=> {
            console.log(this.state.WalItems);
            
            // this.state.WalItems.forEach(item =>
            //     axios({
            //         "method": "GET",
            //         "url": "https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-lookup-product",
            //         "headers": {
            //             "content-type": "application/octet-stream",
            //             "x-rapidapi-host": "axesso-walmart-data-service.p.rapidapi.com",
            //             "x-rapidapi-key": "3b8ee98b70mshf74d3fe848bde7dp1f7b3ajsn392bc6e2ea65"
            //         }, "params": {
            //             "url": item
            //         }
            //     })
            //         .then((response) => {
            //             this.setState({ WalProd: [...this.state.WalProd, response.data.productTitle] });
            //             this.setState({ WalPrice: [...this.state.WalPrice, response.data.price] });
            //             this.setState({ WalAval: [...this.state.WalAval, response.data.available] });
            //             console.log('WalProd:' + this.state.WalProd[0]);
            //             console.log('WalPrice' + this.state.WalPrice[0]);
            //             console.log('WalAval' + this.state.WalAval[0]);
            //         })
            //         .catch((error) => {
            //             console.log('error', error)
            //         })
            // )
        };
        /************************************************************************************************** */
        /***************************************************Kmart */
        // axios({
        //   "method":"POST",
        //   "url":"https://feeditem-kmart.p.rapidapi.com/keyword",
        //   "headers":{
        //   "content-type":"application/x-www-form-urlencoded",
        //   "x-rapidapi-host":"feeditem-kmart.p.rapidapi.com",
        //   "x-rapidapi-key":"9429490917msh70be5ef070eec0ep1fec84jsnafca7d833618"
        //   },"data":{
        //     "keyword": "toilet paper",
        //   }
        //   })
        //   .then((response)=>{
        //     console.log(response)
        //   })
        //   .catch((error)=>{
        //     console.log(error)
        //   })


        // Kmart api call above
        /************************************************************************************************** */

        // Amazon api 
        // call is coming back with a 
        // Product.js:105 Uncaught (in promise) TypeError: res.json is not a function
        // this is a formating error i dont have somthing defined correctly"



        // axios({
        //   "method":"GET",
        //   "url":"https://amazon-price1.p.rapidapi.com/search",
        //   "headers":{
        //   "content-type":"application/octet-stream",
        //   "x-rapidapi-host":"amazon-price1.p.rapidapi.com",
        //   "x-rapidapi-key":"9429490917msh70be5ef070eec0ep1fec84jsnafca7d833618"
        //   },"params":{
        //   "keywords":"toilet paper",
        //   "marketplace":"US"
        //   }
        //   })
        //   .then((response)=>{
        //     console.log(response)
        //   })
        //   .catch((error)=>{
        //     console.log(error)
        //   })

        // Amazon api call above

    }

    render() {
        return (
            <div>
                <Nav />
                <section className="tp-banner">
                    <h2><img src={Logo} style={{ height: "110px", width: "150px" }} alt="logo" />TP-Express</h2>
                    <h6 className="brand-slogan">We can find you your TP!</h6>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search brand" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </section>
                <span className="brand-cards">
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={Logo} alt="Card logo cap" />
                        <div className="card-body">
                            <h5 className="card-title">fred{this.state.WalProd[0]}</h5>
                            <p className="card-text">Walmart</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Price: {this.state.WalPrice[0]}</li>
                            {/* <li className="list-group-item">Price From Target</li> */}
                            {/* <li className="list-group-item">Price From Amazon</li> */}
                        </ul>
                        <div className="card-body">
                            {/* <a href={{ Product }} className="card-link">View Item</a>
                        <a href={{ Account }} className="card-link">Add to wishlist</a> */}
                        </div>
                    </div>
                </span>
                <span className="brand-cards">
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={Logo} alt="Card logo cap" />
                        <div className="card-body">
                            <h5 className="card-title">fred{this.state.WalProd[2]}</h5>
                            <p className="card-text">Walmart</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Price: {this.state.WalPrice[2]}</li>
                            {/* <li className="list-group-item">Price From Target</li> */}
                            {/* <li className="list-group-item">Price From Amazon</li> */}
                        </ul>
                        <div className="card-body">
                            {/* <a href={{ Product }} className="card-link">View Item</a>
                        <a href={{ Account }} className="card-link">Add to wishlist</a> */}
                        </div>
                    </div>
                </span><span className="brand-cards">
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={Logo} alt="Card logo cap" />
                        <div className="card-body">
                            <h5 className="card-title">fred{this.state.WalProd[3]}</h5>
                            <p className="card-text">Walmart</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Price: {this.state.WalPrice[3]}</li>
                            {/* <li className="list-group-item">Price From Target</li> */}
                            {/* <li className="list-group-item">Price From Amazon</li> */}
                        </ul>
                        <div className="card-body">
                            {/* <a href={{ Product }} className="card-link">View Item</a>
                        <a href={{ Account }} className="card-link">Add to wishlist</a> */}
                        </div>
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
                            <li className="list-group-item">Price From Target</li>
                            <li className="list-group-item">Price From Amazon</li>
                        </ul>
                        <div className="card-body">
                            <a href={{ Product }} className="card-link">View Item</a>
                            <a href={{ Account }} className="card-link">Add to wishlist</a>
                        </div>
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
                            <li className="list-group-item">Price From Target</li>
                            <li className="list-group-item">Price From Amazon</li>
                        </ul>
                        <div className="card-body">
                            <a href={{ Product }} className="card-link">View Item</a>
                            <a href={{ Account }} className="card-link">Add to wishlist</a>
                        </div>
                    </div>
                </span>
            </div>
        );
    };
    
}
export default TPComponent;