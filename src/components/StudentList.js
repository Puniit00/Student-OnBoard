import React from 'react';
import { Button } from 'reactstrap';
import List from './List';
import context from './Login';
import './StudentList.css'
import './header.css'

var cat = '';
class StudentList extends React.Component{
    constructor(){
        super();
        this.state = {
            student : [],
            search:null,
            categorytype:'Default',
            temp:[]
        }
    }

    viewDetails=(student)=>{
        this.props.history.push(`/view/${student.id}`)
    }

    componentDidMount(){
        this.getDetails()
    }

    getDetails= async ()=>{
        const res = await fetch("http://localhost:3003/students")
        const data = await res.json()
        this.setState({
            student:data
        })
    }

   

//     viewDetails=(student)=>{
//     this.props.history.push(`/view/${student.id}`)
// }

navigateToView=()=>{
    this.props.history.push('/onboard')
}

Delete = (studid)=>{
    var con = window.confirm("Do you really want to delete?")
    var id = studid
    if(con){
        fetch("http://localhost:3003/students/"+id,{
        method:'delete',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(this.state)
    }).then(res=>res.json())
    .then(()=>{
        this.props.history.push('/student')
        this.componentDidMount();
    })
    }
}

editDetails=(studid)=>{
    this.props.history.push("/edit/" + studid)
}

valueChange=(e)=>{
    this.setState({
        [e.target.name] :e.target.value
    })
}

search=(e)=>{
    let a = e.target.value;
    if(a.length>0){
    var stud = this.state.student.filter((item)=>item.name.includes(e.target.value))
        this.setState({
            student:stud
        })
    }
    else{
        this.getDetails();
    }

}

category=(e)=>{
    let a = e.target.value;
    
  
    if(a == 'international'){
        if(this.state.temp == ''){
    var stud = this.state.student.filter((item)=>item.category.includes(a))
        this.setState({
            temp : this.state.student,
            student:stud,
            [e.target.name] : e.target.value
        })

    }
    else{
        var stud = this.state.temp.filter((item)=>item.category.includes(a))
        this.setState({
            temp : this.state.temp,
            student:stud,
            [e.target.name] : e.target.value
        })
    }
    
    }
    else if(a== 'Domestic'){
        if(this.state.temp == ''){
    var stud = this.state.student.filter((item)=>item.category.includes(a))
        this.setState({
            temp : this.state.student,
            student:stud,
            [e.target.name] : e.target.value
        })

    }
    else{
        var stud = this.state.temp.filter((item)=>item.category.includes(a))
        this.setState({
            temp : this.state.temp,
            student:stud,
            [e.target.name] : e.target.value
        })
    }
    
    }
    else{
        this.getDetails();
    }
}


    render(){
        return(
            <context.Consumer>
                {(user)=>(
             <div>
            <header>OnBoarding App
            <p style={{float:"right"}}>Welcome {localStorage.getItem("name")}</p>
            <p style={{float:"left"}} onClick={this.navigateToView}>OnBoard</p>
            </header>
            <br/><br/>

            <input style={{float:"right"}} type="text" placeholder="Search Here" name="search" value={this.state.search} onChange={(e)=>this.search(e)}></input>

               <select style={{float:"left"}} name="categorytype" value={this.state.categorytype} onChange={(e)=>this.category(e) }>
               <option value="Default" >Default</option>
                    <option value="international" >International</option>
                    <option value="Domestic" >Domestic</option>
                </select><br/>  
               { this.state.student.map((item)=>(
                   <div className="parent">
                  <List name = {item.name} category = {item.category} history={this.props.history}
                      id = {item.id} item={item} Delete={this.Delete} search={this.state.search}
                      categorytype={this.state.categorytype}
                  /> 
                    <div>
                          <span>
                          <Button className="Button" outline color="info ml-3" onClick={()=>this.viewDetails(item)}>View</Button>
                          <Button className="Button" outline color="danger ml-3" onClick={()=>this.Delete(item.id)}>Delete</Button>
                          <Button className="Button" outline color="warning ml-3" onClick={()=> this.editDetails(item.id)}>Edit</Button>
                        </span><hr/></div>
                        </div>
                      
                ))
            }
            <br/><br/>
            <Button className="Button" color="info ml-3" onClick = {this.navigateToView}>OnBoarding Form</Button>
        </div>
                )}
            </context.Consumer>
        )
    }
}

export default StudentList;