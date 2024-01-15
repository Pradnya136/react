import React from "react";
import ReactDOM from "react-dom/client";
import {useState} from "react";


const Example = ()=> {

    let [ value, setValue ] = useState(0);
  


    return (
        <div className="wrapper-of-eg">
            <div className="eg">
               {value}
            </div>
            <button onClick={()=>{
              setValue(value + 1)
            }}>increment</button>
             <button onClick={()=>{
               setValue(value=0)
            }}>reset value</button>
                <button onClick={()=>{
               setValue(value-1)
            }}>decrement</button>

        </div>

    )
}

export default Example;


// simple incrementing decrementing function using useState