import {Container} from "react-bootstrap"
import {FaStar, FaRegStar, FaHeart, FaRegHeart} from 'react-icons/fa'
import AppContext from "../contexts/AppContext"
import '../styles/MenuList.css'


function MenuList(){
    return(
        <AppContext.Consumer>
            {
                value => {
                    return(
                        <div className="menu-list">
                            <Container>
                                <div className="menu-list-wrapper">

                                    {
                                        value.state.menuList.map((menu) => {
                                            let rating;
                                            if(menu.itemRating === 1){
                                                rating = 
                                                    <div className="rating-group">
                                                        <em><FaStar /></em>
                                                        <em><FaRegStar /></em>
                                                        <em><FaRegStar /></em>
                                                        <em><FaRegStar /></em>
                                                        <em><FaRegStar /></em>
                                                    </div>
                                            }else if(menu.itemRating === 2){
                                                rating = 
                                                    <div className="rating-group">
                                                        <em><FaStar /></em>
                                                        <em><FaStar /></em>
                                                        <em><FaRegStar /></em>
                                                        <em><FaRegStar /></em>
                                                        <em><FaRegStar /></em>
                                                    </div>
                                            }else if(menu.itemRating === 3){
                                                rating = 
                                                    <div className="rating-group">
                                                        <em><FaStar /></em>
                                                        <em><FaStar /></em>
                                                        <em><FaStar /></em>
                                                        <em><FaRegStar /></em>
                                                        <em><FaRegStar /></em>
                                                    </div>
                                            }else if(menu.itemRating === 4){
                                                rating = 
                                                    <div className="rating-group">
                                                        <em><FaStar /></em>
                                                        <em><FaStar /></em>
                                                        <em><FaStar /></em>
                                                        <em><FaStar /></em>
                                                        <em><FaRegStar /></em>
                                                    </div>
                                            }else if(menu.itemRating === 5){
                                                rating = 
                                                    <div className="rating-group">
                                                        <em><FaStar /></em>
                                                        <em><FaStar /></em>
                                                        <em><FaStar /></em>
                                                        <em><FaStar /></em>
                                                        <em><FaStar /></em>
                                                    </div>
                                            }
                                            return(
                                                <div className="menu-item shadow-sm bg-white" key={menu.id.toString()}>
                                                    <img src={menu.itemImage} alt={menu.itemName} />
                                                    <b>{menu.itemName}</b>
                                                    {rating}
                                                    <b>XAF {menu.itemPrice}</b>
                                                    <div className="cta-btn">
                                                        <em>{menu.isFavourite ? <FaRegHeart /> : <FaHeart />}</em>
                                                        <a href="#add">Add to Cart</a>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Container>
                        </div>
                    )
                }
            }
                    
        </AppContext.Consumer>
    )
}

export default MenuList