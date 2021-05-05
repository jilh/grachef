import {Container} from 'react-bootstrap'
import MenuList from '../components/MenuList'
import AppContext from '../contexts/AppContext';
import '../styles/Menu.css';


function Menu(){
    return(
        <AppContext.Consumer>
            {
                value => {
                    return(
                        <div className="menu-section">
                            <Container>
                                <div className="category-search">
                                    <ul>
                                        {
                                            value.state.categoryList.map((number) => {
                                                return <li key={number.id.toString()} className={value.state.activeCategory === number.id ? "active" : " "} onClick={() => value.updateActiveCategory(number.id)}>{number.categoryName}</li>
                                            })
                                        }
                                    </ul>

                                    <input type="text" name="q" placeholder="Search" className="menu-search" />
                                </div>
                                <MenuList />
                            </Container>
                        </div>
                    )
                }
            }
        </AppContext.Consumer>
    )
}

export default Menu