import '../styles/Checkout.css'
import image from "../design-files/hero-image.png"

function Checkout(){
    return(
        <div className='checkout-wrapper'>
            <div className="checkout shadow-lg">
                <h3>Checkout</h3>

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
            </div>
        </div>
    )
}

export default Checkout;