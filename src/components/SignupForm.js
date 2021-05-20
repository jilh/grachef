import React from "react"

function SignupForm(){
    return(
        <form className="custom-form">
            <div className="form-col">
                <div className="form-base">
                    <label>First Name</label>
                    <input type="text" name="firstname" class="custom-form-input" placeholder="First name here" />
                </div>
                <div className="form-base">
                    <label>Last Name</label>
                    <input type="text" name="lastname" class="custom-form-input" placeholder="Last name here" />
                </div>
            </div>
            <div className="form-base">
                <label>Email Address</label>
                <input type="text" name="email" class="custom-form-input" placeholder="Email Address here" />
            </div>
            <div className="form-base">
                <label>Password</label>
                <input type="password" name="password" class="custom-form-input" placeholder="Password here" />
            </div>
            <div className="form-base">
                <label>Phone Number</label>
                <input type="text" name="phone" class="custom-form-input" placeholder="Phone Number here" />
            </div>
            <div className="form-base">
                <label>Country</label>
                <select name="country" class="custom-form-input">
                    <option value="">Choose a Country</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Nigeria">Nigeria</option>
                </select>
            </div>
            <div className="form-base">
                <label>Delivery Location</label>
                <select name="delivery_location" class="custom-form-input">
                    <option value="">Choose a delivery location</option>
                    <option value="Egbe">Egbe</option>
                    <option value="Ilorin">Ilorin</option>
                </select>
            </div>
            <div className="form-base">
                <p>Already have an account? Login <a href="#login">here</a></p>
                <input type="submit" value="Register" className="custom-form-btn" />
            </div>
        </form>
    )
}

export default SignupForm;