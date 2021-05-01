import React from "react"
import {Col, Container, Row} from "react-bootstrap"
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
                                <Row>
                                    <Col lg={8}>
                                            <div className="cart-item-wrapper">
                                                {
                                                    value.state.cartItem.map((cart, index) => {
                                                        return(
                                                            <div className="cart-item shadow-sm bg-white mb-3" key={cart.id}>
                                                                <span onClick={() => value.removeCartItem(index)}>x</span>
                                                                <img src={cart.itemImage} alt={cart.itemName} />
                                                                <div className="item-details">
                                                                    <b>{cart.itemName}</b>
                                                                    <i>XAF {cart.itemPrice}</i>
                                                                    <input type="number" min="1" value={cart.itemQuantity} className="quantity" onChange={(e) => value.updateCartItemQuantity(e, index)} />
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                
                                            </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="item-total shadow-sm bg-white">
                                            <div className="delivery-price">
                                                <i>Delivery Charge</i>
                                                <b>XAF 3000</b>
                                            </div>
                                            <div className="tax-price">
                                                <i>VAT (10%)</i>
                                                <b>XAF 300</b>
                                            </div>
                                            <div className="total-price">
                                                <i>Sub-total</i>
                                                <b>XAF 3300</b>
                                            </div>
                                        </div>

                                        <div className="cart-cta">
                                            <button className="cart-btn">Checkout</button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    )
                }
            }
        </AppContext.Consumer>
    )
}

export default CartItems