import React from "react";

class User_class extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
        
    }


    
    render(){
        const {name}= this.props;  //destructuring props
        const {count} = this.state; //destructuring state
        return(  
        <div>
            <h2>This is user class component</h2>
            <h3>{count}</h3>
            <h3>{name}</h3>
            <h3>{this.props.name}</h3>
            <h3>Contact</h3>
        </div>)
    }
}

export default User_class;