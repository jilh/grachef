import React from 'react'
import AppContext from '../contexts/AppContext'

class AppProvider extends React.Component{
    state = {
        name: "Stephen"
    }

    render(){
        return(
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppProvider
