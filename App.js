import React, { lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import About from "./src/components/About_class";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestoInfo from "./src/components/RestoInfo";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { Context } from "react";
import UserContext from "./src/utils/UserContext";
// import {lazy, Suspense} from "react";


// const Grocery = lazy(()=> import("./src/components/Grocery"));

const AppLayout = () => {

    const [userName, setUserName] = useState()
    useEffect(()=>{
    //api calling

    const Dummydata = {
        name : "Pradnya Sonawane"
    };

    setUserName(Dummydata.name)
},[])

    return(
        <UserContext.Provider value={{LoggedInUser:userName,setUserName}}>
        <div className="main-pg">
         
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
     
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[  {
            path:"/",
            element:<Body/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/restaurants/:resId",
            element:<RestoInfo/>
        },
        // {
        //     path:"/grocery",
        //     element:<Suspense fallback={"Loading"}><Grocery/></Suspense>
        // }
      ]
    }

])


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)