
import Shimmer from "./Shimmer";
import {useParams } from "react-router-dom";
import useRestoMenu from "../utils/useRestoMenu";
import MenuCategory from "./MenuCategory"


const RestoInfo = () =>{

const {resId} = useParams();

const resInfo = useRestoMenu(resId);
console.log(resInfo, "resInfo from restoinfo compo")


if ( resInfo === null) return <Shimmer/>

const {name,cuisines,locality,sla,costForTwoMessage,avgRating,totalRatingsString,expectationNotifiers} = resInfo?.cards[0]?.card?.card?.info; //getting 1st info


// console.log(itemCards,"itemscrds")
    return (
        <div className=" bg-pink-400 flex flex-col justify-center items-center">

            <div className="flex justify-between mt-2 bg-red-400 w-6/12">
                <div>
                    <h1 className="font-bold p-2 mb-2">{name}</h1>
                    <h2 className="font-extralight mx-2 text-xs">{cuisines.join(", ")}</h2>
                    <h2 className="font-extralight mx-2 text-xs">{locality}</h2>
                    <h2 className="font-extralight mx-2 text-xs py-2">{expectationNotifiers[0].text}</h2>
                    <h2 className="font-bold text-sm mx-2">{sla.deliveryTime} mins<span className="text-transparent">____</span>{costForTwoMessage}</h2>
                  
                </div>
                <div>
                    <div className="border-gray-400 mt-2  mr-2 shadow-lg rounded-lg border bg-gray-200 items-center p-2">
                        <h1 className="text-green-600 font-bold mt-1 ml-1 ">⭐ {avgRating}</h1>
                        <h1 className="font-bold text-gray-500 text-xs border-t-2 border-gray-300 ">{totalRatingsString}</h1>
                    </div>
                   
                </div>
               
            </div>
            <div className="bg-blue-500 w-6/12">
                 <MenuCategory data={resInfo}/>
             
            </div>
          

        </div>

    )
}

export default RestoInfo;