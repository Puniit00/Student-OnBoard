import React from 'react'
import { Button,Container } from 'reactstrap';

const context = React.createContext();

export class Login extends React.Component{

    render(){
        const user={
            name:this.props.name
        }
        return(
            <context.Provider value={user}>
                 {this.props.children}
            </context.Provider>
        )
    }
}

export default context;