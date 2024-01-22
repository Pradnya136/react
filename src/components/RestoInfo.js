import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constant";


const RestoInfo = () =>{

const {resId} = useParams();
console.log(resId,"capturing resId from params")

useEffect(()=>{
    fetchMenu();
},[]);

const [resInfo, setResInfo] = useState(null)


const fetchMenu = async () => {
    const data = await fetch(MENU_URL+resId
    );
  
    const json = await data.json();

    console.log(json,"json-data")

    setResInfo(json);

};

if ( resInfo === null) return <Shimmer/>

const {name,cuisines,locality,sla,costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info;
const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return (
        <div>
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h2>{locality}</h2>

            <h2>{sla.deliveryTime} mins</h2> <h2>{costForTwoMessage}</h2>


            <h2>Menu:</h2>

            <ul>
                
              {itemCards.map(items => 
                    <li key={items.card?.info?.id}>
                     {items.card?.info?.name} -  Rs:
                     {items.card?.info?.price/100 || items.card?.info?.defaultPrice/100}    
                    </li>)}
              

            </ul>
        </div>
    )
}

export default RestoInfo;