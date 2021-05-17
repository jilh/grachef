import React from "react"

function Registration(){
    return(
        <form className="custom-form">
            <div className="form-base">
                <label>First Name</label>
                <input type="text" name="firstname" placeholder="First name here" />
            </div>
            <div className="form-base">
                <label>Last Name</label>
                <input type="text" name="lastname" placeholder="Last name here" />
            </div>
            <div className="form-base">
                <label>Email Address</label>
                <input type="text" name="email" placeholder="Email Address here" />
            </div>
            <div className="form-base">
                <label>Password</label>
                <input type="password" name="password" placeholder="Password here" />
            </div>
            <div className="form-base">
                <label>Phone Number</label>
                <input type="text" name="phone" placeholder="Phone Number here" />
            </div>
            <div className="form-base">
                <label>Country</label>
                <select name="country">
                    <option value="">Choose a Country</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Nigeria">Nigeria</option>
                </select>
            </div>
            <div className="form-base">
                <label>Delivery Location</label>
                <select name="delivery_location">
                    <option value="">Choose a delivery location</option>
                    <option value="Egbe">Egbe</option>
                    <option value="Ilorin">Ilorin</option>
                </select>
            </div>
            <div className="formm-base">
                <input type="submit" value="Register" className="btn btn-primary btn-md" />
            </div>
        </form>
    )
}

export default Registration;