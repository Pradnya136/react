
import Shimmer from "./Shimmer";
import {useParams } from "react-router-dom";
import useRestoMenu from "../utils/useRestoMenu";

const RestoInfo = () =>{

const {resId} = useParams();
console.log(resId,"capturing resId from params")
const resInfo = useRestoMenu(resId);
console.log(resInfo, "resInfo from restoinfo compo")
if ( resInfo === null) return <Shimmer/>

const {name,cuisines,locality,sla,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
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