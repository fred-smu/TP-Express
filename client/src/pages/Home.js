import React, {useState} from "react";
import "../Style/style.css";
import Logo from "../Style/tp-icon.png";
import Nav from "../components/Nav";
import TPCard from './TPCard';
import {charmin12, charmin24, scott12, scott24, cottonelle12, cottonelle24} from "./mockData";

function Home() {
    const [typeChosen, setTypeChosen] = useState('');
    const [typesArray, setTypesArray] = useState([]);
    var brand, image, size, walmartPrice, targetPrice, amazonPrice, walmartAvailability, targetAvailability, amazonAvailability;

    const handleClick = (event) => {
        event.preventDefault();
        var choice = document.getElementById("select-box").value;
        setTypeChosen(choice);
        setTypesArray([choice, ...typesArray])
    }

    var allCards;


    if (typesArray.length >= 1) {
        allCards = typesArray.map((type, index) => {

        if (type === 'charmin12') {
            image = charmin12.image;
            brand = charmin12.brand;
            size = charmin12.size;
            walmartPrice = charmin12.walmart.price;
            walmartAvailability = charmin12.walmart.availability;
            targetPrice = charmin12.target.price;
            targetAvailability = charmin12.target.availability;
            amazonPrice = charmin12.amazon.price;
            amazonAvailability = charmin12.amazon.availability;  
        }  else if (type === 'charmin24') {
            image = charmin24.image;
            size = charmin24.size;
            brand  = charmin24.brand;
            walmartPrice = charmin24.walmart.price;
            walmartAvailability = charmin24.walmart.availability;
            targetPrice = charmin24.target.price;
            targetAvailability = charmin24.target.availability;
            amazonPrice = charmin24.amazon.price;
            amazonAvailability = charmin24.amazon.availability;  
        } else if (type === 'scott12') {
            image = scott12.image;
            brand  = scott12.brand;
            size = scott12.size;
            walmartPrice = scott12.walmart.price;
            walmartAvailability = scott12.walmart.availability;
            targetPrice = scott12.target.price;
            targetAvailability = scott12.target.availability;
            amazonPrice = scott12.amazon.price;
            amazonAvailability = scott12.amazon.availability;  
        } else if (type === 'scott24') {
            image = scott24.image;
            brand  = scott24.brand;
            size = scott24.size;
            walmartPrice = scott24.walmart.price;
            walmartAvailability = scott24.walmart.availability;
            targetPrice = scott24.target.price;
            targetAvailability = scott24.target.availability;
            amazonPrice = scott24.amazon.price;
            amazonAvailability = scott24.amazon.availability;  
        } else if (type === 'cottonelle12') {
            image = cottonelle12.image;
            brand  = cottonelle12.brand;
            size = cottonelle12.size;
            walmartPrice = cottonelle12.walmart.price;
            walmartAvailability = cottonelle12.walmart.availability;
            targetPrice = cottonelle12.target.price;
            targetAvailability = cottonelle12.target.availability;
            amazonPrice = cottonelle12.amazon.price;
            amazonAvailability = scott12.amazon.availability;  
        } else if (type === 'cottonelle24') {
            image = cottonelle24.image;
            brand  = cottonelle24.brand;
            size = cottonelle24.size;
            walmartPrice = cottonelle24.walmart.price;
            walmartAvailability = cottonelle24.walmart.availability;
            targetPrice = cottonelle24.target.price;
            targetAvailability = cottonelle24.target.availability;
            amazonPrice = cottonelle24.amazon.price;
            amazonAvailability = cottonelle24.amazon.availability;  
        }


            return (
                <TPCard key={index} brand={brand} image={image} size={size} walmartPrice={walmartPrice} walmartAvailability={walmartAvailability} targetPrice={targetPrice} targetAvailability={targetAvailability} amazonPrice={amazonPrice} amazonAvailability={amazonAvailability}/>
            )
        })
    }


    return (
        <div>
            <Nav />
            <section className="tp-banner">
                <h2><img src={Logo} style={{ height: "110px", width: "150px" }} alt="logo" />TP-Express</h2>
                <h6 className="brand-slogan">We can find you your TP!</h6>
                <form className="form-inline my-2 my-lg-0">
                    <select id="select-box" type="search" placeholder="Search brand" aria-label="Search">
                        <option value="placeholder"></option>
                        <option value="charmin12">Charmin 12 Pack</option>
                        <option value="charmin24">Charmin 24 Pack</option>
                        <option value="scott12">Scott 12 Pack</option>
                        <option value="scott24">Scott 24 Pack</option>
                        <option value="cottonelle12">Cottonelle 12 Pack</option>
                        <option value="cottonelle24">Cottonelle 24 Pack</option>
                    </select>
                    <button onClick={handleClick}className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <div className="cards-container">
                    {allCards}
                </div>
            </section>
        </div>
    );
}
export default Home;