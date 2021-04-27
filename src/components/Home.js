import React from "react"
import Header from "./Header"
import Menu from "./Menu"
import Footer from "./Footer"
import AppContext from "../contexts/AppContext"

function Home(){
    return(
        <AppContext.Consumer>
            { 
                value => {
                    console.log(value)
                return(
                    <div>
                        <Header />
                        <Menu />
                        <Footer />
                    </div>
                )
                }
            }
        </AppContext.Consumer>
    )
}

export default Home