import React from "react";
import "../Style/login.css"
import Logo from "../Style/tp-icon.png"



function Login() {
  
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
                    <input type="email" placeholder="Email Address" required/>
                </div>
                <div className="form-input">
                    <span><i className="fa fa-lock"></i></span>
                    <input type="password" placeholder="Password" required/>
                </div>
                <div className="row mb-3">
                    <div className="col-6 d-flex">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="controlOne"/>
                            <label className="custom-control-label text-white" for="controlOne">
                                Remember Me
                            </label> 
                        </div>
                    </div>
                    <div className="col-6 text-right">
                        <a href="forgotten.html" className="forgot-link">Forgot Password</a>
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn">Login</button>
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
export default Login;




