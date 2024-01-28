import ItemList from "./ItemList"
import { useState } from "react";
const MenuCategory = ({data, showItems, setShowIndex}) =>{

// const [showItems,setShowItems] = useState(false)


    const handleClick = ()=>{
        setShowIndex()
    }
    return (
        <div>
            {/* header */}
            <div className=" p-4 my-4 shadow-lg ">
             <div onClick={handleClick}  className=" flex justify-between cursor-pointer">
                <span className="font-bold text-sm " >{data.title} ({data.itemCards.length})</span>
                <span className="">{"⬇️"}</span>
             </div>
                {/* {showItems && <ItemList items={data.itemCards}/>} */}
                {showItems && <ItemList items={data.itemCards}/>}
                
           </div>
           {/* body */}

           
        </div>

    )
}

export default MenuCategory;