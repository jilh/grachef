import React from "react"
import "../styles/Registration.css"
import { useLocation } from "react-router-dom"
import SigninForm from "../components/SigninForm"
import SignupForm from "../components/SignupForm"

function Registration(){
    const {pathname} = useLocation();
    // const SignInForm = <SigninForm />

    if(pathname === "/signin"){
        return(
            <SigninForm />
        )
    }else if(pathname === "/signup"){
        return(
            <SignupForm />
        )
    }else if(pathname === "/cart"){
        return(
            <SignupForm />
        )
    }else{
        return(
            <h1>Nothing to show</h1>
        )
    }
}

export default Registration;