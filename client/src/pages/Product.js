import React, { Component } from 'react';
import "../Style/product.css";
import Nav from "../components/Nav";
import axios from "axios";
var Item = [];
var WalProd  = " ";
var WalPrice = " ";
var WalAval  = " ";


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
    Item[0]="https://www.walmart.com/ip/Cottonelle-FreshCare-Flushable-Wipes-resealable-pack-168-wipes-total/38192980"
    Item[1]="https://www.walmart.com/ip/Angel-Soft-Toilet-Paper-12-Jumbo-Rolls/713550748"
    Item[2]="https://www.walmart.com/ip/Charmin-Ultra-Strong-Toilet-Paper-9-Mega-Roll-286-Sheets-Per-Roll/450185839"
    
    // axios({
    //   "method":"GET",
    //   "url":"https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-search-by-keyword",
    //   "headers":{
    //   "content-type":"application/octet-stream",
    //   "x-rapidapi-host":"axesso-walmart-data-service.p.rapidapi.com",
    //   "x-rapidapi-key":"3b8ee98b70mshf74d3fe848bde7dp1f7b3ajsn392bc6e2ea65"
    //   },"params":{
    //     "sortBy": "best_match",
    //     "page": 1,
    //     "keyword": "toilet paper",
    //     "type": "text",
    //   }
    //   })
    //   .then((response)=>{
    //     Item[0]="https://www.walmart.com"+response.data.foundProducts[0];
    //     Item[1]="https://www.walmart.com"+response.data.foundProducts[1];
    //     Item[2]="https://www.walmart.com"+response.data.foundProducts[2];
    //     // TPComponent.state.Walitems[0]=response.data.foundProducts[0];
    //     // TPComponent.state.Walitems[1]=response.data.foundProducts[1];
    //     // TPComponent.state.Walitems[2]=response.data.foundProducts[2];
    //     console.log('response=',  Item[0])
    //     console.log('response=',  Item[1])
    //     console.log('response=',  Item[2])
       
    //   })
    //   .catch((error)=>{
    //     console.log('error', error)
    //   })

    
// axios({
//   "method":"GET",
//   "url":"https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-lookup-product",
//   "headers":{
//   "content-type":"application/octet-stream",
//   "x-rapidapi-host":"axesso-walmart-data-service.p.rapidapi.com",
//   "x-rapidapi-key":"3b8ee98b70mshf74d3fe848bde7dp1f7b3ajsn392bc6e2ea65"
//   },"params":{
//   "url":Item[0]
//   }
//   })
//   .then((response)=>{
//     WalProd  = response.data.productTitle;
//     WalPrice = response.data.price;
//     WalAval  = response.data.available;
//     console.log('response', WalProd)
//     console.log('response', WalPrice)
//     console.log('response', WalAval)
//   })
//   .catch((error)=>{
//     console.log('error', error)
//   })


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
              <h2 className="product-title text-darkgray">{WalProd}</h2>
              <hr /><hr />
              <ul className="store-content">
                <li><br />
                  <h4>Walmart Price</h4>
                  <br />
                  <p>Price: {WalPrice}</p>
                  <p>Avaliability: {WalAval}</p>
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
