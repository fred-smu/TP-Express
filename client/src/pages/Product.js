import React, { Component } from 'react';
import "../Style/product.css";
import Nav from "../components/Nav";
import axios from "axios";



// function Product() {
class TPComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      Walitems: [],
      Taritems: [],
      Amzitems: []
    };
  }
  componentDidMount() {

    // not sure if we need this or not. stephen says we dont.
    // const axios = require("axios");

    /*********************************************
     * NOTE PLEASE READ.
     * 
     * 1) all 3 apis calls are charging me after 10 free aip hits a day.
     *  it is only "2 cents" but still they add up.
     * 
     * 2) we have 2 walmart aips. the top one dose not look to be working. 
     * the 2nd/lower walmar aip works but times out.
     * 
     * 3)not sure on the time out other then maybe it is food only and not going to give toilet papper.
     * 
     * 4) if you work on the apis please update the lead comment with what error you are gitting
     * 
     * 
     * 
     */

// 1st walmart api call is giving a 403 forbidden error

// axios({
//   "method":"GET",
//   "url":"https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-lookup-product",
//   "headers":{
//   "content-type":"application/octet-stream",
//   "x-rapidapi-host":"axesso-walmart-data-service.p.rapidapi.com",
//   "x-rapidapi-key":"9429490917msh70be5ef070eec0ep1fec84jsnafca7d833618"
//   },"params":{
//   "url":"toilet paper"
//   }
//   })
//   .then((response)=>{
//     console.log(response)
//   })
//   .catch((error)=>{
//     console.log(error)
//   })

// 1st walmart api call above
/************************************************************************************************** */

//2nd walmart api call is giving a 522 error.. 522 is a timming out error.

    // axios({
    //   "method": "GET",
    //   "url": "https://feeditem-walmart.p.rapidapi.com/itemID/toilet%2520paper",
    //   "headers": {
    //     "content-type": "application/octet-stream",
    //     "x-rapidapi-host": "feeditem-walmart.p.rapidapi.com",
    //     "x-rapidapi-key": "9429490917msh70be5ef070eec0ep1fec84jsnafca7d833618"
    //   }
    // })
    //   .then(res => res.json())
    //   .then((WALdata) => {
    //     this.setState({ Walitems: WALdata })
    //     console.log("walmart --" + this.state.WALdata);

    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })

//2nd walmart api call above
/************************************************************************************************** */

// Target api call is failing with "Uncaught (in promise) Error: Request failed with status code 522" 
// error code 522 is a time out error
   
    // axios({
    //   "method": "GET",
    //   "url": "https://feeditem-target.p.rapidapi.com/itemID/toilet%2520paper",
    //   "headers": {
    //     "content-type": "application/octet-stream",
    //     "x-rapidapi-host": "feeditem-target.p.rapidapi.com",
    //     "x-rapidapi-key": "9429490917msh70be5ef070eec0ep1fec84jsnafca7d833618"
    //   }
    // })
    //   .then(res => res.json())
    //   .then((TARdata) => {
    //     this.setState({ Taritems: TARdata })
    //     console.log("target --" + TARdata);
    //   })

// Target api call above
/************************************************************************************************** */

// Amazon api 
// call is coming back with a 
// Product.js:105 Uncaught (in promise) TypeError: res.json is not a function
// this is a formating error i dont have somthing defined correctly"
  
    // axios({
    //   "method": "GET",
    //   "url": "https://amazon-price.p.rapidapi.com/azapi-azSearch",
    //   "headers": {
    //     "content-type": "application/octet-stream",
    //     "x-rapidapi-host": "amazon-price.p.rapidapi.com",
    //     "x-rapidapi-key": "9429490917msh70be5ef070eec0ep1fec84jsnafca7d833618"
    //   }, "params": {
    //     "prime": "false",
    //     "query": "toilet paper",
    //     "page": "1"
    //   }
    // })
    //     .then(res => res.json())
    //     .then((AMZdata) => {
    //       this.setState({ Amzitems: AMZdata })
    //       console.log("Amizon --" + AMZdata);
    //     })

  
// Amazon api call above

  }

  render() {
    return (
      <div>
        <Nav />
        <hr /><hr />
        <section className="brand-area">
          <ul className="brand-content">
            <li className="brand-left">
              <div className="card" style={{ width: "18rem", height: "18rem" }}>
                {/* <img className="card-img-top" src="API Image" alt="Card logo cap" /> */}
                <img className="card-img-top" alt="Card logo cap" />
              </div>
            </li>
            <li className="brand-right">
              <h2 className="product-title text-darkgray">Product title here FRED</h2>
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
  };
};
export default TPComponent;
