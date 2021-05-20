import React from "react"

function SigninForm(){
    return(
        <form className="custom-form">
                <div className="form-base">
                    <label>Email Address</label>
                    <input type="text" name="email" class="custom-form-input" placeholder="Email Address here" />
                </div>
                <div className="form-base">
                    <label>Password</label>
                    <input type="password" name="password" class="custom-form-input" placeholder="Password here" />
                </div>
                <div className="form-base">
                    <p>Don't have an account? Signup <a href="#signup">here</a></p>
                    <input type="submit" value="Sign In" className="custom-form-btn" />
                </div>
        </form>
    )
}

export default SigninForm;