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


//**making divs inside parent div verically stacked using tailwind n if not vertically den skip add flex-col
{/* <div className="bg-blue-400 justify-center h-20 flex flex-col items-center">
<div className="bg-green-400 w-3/12 inline align-middle h-5">1</div>
<div className="bg-orange-400 w-3/12  inline align-middle h-7">2</div>
<div className="bg-orange-400 w-3/12  inline align-middle h-7">2</div>
<div className="bg-orange-400 w-3/12  inline align-middle h-7">2</div>
</div> */}


//*confusion caused by the use of item.card && item.card. This is a defensive 
//check to ensure that item.card exists before attempting to access its properties.
