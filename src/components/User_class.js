import React from "react";

class User_class extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            age:""
        }
        console.log("Child contructor(){}")
        
    }

    componentDidMount(){
        this.intervalcallingfn = setInterval(()=>{
            console.log("Calling interval fn")
        },1000)
    }
    
    componentWillUnmount(){
        clearInterval(this.intervalcallingfn)
        console.log("cleaned interval fn")
    }
    
    render(){
        console.log("child render(){}")
        const {name}= this.props;  //destructuring props
        const {count} = this.state; //destructuring state
        return(  
        <div>
            <h2>This is user class component</h2>
            <button onClick={()=>{
                this.setState({
                    count : this.state.count + 1,
                    age : this.state.age = 25
                })
            }}>increase</button>
            <h3>{count}</h3>
            <h3>{name}</h3>
            <h3>{this.props.name}</h3>
            <h3>limit:{this.state.age}</h3>
            <h3>Contact</h3>
        </div>)
    }
}

export default User_class;