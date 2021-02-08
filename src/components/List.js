import React from 'react'
import { NavItem } from 'reactstrap'
import './StudentList.css'
import { Button } from 'reactstrap';

var classname=''
class List extends React.Component{
    constructor(){
        super();
    }
    editDetails=(studid)=>{
        this.props.history.push("/edit/" + studid)
    }

    render(){
        if(this.props.category == 'international'){
            classname = 'international'
        }
        else{
            classname = 'domestic'
        }

        // if(this.props.categorytype === 'international'){
        //     if(this.props.category === 'Domestic'){
        //             classname='domestic_none'
        //     }
        // }
        // else if(this.props.categorytype === 'Domestic'){
        //     if(this.props.category === 'international'){
        //             classname='international_none'
        //     }
        // }

        // if(this.props.search != this.props.name && this.props.search!=null){
           
        //     classname='data'
        // }   

        // if(this.props.search!=null){
        //     if(this.props.search.localeCompare(this.props.name) != -1){
        //     classname='data'}
        // }

        // if(this.props.search!=null){
        // for(let i in this.props.name){
        //     if(!(this.props.search.includes(this.props.name[i]))){
        //         classname='data';
        //     }
        // }}
        
        return(<div>
            <p  className={classname}> {this.props.name}</p>
        </div>)
    }
}
export default List