import React from "react"
import {Container} from "react-bootstrap"
import '../styles/Cart.css'
import image from "../design-files/hero-image.png"

function CartItems(){
    return(
        <Container>
            <div className="cart">
                <h3>Items in your shopping cart</h3>
                <div className="cart-item-wrapper">
                    <div className="cart-item shadow-sm bg-white mb-3">
                        <span>x</span>
                        <img src={image} alt="cart item name" />
                        <div className="item-details">
                            <b>Grilled Chicken</b>
                            <i>FCFA 2500</i>
                            <input type="number" min="1" className="quantity" />
                        </div>
                    </div>
                    <div className="cart-item shadow-sm bg-white mb-3">
                        <span>x</span>
                        <img src={image} alt="cart item name" />
                        <div className="item-details">
                            <b>Grilled Chicken</b>
                            <i>FCFA 2500</i>
                            <input type="number" min="1" className="quantity" />
                        </div>
                    </div>
                    <div className="cart-item shadow-sm bg-white mb-3">
                        <span>x</span>
                        <img src={image} alt="cart item name" />
                        <div className="item-details">
                            <b>Grilled Chicken</b>
                            <i>FCFA 2500</i>
                            <input type="number" min="1" className="quantity" />
                        </div>
                    </div>
                    <div className="cart-item shadow-sm bg-white mb-3">
                        <span>x</span>
                        <img src={image} alt="cart item name" />
                        <div className="item-details">
                            <b>Grilled Chicken</b>
                            <i>FCFA 2500</i>
                            <input type="number" min="1" className="quantity" />
                        </div>
                    </div>
                    <div className="cart-item shadow-sm bg-white mb-3">
                        <span>x</span>
                        <img src={image} alt="cart item name" />
                        <div className="item-details">
                            <b>Grilled Chicken</b>
                            <i>FCFA 2500</i>
                            <input type="number" min="1" className="quantity" />
                        </div>
                    </div>
                    <div className="cart-item shadow-sm bg-white mb-3">
                        <span>x</span>
                        <img src={image} alt="cart item name" />
                        <div className="item-details">
                            <b>Grilled Chicken</b>
                            <i>FCFA 2500</i>
                            <input type="number" min="1" className="quantity" />
                        </div>
                    </div>
                    <div className="cart-item shadow-sm bg-white mb-3">
                        <span>x</span>
                        <img src={image} alt="cart item name" />
                        <div className="item-details">
                            <b>Grilled Chicken</b>
                            <i>FCFA 2500</i>
                            <input type="number" min="1" className="quantity" />
                        </div>
                    </div>
                    <div className="cart-item shadow-sm bg-white mb-3">
                        <span>x</span>
                        <img src={image} alt="cart item name" />
                        <div className="item-details">
                            <b>Grilled Chicken</b>
                            <i>FCFA 2500</i>
                            <input type="number" min="1" className="quantity" />
                        </div>
                    </div>
                </div>
                
                <div className="cart-cta">
                    <button className="cart-btn">Checkout</button>
                </div>
            </div>
        </Container>
    )
}

export default CartItems