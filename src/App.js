import React from 'react'
// import Header from "./components/Header"
// import Menu from "./components/Menu"
// import Footer from "./components/Footer"
import Home from "./components/Home"
import Cart from "./components/Cart"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import AppContext from './contexts/AppContext'
import AppProvider from './providers/AppProvider'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {
  return (
    <AppProvider>
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
              <Route path="/signup">
                  <SignUp />
              </Route>
              <Route path="/signin">
                  <SignIn />
              </Route>
            </Switch>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App;
