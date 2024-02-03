import { Link } from "react-router-dom";
import abt from "../../images/abt.jpg";
const About = ()=>{
    return(
        <>
        
        <div className="justify-centerflex flex items-center mt-[-5]">
            <h2 className="font-bold text-4xl p-5">Feeling hungry ? you're in the right place..</h2>
            <img className="flex w-5/12 items-center justify-center m-2" src={abt}/>

        </div>
        <div className="justify-center p-4 flex flex-col items-center ">
        <p className="text-lg">
            <span className="text-3xl">
            Welcome to the perfect destination where we offer a delightful array of diverse dishes.
            </span>
                <br/>
                <br/>
             
                Select your favorites from various nearby restaurants, each serving delectable cuisine. <br/>
                With just a click of a button, explore your favorite menus effortlessly.  <br/>
                Our platform also allows you to search for specific restaurants, 
                ensuring you find exactly what you're looking for. Elevate your dining experience with us! <br/>
            </p> <br/>
           
            <button className="bg-yellow-300 p-3 font-semibold shadow-xl hover:bg-green-400 hover:border-green-500 hover:shadow-lg
             border-yellow-400 border-2 rounded-lg">Order now</button>
        </div>
        </>
    )
}

export default About;