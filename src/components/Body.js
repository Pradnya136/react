import RestoCard from "./RestoCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = ()=>{
   //local state variable = super powerful variable
    const [listOfResto, setListOfResto] = useState([])

    useEffect(() => {
        fetchData();
        console.log("inside useffect fn")
    },[]);


    const fetchData = async () => {
      const data = await fetch(
            "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D18.5204303%26lng%3D73.8567437%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
            );
      const json = await data.json();
      console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
      //optional chaining - handling data in better way it does not throw error if we dont get undefined data
      setListOfResto(json.data.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants)
    };
    
    //conditional rendering
    return listOfResto.length === 0?<Shimmer/>:(
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