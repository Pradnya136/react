import RestoCard from "./RestoCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = ()=>{
   
    const [listOfResto, setListOfResto] = useState(resList)


    return (
        <div className="body">
            <div className="searchbar">
                <form> 
                <input type="text"
                       className="searchbarbox" 
                       placeholder="Search for Resto by entering name " 
                       onChange={()=>{
                        const filterd = resList.filter(res => res.info.name.toLowerCase().startsWith(event.target.value));
                        console.log(filterd,"< filterd")

                        let filteredDone = ()=>{
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