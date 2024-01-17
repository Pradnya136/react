import RestoCard from "./RestoCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = ()=>{
   
    const [listOfResto, setListOfResto] = useState(resList)

    useEffect(()=>{
        <Shimmer.js/>,[]
        console.log("useffect called")
    })

    console.log("calling fr useeffect done")
 
    return (
        <div className="body">
            <div className="searchbar">
                <form> 
                <input type="text"
                       className="searchbarbox" 
                       placeholder="Search for Resto by entering name " 
                       onChange={(event)=>{
                        const filterd = resList.filter(res => res.info.name.toLowerCase().includes(event.target.value.toLowerCase()));
                        console.log(filterd,"< filterd")

                        const filteredDone = ()=>{
                            if(event.target.value == ""){
                               return setListOfResto(resList) 
                            }
                            else{
                                return setListOfResto(filterd)
                            }
                        }
                        filteredDone()
                       }}
                       >
                  
                </input>
                </form>
            </div>
            <div className="filter-btn">
                <button 
                className="top-resto-btn"
                onClick={()=>{
                    const filteredList = resList.filter(res => res.info.avgRating > 4.5);setListOfResto(filteredList)
                }}>
                    Top Rated Resto's
                </button>
            </div>
            <div className="res-container">
                {
                    listOfResto.map((res) => (<RestoCard key={res.info.id} resData={res}/>))
                    // array.map for each res return this expression restocard comp where resdata would be having this each res
                }
          
            </div>
        </div>
    
    )
    
}


export default Body;