import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
// import Example from "./src/components/Prac";


const AppLayout = () => {
    return(
        <div className="main-pg">
            {/* <Example/> */}

            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)