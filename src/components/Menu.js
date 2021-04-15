import {Container} from 'react-bootstrap'
import MenuList from '../components/MenuList'
import '../styles/Menu.css';


function Menu(){
    return(
        <div className="menu-section">
            <Container>
                <div className="category-search">
                    <ul>
                        <li>Turkey</li>
                        <li>Chicken</li>
                        <li>Meal</li>
                        <li>Fast Foods</li>
                    </ul>

                    <input type="text" name="q" placeholder="Search" className="menu-search" />
                </div>
                <MenuList />
            </Container>
        </div>
    )
}

export default Menu