import React from 'react'
import { Button,Container } from 'reactstrap';
import './header.css'
import './OnBoard.css'

class OnBoard extends React.Component{
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
            domicileaster:'*',
            certificateaster:'*',
            marksheetaster:'*',
            policeaster:'*',
            passportaster:'*',
            declarationaster:'*'
        }
    }

    valueChange = (e)=>{
        if(this.state.category == 'Domestic'){
            this.setState({
                domicileaster:'*',
                certificateaster:'*',
                marksheetaster:'*',
                policeaster:'*',
                passportaster:'*',
                declarationaster:'*'
            })}
            if(this.state.category == 'international'){
                this.setState({
                    domicileaster:'*',
                    certificateaster:'*',
                    marksheetaster:'*',
                    policeaster:'',
                    passportaster:'',
                    declarationaster:'*'
                })
            }
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



    render(){
        
        return(<div>
        <header>OnBoarding App
        <p style={{float:"left",color:"white"}} onClick={this.navigateTohome}>List</p>
        <p style={{float:"right"}}>Welcome {localStorage.getItem("name")}</p>
        </header><br/><br/>
            <form className="form">

                <label for="name">Name:</label>
                <input className="inpt"  name="name" type="text" value={this.state.name} onChange={(e)=>this.valueChange(e) }></input><br/>
                <label for="category">Category:</label>
                <select name="category" value={this.state.category} onChange={(e)=>this.valueChange(e) }>
                    <option value="international" >International</option>
                    <option value="Domestic" >Domestic</option>
                </select><br/>

                <div className="documents">
                <label for="doc">Documents:</label>

                <div className="ckbox">
                <label for="domicile">Domicile {this.state.domicileaster}</label>
                <input type="checkbox" name="domicile" value={this.state.domicile} onChange={(e)=>this.checked(e) }/><br/>
                <span style={{color:'red',fontSize:'10px'}}>{this.state.domicileerror}</span><br/>
                <label for="certificate">Birth Certificate {this.state.certificateaster}</label>
                <input type="checkbox" name="certificate" value={this.state.certificate} onChange={(e)=>this.checked(e) }/><br/>
                <span style={{color:'red',fontSize:'10px'}}>{this.state.certiError}</span><br/>
                <label for="marksheet">Marksheets {this.state.marksheetaster}</label>
                <input type="checkbox" name="marksheet" value={this.state.marksheet} onChange={(e)=>this.checked(e) }/><br/>
                <span style={{color:'red',fontSize:'10px'}}>{this.state.marksheeterror}</span><br/>
                <label for="police">Police Clearance {this.state.policeaster}</label>
                <input type="checkbox" name="police" value={this.state.police} onChange={(e)=>this.checked(e) }/><br/>
                <span style={{color:'red',fontSize:'10px'}}>{this.state.policeerror}</span><br/>
                <label for="passport" >Passport {this.state.passportaster}</label>
                <input type="checkbox" name="passport" value={this.state.passport} onChange={(e)=>this.checked(e) }/><br/>
                <span style={{color:'red',fontSize:'10px'}}>{this.state.passporterror}</span><br/>
                <label for="declaration">Declaration {this.state.declarationaster}</label>
                <input type="checkbox" name="declaration" value={this.state.declaration} onChange={(e)=>this.checked(e) }/><br/>
                <span style={{color:'red',fontSize:'10px'}}>{this.state.declarationerror}</span><br/>
                
                </div>
                </div>

                <label for="dob">Date Of Birth:</label>
                <input className="inpt"   type="text" name="dob" value={this.state.dob}  onChange={(e)=>this.valueChange(e) }/><br/>
                <label for="fathername">Fathers Name:</label>
                <input className="inpt"   type="text" name="fathername" value={this.state.fathername} onChange={(e)=>this.valueChange(e) }/><br/>
                <label for="mothername">Mothers Name:</label>
                <input className="inpt"   type="text" name="mothername" value={this.state.mothername} onChange={(e)=>this.valueChange(e) }/><br/>
                <label for="score">Last Class Score:</label>
                <input className="inpt"   type="text" name="score" value={this.state.score} onChange={(e)=>this.valueChange(e) }/><br/>
            
            </form>

            <Container>
                 <Button className="Button" outline color="info mr-7" onClick={this.submitForm}>OnBoard</Button>
                 </Container>
        </div>)
    }
}

export default OnBoard