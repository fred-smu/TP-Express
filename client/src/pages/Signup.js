import React, { Component } from "react";
import "../Style/signup.css"
import Logo from "../Style/tp-icon.png"
import axios from "axios";

class Signup extends Component {
    state = {
        fullName: "",
        email: "",
        password: ""
      };

      handleFormSubmit = (event, fullName, email, password) => {
        event.preventDefault();
        console.log(fullName, email, password)
        this.signUpUser(fullName, email, password);
      }

      handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;
    
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };
      test = () => {
        axios.get("/api/test")
          .then(function(data){console.log(data);})
      }
      signUpUser = (event, fullName,email, password) => {
        event.preventDefault();
        console.log(fullName, email, password);
        axios.post("/api/signup", {
            name: fullName,
            login: email,
          password: password
        })
          .then(function(data) {
              console.log(data);
            window.location.replace("/Home");
            // If there's an error, handle it by throwing up a bootstrap alert
          })
        //   .catch(handleLoginErr);
      };
 render() {
    return (
   
    <div className="conainer-fuild">
        <div className="row">
            <div className="col-lg-6 col-md-6 d-none d-md-block image-container"></div>
            <div className="col-lg-6 col-md-6 form-container">
                <div className="col-md-8 col-md-12 col-sm-9 col-xs-12 form-box text-center">
                    <div className="logo text-center mt-5">
                        <img src={Logo} style={{height: "90px", width: "130px"}} alt = "logo"/>
                    </div>
                    <div className="heading mb-3">
                        <h4>Create an account</h4>
                    </div>
                <form>
                    <div className="form-input">
                        <span><i className="fa fa-user"></i></span>
                        <input type="text" 
                        placeholder="Full Name" required
                        value={this.state.fullName}
                        name="fullName"
                        onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-input">
                        <span><i className="fa fa-envelope"></i></span>
                        <input type="email" 
                        placeholder="Email Address" required
                        id="email-input"
                        value={this.state.email}
                        name="email"
                        onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-input">
                        <span><i className="fa fa-lock"></i></span>
                        <input  type="password"
                        placeholder="Password" required                        
                        id="password-input" 
                        value={this.state.password}
                        name="password"
                        onChange={this.handleInputChange}/>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12 d-flex">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="controlOne"/>
                                <label className="custom-control-label text-white" htmlFor="controlOne">
                                    I agree all terms & conditions
                                </label> 
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button onClick = {(event) => this.signUpUser(event, this.state.fullName, this.state.email, this.state.password)} type="text" className="btn btn">Sign Up</button>
                    </div>
                    <div className="mt-3 text-white">Already have an account?
                        <a href="login.html" className="login-link">Login</a>
                    </div>
                </form>
                </div>
                
            </div>
        </div>
    </div>
  );
  }
}
export default Signup;


/* <div className="conainer-fuild">
<div className="row">
    <div className="col-lg-6 col-md-6 d-none d-md-block image-container"></div>
    <div className="col-lg-6 col-md-6 form-container">
        <div className="col-md-8 col-md-12 col-sm-9 col-xs-12 form-box text-center">
            <div className="logo text-center mt-5">
                <img src="tp-icon.png" style="height: 90px; width: 130px;"/>
            </div>
            <div className="heading mb-3">
                <h4>Create an account</h4>
            </div>
        <form>
            <div className="form-input">
                <span><i className="fa fa-user"></i></span>
                <input type="email" placeholder="Full Name" required>
            </div>
            <div className="form-input">
                <span><i className="fa fa-envelope"></i></span>
                <input type="email" placeholder="Email Address" required>
            </div>
            <div className="form-input">
                <span><i className="fa fa-lock"></i></span>
                <input type="password" placeholder="Password" required>
            </div>
            <div className="row mb-3">
                <div className="col-12 d-flex">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="controlOne">
                        <label className="custom-control-label text-white" for="controlOne">
                            I agree all terms & conditions
                        </label> 
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn">Sign Up</button>
            </div>
            <div className="mt-3 text-white">Already have an account?
                <a href="login.html" className="login-link">Login</a>
            </div>
        </form>
        </div>
        
    </div>
</div>
</div> */
