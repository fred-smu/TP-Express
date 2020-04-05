import React, {Component} from 'react'
import Product from "../pages/Product";
import Account from "../pages/Account";
import "../Style/style.css";

class TPCard extends Component {
    render() {
        return (
            <span className="brand-cards">
                <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={this.props.image} alt="Card logo cap" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.brand}  {this.props.size}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <div className="store">
                        <li className="list-group-item">Walmart  ${this.props.walmartPrice}</li>
                        <li className="list-group-item">Available?  {this.props.walmartAvailability}</li>
                    </div>
                    <div className="store">
                    <li className="list-group-item">Target  ${this.props.targetPrice}</li>
                    <li className="list-group-item">Available?  {this.props.targetAvailability}</li>
                    </div>
                    <div className="store">
                    <li className="list-group-item">Amazon  ${this.props.amazonPrice}</li>
                    <li className="list-group-item">Available?  {this.props.amazonAvailability}</li>
                    </div>
                </ul>
                <div className="card-body">
                    <a href={{ Product }} className="card-link">View Item</a>
                    <a href={{ Account }} className="card-link">Add to wishlist</a>
                </div>
            </div>
        </span>
    )
    }
}

export default TPCard;
