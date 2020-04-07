import React, {Component} from 'react';
import "../Style/account.css"
import Nav2 from "../components/Nav2";
import ImageUpload from "../components/ImageUpload"
import axios from "axios";

class Account extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fullName: "",
        login: "",
        password: "",
        address: "",
        phone:""
      }
    }
    componentDidMount(){
        axios.get("/bananas")
        .then(
            (data)=> {
                console.log("RESPONSE DATA", data)
                this.setState({login: data.data.login, name: data.data.name, address: data.data.address, phone: data.data.phone, fullName: data.data.fullName})
            }
        )
    }
    render() {
        return (
            <div>
            <div>
                <Nav2/>
                <hr /><hr />
                <ImageUpload/>
            </div>
            <div className="section account-area">
                <ul className="account-content">
                    <li className="account-right">
                        <h2 className="name-title text-darkgray">Account page</h2>
                        <hr /><hr />
                        <ul className="account-content">
                            <li>
                                <br />
                                <h4>Full Name:</h4>
                                <br />
                                <p>{this.state.fullName !==""? this.state.fullName:null}</p>
                                <br />
                                <br />
                                <h4>Email address:</h4>
                                <br />
                                <p>{this.state.login !==""? this.state.login:null}</p>
                                <br />
                            </li>
                            <li>
                                <br />
                                <h4>Home Address:</h4>
                                <br />
                                <p>{this.state.address !==""? this.state.address:null}</p>
                                <br />
                            </li>
                            <li>
                                <br />
                                <h4>Phone number:</h4>
                                <br />
                                <p>{this.state.phone !==""? this.state.phone:null}</p>
                                <br />
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        );
    }
  }
  export default Account;
