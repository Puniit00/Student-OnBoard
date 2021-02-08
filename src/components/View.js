import React from 'react'
import { Button } from 'reactstrap';

class View extends React.Component{
    constructor(){
        super();
        this.state={
            student:null
        }
    }

    componentDidMount(){
        this.getDetails()
    }

    getDetails=()=>{
        const studentid = this.props.match.params.studentid;
       fetch("http://localhost:3003/students/"+studentid)
       .then((res)=>res.json())
       .then((data)=>{
           this.setState({
               student:data
           })
           console.log(data)
       })
    }

    navigateTohome=()=>{
        this.props.history.push('/student')
    }

    render(){
        console.log(this.state.student)
        return(
            <div className="box1">
            <header>OnBoarding App
            <p style={{float:"left",color:"white"}} onClick={this.navigateTohome}>List</p>
            <p style={{float:"right"}}>Welcome {localStorage.getItem("name")}</p></header>
            <br/><br/>
            {this.state.student &&
             <table style={{borderStyle:'solid',width:'100%'}}>
             <th>
             <tr>Name</tr>
             <tr> Category</tr>
             <tr>Date Of Birth</tr>
             <tr>Father Name</tr>
             <tr>Mother Name</tr>
             <tr>Last Class Score</tr></th>
             <td>
             <tr>  {this.state.student.name}</tr>
             <tr>   {this.state.student.category}</tr>
             <tr>  {this.state.student.dob}</tr>
             <tr> {this.state.student.fathername}</tr>
             <tr>  {this.state.student.mothername}</tr>
             <tr>{this.state.student.score}</tr>
             </td>
             </table>}
                  <Button className="Button" outline color="primary ml-3" onClick={()=>{this.navigateTohome()}}>Back to home screen</Button>
             </div>
        )
    }
}

export default View