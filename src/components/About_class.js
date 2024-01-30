import User from "./User";
import User_class from "./User_class";
import {Component} from "react";
import userContext from "../utils/userContext";



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
            <userContext.Provider value="Marrygoland">
           <userContext.Consumer>
           {(data) => <h1 className="font-bold">this is context data :{data}</h1>}
           </userContext.Consumer>
           </userContext.Provider>
         
                <h1>About page !!</h1>
            
                <User name = {place}/>
                <User_class name={"tesla.inc"}/>
                <User_class name={"aa.inc"}/>
                <User_class name={"bb.inc"}/>
         
        </div>
         )
       }

}


export default About;