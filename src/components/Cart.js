import React from 'react'
import Navigation from "./Navigation"
import CartItems from "./CartItems"
import Footer from "./Footer"

function Cart(){
    return(
        <div className="cart-section">
            <Navigation />
            <CartItems />
            <Footer />
        </div>
    )
}

export default Cart;