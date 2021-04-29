import React from "react"
import {Container} from "react-bootstrap"
import '../styles/Cart.css'
// import image from "../design-files/hero-image.png"
import AppContext from "../contexts/AppContext"

function CartItems(){
    return(
        <AppContext.Consumer>
            {
                value => {
                    return(
                        <Container>
                            <div className="cart">
                                <h3>Items in your shopping cart</h3>
                                <div className="cart-item-wrapper">
                                    {
                                        value.state.cartItem.map((cart, index) => {
                                            return(
                                                <div className="cart-item shadow-sm bg-white mb-3" key={cart.id}>
                                                    <span>x</span>
                                                    <img src={cart.itemImage} alt={cart.itemName} />
                                                    <div className="item-details">
                                                        <b>{cart.itemName}</b>
                                                        <i>FCFA {cart.itemPrice}</i>
                                                        <input type="number" min="1" value={cart.itemQuantity} className="quantity" onChange={(e) => value.updateCartItemQuantity(e, index)} />
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    
                                </div>
                                
                                <div className="cart-cta">
                                    <button className="cart-btn">Checkout</button>
                                </div>
                            </div>
                        </Container>
                    )
                }
            }
        </AppContext.Consumer>
    )
}

export default CartItems