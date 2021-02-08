import React from 'react'
import { Button,Container } from 'reactstrap';
import './OnBoard.css'

class Edit extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            category:'international',
            domicile:false,
            certificate:false,
            marksheet:false,
            police:false,
            passport:false,
            declaration:false,
            dob:'',
            fathername:'',
            mothername:'',
            score:'',
            certiError:'',
            marksheeterror:'',
            policeerror:'',
            passporterror:'',
            declarationerror:'',
            domicileerror:'',
        }
    }

    valueChange = (e)=>{
        this.setState({
            certiError:'',
            marksheeterror:'',
            policeerror:'',
            passporterror:'',
            declarationerror:'',
            domicileerror:'',
            [e.target.name] : e.target.value
        })
        console.log(e.target.value)
    }

    checked=(e)=>{
        this.setState({
            certiError:'',
            marksheeterror:'',
            policeerror:'',
            passporterror:'',
            declarationerror:'',
            domicileerror:'',
            [e.target.name] : e.target.checked
        })
        console.log(e.target.checked)
    }

    validation = ()=>{
        if(this.state.category == 'international'){
            if(this.state.certificate == false){
                    this.setState({
                        certiError:"This document is required"
                    })

                    return false;
                }

                if(this.state.domicile == false){
                    this.setState({
                        domicileerror:"This document is required"
                    })
                    return false;
                }

                if(this.state.marksheet == false){
                    this.setState({
                        marksheeterror:"This document is required"
                    })
                    return false;
                }

                if(this.state.police == false){
                    this.setState({
                        policeerror:"This document is required"
                    })
                    return false;
                }

                if(this.state.passport == false){
                    this.setState({
                        passporterror:"This document is required"
                    })
                    return false;
                }

                if(this.state.declaration == false){
                    this.setState({
                        declarationerror:"This document is required"
                    })
                    return false;
                }
        }


        if(this.state.category == 'Domestic'){
            if(this.state.certificate == false){
                    this.setState({
                        certiError:"This document is required"
                    })

                    return false;
                }

                if(this.state.domicile == false){
                    this.setState({
                        domicileerror:"This document is required"
                    })
                    return false;
                }

                if(this.state.marksheet == false){
                    this.setState({
                        marksheeterror:"This document is required"
                    })
                    return false;
                }

                if(this.state.declaration == false){
                    this.setState({
                        declarationerror:"This document is required"
                    })
                    return false;
                }
        }
        return true;
    }

    submitForm = ()=>{
        const valid = this.validation();
        if(valid){
            fetch("http://localhost:3003/students",{
                method:'post',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(this.state)
            }).then(res=>res.json()).then(data=>{
                this.navigateTohome()})
        }       
    }

    navigateTohome=()=>{
        this.props.history.push('/student')
    }

    componentDidMount(){
        this.editDetails();
    }

    editDetails=()=>{
        const studId = this.props.match.params.studentid;
        fetch("http://localhost:3003/students/"+studId).then(res=>res.json())
        .then(data=>{
            this.setState({
            name:data.name,
            category:data.category,
            domicile:data.domicile,
            certificate:data.certificate,
            marksheet:data.marksheet,
            police:data.police,
            passport:data.passport,
            declaration:data.declaration,
            dob:data.dob,
            fathername:data.fathername,
            mothername:data.mothername,
            score:data.score
            })
        })
    }

    


    render(){
        
        return(<div>
        <header><p style={{float:''}}>OnBoarding App</p>
        <p style={{float:"right"}}>Welcome {localStorage.getItem("name")}</p>
        </header><br/><br/>
            <form className="form">
                <label for="name">Name:</label>
                <input name="name" type="text" value={this.state.name} onChange={(e)=>this.valueChange(e) }></input><br/>
                <label for="category">Category:</label>
                <select name="category" value={this.state.category} onChange={(e)=>this.valueChange(e) }>
                    <option value="international" >International</option>
                    <option value="Domestic" >Domestic</option>
                </select><br/>
                <div className="documents">
                <label for="doc">Documents:</label>
                
                <div className='ckbox'>
                <label for="domicile">Domicile *</label>
                <input checked = {this.state.domicile} type="checkbox" name="domicile" value={this.state.domicile} onChange={(e)=>this.checked(e) }/><br/>
                <span style={{color:'red',fontSize:'10px'}}>{this.state.domicileerror}</span><br/>
                <label for="certificate">Birth Certificate *</label>
                <input  checked = {this.state.certificate} type="checkbox" name="certificate" value={this.state.certificate} onChange={(e)=>this.checked(e) }/><br/>
                <span style={{color:'red',fontSize:'10px'}}>{this.state.certiError}</span><br/>
                <label for="marksheet">Marksheets *</label>
                <input  checked = {this.state.marksheet} type="checkbox" name="marksheet" value={this.state.marksheet} onChange={(e)=>this.checked(e) }/><br/>
                <span style={{color:'red',fontSize:'10px'}}>{this.state.marksheeterror}</span><br/>
                <label for="police">Police Clearance *</label>
                <input checked = {this.state.police} type="checkbox" name="police" value={this.state.police} onChange={(e)=>this.checked(e) }/><br/>
                <span style={{color:'red',fontSize:'10px'}}>{this.state.policeerror}</span><br/>
                <label for="passport" >Passport *</label>
                <input checked = {this.state.passport} type="checkbox" name="passport" value={this.state.passport} onChange={(e)=>this.checked(e) }/><br/>
                <span style={{color:'red',fontSize:'10px'}}>{this.state.passporterror}</span><br/>
                <label for="declaration">Declaration *</label>
                <input checked = {this.state.declaration} type="checkbox" name="declaration" value={this.state.declaration} onChange={(e)=>this.checked(e) }/><br/>
                <span style={{color:'red',fontSize:'10px'}}>{this.state.declarationerror}</span><br/>
                </div></div>

                <label for="dob">Date Of Birth:</label>
                <input type="text" name="dob" value={this.state.dob}  onChange={(e)=>this.valueChange(e) }/><br/>
                <label for="fathername">Fathers Name:</label>
                <input type="text" name="fathername" value={this.state.fathername} onChange={(e)=>this.valueChange(e) }/><br/>
                <label for="mothername">Mothers Name:</label>
                <input type="text" name="mothername" value={this.state.mothername} onChange={(e)=>this.valueChange(e) }/><br/>
                <label for="score">Last Class Score:</label>
                <input type="text" name="score" value={this.state.score} onChange={(e)=>this.valueChange(e) }/><br/>
            </form>

            <Container>
                 <Button className="Button" outline color="info mr-7" onClick={this.submitForm}>OnBoard</Button>
                 </Container>
        </div>)
    }
}

export default Edit;