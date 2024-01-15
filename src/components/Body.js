import RestoCard from "./RestoCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = ()=>{
   
    const [listOfResto, setListOfResto] = useState(resList)
    let [searchInput, setSearchInput] = useState("")

    let capture = () => event =>{ setSearchInput(event.target.value)
        startLetter = event.target.value;
     
        filtered = resList.filter(listOfResto => listOfResto.info.name.toLowerCase() == startLetter)
        console.log(startLetter)
        console.log(filtered)
    }
    return (
        <div className="body">
            <div className="searchbar">
                <form> 
                <input type="text" className="searchbarbox" placeholder="Search for Resto by entering name " value={searchInput}
                    onChange={capture()}>
                  
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