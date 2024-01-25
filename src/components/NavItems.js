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
        <div className="flex p-8 ">
            <ul className="flex place-items-center space-x-7 font-medium text-rose-900">
                <li  className="custom-link">Online status:{onlineStatus?"🟢":"🔴"}</li>
                <Link to ={"/"} className="custom-link"><li>Home</li></Link>
                <Link to ={"/about"} className="custom-link"><li>About</li></Link>
                <Link to ={"/contact"} className="custom-link"><li>Contact</li></Link>
                {/* <Link to ={"/grocery"} className="custom-link"><li>Grocery</li></Link> */}
                <li className="custom-link">Cart</li>
                <li className="bg-amber-400 shadow-lg p-3 rounded ">
                    <button onClick={()=> setState(toggle())}
                    className="login-btn">{state}</button>
                </li>
            </ul>
        </div>
    )
}


export default NavItems;