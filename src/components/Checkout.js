import '../styles/Checkout.css'
import image from "../design-files/hero-image.png"
import {Scrollbars} from "react-custom-scrollbars"

function Checkout(){
    return(
        <div className='checkout-wrapper'>
            <div className="checkout shadow-lg">
                <h3>Checkout</h3>
                <Scrollbars className="checkout-item-wrapper">
                {/* <div className="checkout-item-wrapper"> */}
                    <div className="checkout-item shadow-sm bg-white mb-3">
                        <span>x</span>
                        <img src={image} alt="Checkout item name" />
                        <div className="item-details">
                            <b>Grilled Chicken</b>
                            <i>FCFA 2500</i>
                            <input type="number" min="1" className="quantity" />
                        </div>
                    </div>
                    <div className="checkout-item shadow-sm bg-white mb-3">
                        <span>x</span>
                        <img src={image} alt="Checkout item name" />
                        <div className="item-details">
                            <b>Grilled Chicken</b>
                            <i>FCFA 2500</i>
                            <input type="number" min="1" className="quantity" />
                        </div>
                    </div>
                    <div className="checkout-item shadow-sm bg-white mb-3">
                        <span>x</span>
                        <img src={image} alt="Checkout item name" />
                        <div className="item-details">
                            <b>Grilled Chicken</b>
                            <i>FCFA 2500</i>
                            <input type="number" min="1" className="quantity" />
                        </div>
                    </div>
                    <div className="checkout-item shadow-sm bg-white mb-3">
                        <span>x</span>
                        <img src={image} alt="Checkout item name" />
                        <div className="item-details">
                            <b>Grilled Chicken</b>
                            <i>FCFA 2500</i>
                            <input type="number" min="1" className="quantity" />
                        </div>
                    </div>
                    <div className="checkout-item shadow-sm bg-white mb-3">
                        <span>x</span>
                        <img src={image} alt="Checkout item name" />
                        <div className="item-details">
                            <b>Grilled Chicken</b>
                            <i>FCFA 2500</i>
                            <input type="number" min="1" className="quantity" />
                        </div>
                    </div>
                    <div className="checkout-item shadow-sm bg-white mb-3">
                        <span>x</span>
                        <img src={image} alt="Checkout item name" />
                        <div className="item-details">
                            <b>Grilled Chicken</b>
                            <i>FCFA 2500</i>
                            <input type="number" min="1" className="quantity" />
                        </div>
                    </div>
                    <div className="checkout-item shadow-sm bg-white mb-3">
                        <span>x</span>
                        <img src={image} alt="Checkout item name" />
                        <div className="item-details">
                            <b>Grilled Chicken</b>
                            <i>FCFA 2500</i>
                            <input type="number" min="1" className="quantity" />
                        </div>
                    </div>
                    <div className="checkout-item shadow-sm bg-white mb-3">
                        <span>x</span>
                        <img src={image} alt="Checkout item name" />
                        <div className="item-details">
                            <b>Grilled Chicken</b>
                            <i>FCFA 2500</i>
                            <input type="number" min="1" className="quantity" />
                        </div>
                    </div>
                {/* </div> */}
                </Scrollbars>
                <div className="checkout-cta">
                    <button className="checkout-btn">Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout;