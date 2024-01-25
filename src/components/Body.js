import RestoCard from "./RestoCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { SWIGGY_MAIN_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = ()=>{
   //local state variable = super powerful variable
    const [listOfResto, setListOfResto] = useState([]);
    const onlineStatus = useOnlineStatus();


    useEffect(() => {
        fetchData();
     
    },[]);


      const fetchData = async () => {
      const data = await fetch(SWIGGY_MAIN_URL);
      const json = await data.json();
    //   console.log(json,"body json")
    //   console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
      //optional chaining - handling data in better way it does not throw error if we dont get undefined data
      resList = json.data.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants;
    
      setListOfResto(json.data.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants)
    };
    


if(onlineStatus === false) return <h1>Looks like your internet connection is gone .. please check your internet </h1>
console.log(onlineStatus,"onlinestatus")

    //conditional rendering
    return listOfResto.length === 0?<Shimmer/>:(
        <div className="body">
            <div className="bg-slate-100 flex items-center justify-center p-5 ">
                <form > 
                <input type="text"
                      className="w-96 p-4 rounded shadow-md"  
                       placeholder="Search for Restautrant by entering name.. " 
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
                </form><div className="text-4xl p-4 ">&#128269;</div>  
            </div>
            <div className="flex items-center justify-center">
                <button 
                       className="bg-gray-200 p-4 rounded-md shadow-xl m-4 "
                       onClick={()=>{
                       const filteredList = resList.filter(res => res.info.avgRating > 4) ;setListOfResto(filteredList)
                  console.log("fav resto clickeds")
                }}>
                    Top Rated Resto's
                </button>
            </div>
         
            <div className="flex flex-wrap justify-center items-center  " >
                {
                    listOfResto.map((res) => (
                    <Link 
                    className="restoLink"
                    key={res.info.id} 
                    to={"restaurants/" + res.info.id}
                    >
                    <RestoCard resData={res}/>
                    </Link>
                    )) 
                    // array.map for each res return this expression restocard comp where resdata would be having this each res
                }
          
            </div>
        
        </div>
    
    )

}


export default Body;