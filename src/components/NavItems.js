import { useState } from "react";


const NavItems = () => {

    const [state,setState] = useState("Login");
    const toggle = () => {
        if(state == "Login"){
            return "Logout"
        }else{
            return "Login"
        }
    }

    return (
        <div className="nav-items-div">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
                <li>
                    <button onClick={()=> setState(toggle())}
                    className="login-btn">{state}</button>
                </li>
            </ul>
        </div>
    )
}


export default NavItems;