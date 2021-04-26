import React from 'react'
// import Header from "./components/Header"
// import Menu from "./components/Menu"
// import Footer from "./components/Footer"
import Home from "./components/Home"
import Cart from "./components/Cart"
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        {/* <Header />
        <Menu />
        <Footer />
        <Home /> */}
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
          </Switch>
    </BrowserRouter>
  )
}

export default App;
