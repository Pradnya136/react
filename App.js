import React from "react";
import ReactDOM from "react-dom/client";

// react element
const heading1 = React.createElement("h1"," " ,"this is h1")
const heading2 = React.createElement("h2"," " ,"this is h2")
const heading3 = React.createElement("h3"," " ,"this is h3")
const header = React.createElement("div", {id:"head"}, [heading1,heading2,heading3])


// JSX Element
const jsxelement = 
                (<div className="title">
                    <h1>h1 jsx element</h1>
                    <h2>h1 jsx element</h2>
                    <h3>h1 jsx element</h3>
                </div>)


// functional component
const JsxMainHeader = () => <h1>This is the main header of JSX</h1>


const JsxHeader = () => (

    <div className="title">
        <JsxMainHeader></JsxMainHeader>
        <JsxMainHeader/>
        {<JsxMainHeader/>}
        <h1>This jsx h1</h1>
        <h2>This jsx h2</h2>
        <h3>This jsx h3</h3>
    </div>
)

// ---------------------------------

const Logo = ()=> <div className="logo">Logo</div>

const SearchBar = () => <div className="searchbar">Search Bar</div>

const UserIcon = () => <div className="icon">Icon</div>

const Headerr = () => (
    <div id="wrapper">
        <Logo/>
        <SearchBar/> 
        <UserIcon/>
    </div>
)





const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Headerr/>)