import User from "./User";
import User_class from "./User_class";

const About = () => {
    return(
        <div>
            <h1>About page !!</h1>
            <User name = {"apple.inc"}/>
            <User_class name={"tesla.inc"}/>
        </div>
    )
}

export default About;