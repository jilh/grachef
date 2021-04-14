import {Container} from 'react-bootstrap'
import '../styles/Menu.css';


function Menu(){
    return(
        <div>
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
            </Container>
        </div>
    )
}

export default Menu