import User from "./User";
import User_class from "./User_class";
import {Component} from "react";



class About extends Component{

    constructor(){
        super();
        console.log("Parent constructor(){}")
    }

componentDidMount(){
    console.log("Parent ComponentDidMount(){}")
}
render(){

    console.log("Parent render(){}")
    return(
        <div>
            <h1>About page !!</h1>
            <User name = {"apple.inc"}/>
            <User_class name={"tesla.inc"}/>
            <User_class name={"aa.inc"}/>
            <User_class name={"bb.inc"}/>
        </div>
         )
       }

}


export default About;