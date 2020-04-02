import React from "react";
import "../Style/login.css"
import Logo from "../Style/tp-icon.png"


function PWReset() {
  
  return (

    <div class="conainer-fuild">
    <div class="row">
        <div class="col-lg-6 col-md-6 d-none d-md-block image-container"></div>
        <div class="col-lg-6 col-md-6 form-container">
            <div class="col-md-8 col-md-12 col-sm-9 col-xs-12 form-box text-center">
                <div class="logo text-center mt-5">
                    <img src={Logo} style={{height: "90px", width: "130px"}}/>
                </div>
                <div class="reset-form d-block">
                    <form class="reset-password-form">
                        <h4 class="mb-3">Reset Your Password</h4>
                        <p class="mb-3 text-white">
                            Please enter your email address and we will send you a password reset link
                        </p>
                        <div>
                            
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    </div>
</div>

   
  );
}
export default PWReset;
