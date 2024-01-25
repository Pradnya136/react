import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About_class";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestoInfo from "./src/components/RestoInfo";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
// import {lazy, Suspense} from "react";


// const Grocery = lazy(()=> import("./src/components/Grocery"));

const AppLayout = () => {
    return(
        <div className="main-pg">
            <Header/>
            <Outlet/>
        </div>
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