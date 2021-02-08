import React from 'react'
import { Login } from './Login'
import { Button,Container,Form,Input,Label,FormGroup } from 'reactstrap';
import './LoginForm.css'

class LoginFrom extends React.Component{

    constructor(){
        super();
        this.state={
            name:''
        }
    }

    Login=()=>{
        localStorage.setItem("name",this.state.name)
        this.props.history.push('/student')
    }

    onchange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        console.log(this.state.name)
        return(<div>
           <Form className="login">
           <header className="text-center">Login</header>
                <br/>
                <img className="img" src="login.png" width="100" height="100"/>
               <FormGroup>
               <Label for="name">User Id:</Label>
                <Input placeholder="username..." type="text"  name="name" value = {this.state.name} onChange={(e)=>this.onchange(e)}></Input>
               </FormGroup>
                <br/>
                <FormGroup>
               <Label for="password">Password:</Label>
                <Input placeholder="password..." type="password"  name="password"/>
               </FormGroup>
                <Container>
                 <Button className="btn-lg btn-block" outline color="info mr-7" onClick={this.Login}>Login</Button>
                 </Container>
                 <Login name={this.state.name}/>
           </Form>
        </div>)
    }
}

export default LoginFrom;