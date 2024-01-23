import { useState } from "react";

const User = (props) =>{

const {name} = props; // destructuring props
    const [count,setCount] = useState(0)

  
    return(
        <div className="user">
            <h2>This is an User component</h2>
            <button onClick={()=> setCount(count +1)}>increase</button>
            <h3>{count}</h3>  
            <h3>{name}</h3>
            <h3>{props.name}</h3>
            <h3>Contact</h3>
        </div>
        
    )
}

export default User;