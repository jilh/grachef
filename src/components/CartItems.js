import React, {useState}  from "react"
import {Col, Container, Row} from "react-bootstrap"
import '../styles/Cart.css'
// import image from "../design-files/hero-image.png"
import AppContext from "../contexts/AppContext"
import CustomModal from "../components/CustomModal"
import Registration from "../components/Registration"

function CartItems(){
    const [modalState, setModalState] = useState(false);
    const setModalFalse = () => {
        if(modalState !== false){
            setModalState({modalState: false})
        }
    }

    const setModalTrue = () => {
        if(modalState !== true){
            setModalState({modalState: true})
        }
    }
    return(
        <AppContext.Consumer>
            {
                value => {
                    return(
                        <Container>
                            <div className="cart">
                                 
                                <h3>Items in your shopping cart</h3>
                                {value.state.cartItem.length > 0 ?
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
                                            <div className="item-price">
                                                <i>Item Total</i>
                                                <b>XAF {value.itemsPrice}</b>
                                            </div>
                                            <div className="delivery-price">
                                                <i>Delivery Charge</i>
                                                <b>XAF {value.deliveryCharge}</b>
                                            </div>
                                            <div className="tax-price">
                                                <i>VAT (10%)</i>
                                                <b>XAF {value.itemsVAT}</b>
                                            </div>
                                            <div className="total-price">
                                                <i>Sub-total</i>
                                                <b>XAF {value.subTotal}</b>
                                            </div>
                                        </div>

                                        <div className="delivery-options shadow-sm bg-white mt-3 p-2">
                                            <b>Delivery Option</b>
                                                <select name="deliveryType" onChange={(e) => value.updatePreferredDeliveryOption(e)}>
                                                    <option value="">Select Delivery Option</option>
                                                    <option value="PICKUP">Pick Up</option>
                                                    <option value="DOORSTEP">Door Step</option>
                                                </select>
                                        </div>

                                        <div className="cart-cta">
                                            <button className="cart-btn" onClick={() => setModalTrue()}>Checkout</button>
                                        </div>

                                        <CustomModal content={<Registration />} title="" show={modalState} onHide={setModalFalse} />
                                    </Col>
                                </Row>
                            : 
                            <div>Your shopping cart is empty</div>
                            }
                            </div>
                        </Container>
                    )
                }
            }
        </AppContext.Consumer>
    )
}

export default CartItems