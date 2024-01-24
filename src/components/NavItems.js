import { useState } from "react";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const NavItems = () => {
const onlineStatus = useOnlineStatus()
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
            <ul className="ul">
                <li  className="custom-link">{onlineStatus?"🟢":"🔴"}</li>
                <Link to ={"/"} className="custom-link"><li>Home</li></Link>
                <Link to ={"/about"} className="custom-link"><li>About</li></Link>
                <Link to ={"/contact"} className="custom-link"><li>Contact</li></Link>
                <li className="custom-link">Cart</li>
                <li className="custom-link">
                    <button onClick={()=> setState(toggle())}
                    className="login-btn">{state}</button>
                </li>
            </ul>
        </div>
    )
}


export default NavItems;