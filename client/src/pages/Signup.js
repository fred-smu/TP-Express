import React from "react";
import "../Style/signup.css"
import Logo from "../Style/tp-icon.png"


function Signup() {
  
  return (
   
    <div class="conainer-fuild">
        <div class="row">
            <div class="col-lg-6 col-md-6 d-none d-md-block image-container"></div>
            <div class="col-lg-6 col-md-6 form-container">
                <div class="col-md-8 col-md-12 col-sm-9 col-xs-12 form-box text-center">
                    <div class="logo text-center mt-5">
                        <a>
                        <img src={Logo} style={{height: "90px", width: "130px"}}/>
                        </a>
                    </div>
                    <div class="heading mb-3">
                        <h4>Create an account</h4>
                    </div>
                <form>
                    <div class="form-input">
                        <span><i class="fa fa-user"></i></span>
                        <a>
                        <input type="email" placeholder="Full Name" required/>
                        </a>
                    </div>
                    <div class="form-input">
                        <span><i class="fa fa-envelope"></i></span>
                        <a>
                        <input type="email" placeholder="Email Address" required/>
                        </a>
                    </div>
                    <div class="form-input">
                        <span><i class="fa fa-lock"></i></span>
                        <a>
                        <input type="password" placeholder="Password" required/>
                        </a>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 d-flex">
                            <div class="custom-control custom-checkbox">
                                <a>
                                <input type="checkbox" class="custom-control-input" id="controlOne"/>
                                </a>
                                <label class="custom-control-label text-white" for="controlOne">
                                    I agree all terms & conditions
                                </label> 
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn">Sign Up</button>
                    </div>
                    <div class="mt-3 text-white">Already have an account?
                        <a href="login.html" class="login-link">Login</a>
                    </div>
                </form>
                </div>
                
            </div>
        </div>
    </div>
  );
}
export default Signup;


{/* <div class="conainer-fuild">
<div class="row">
    <div class="col-lg-6 col-md-6 d-none d-md-block image-container"></div>
    <div class="col-lg-6 col-md-6 form-container">
        <div class="col-md-8 col-md-12 col-sm-9 col-xs-12 form-box text-center">
            <div class="logo text-center mt-5">
                <img src="tp-icon.png" style="height: 90px; width: 130px;"/>
            </div>
            <div class="heading mb-3">
                <h4>Create an account</h4>
            </div>
        <form>
            <div class="form-input">
                <span><i class="fa fa-user"></i></span>
                <input type="email" placeholder="Full Name" required>
            </div>
            <div class="form-input">
                <span><i class="fa fa-envelope"></i></span>
                <input type="email" placeholder="Email Address" required>
            </div>
            <div class="form-input">
                <span><i class="fa fa-lock"></i></span>
                <input type="password" placeholder="Password" required>
            </div>
            <div class="row mb-3">
                <div class="col-12 d-flex">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="controlOne">
                        <label class="custom-control-label text-white" for="controlOne">
                            I agree all terms & conditions
                        </label> 
                    </div>
                </div>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn">Sign Up</button>
            </div>
            <div class="mt-3 text-white">Already have an account?
                <a href="login.html" class="login-link">Login</a>
            </div>
        </form>
        </div>
        
    </div>
</div>
</div> */}
