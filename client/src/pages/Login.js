import React, { Component } from "react";
import "../Style/login.css"
import Logo from "../Style/tp-icon.png"
import axios from "axios";


class Login extends Component {
    // Setting the component's initial state
    state = {
      email: "",
      password: ""
    };
    
    

    handleFormSubmit = (event, email, password) => {
        console.log(email, password);
        event.preventDefault();
        this.loginUser(email, password);        
    }
    
    handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      let value = event.target.value;
      console.log(event.target.value);
      const name = event.target.name;
      // Updating the input's state
      this.setState({
        [name]: value
      });
      console.log(this.state);
    };
    // Preventing the default behavior of the form submit (which is to refresh the page)
    loginUser = (email, password) => {
        axios.post("/api/login", {
            login: email,
            password: password
           
        })
          .then(function(data) {
              console.log(data);
            window.location.replace("/");

            // If there's an error, log the error
          })
          .catch(function(err) {
            console.log(err);
          });
      }    

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
                    <h4>Login into your account</h4>
                </div>
            <form>
                <div className="form-input">
                    <span><i className="fa fa-envelope"></i></span>
                    <input type="email" 
                    placeholder="Email Address" required
                    value={this.state.email}
                    name="email"
                    onChange={this.handleInputChange}/>
                </div>
                <div className="form-input">
                    <span><i className="fa fa-lock"></i></span>
                    <input type="password" 
                    placeholder="Password" required
                    value={this.state.password}
                    name="password"
                    onChange={this.handleInputChange}/>
                </div>
                <div className="row mb-3">
                    <div className="col-6 d-flex">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="controlOne"/>
                            <label className="custom-control-label text-white" htmlFor="controlOne">
                                Remember Me
                            </label> 
                        </div>
                    </div>
                    <div className="col-6 text-right">
                        <a href="forgotten.html" className="forgot-link">Forgot Password</a>
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn"  onClick={(event) => this.handleFormSubmit(event, this.state.email, this.state.password)}>Login</button>
                </div>
                <div className="mt-3 text-white">Don't have an account?
                    <a href="signup" className="signup-link">Sign Up</a>
                </div>
            </form>
            </div>
            
        </div>
    </div>
</div>
  );
}
}
export default Login;




