import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestoInfo = () =>{

useEffect(()=>{
    fetchMenu();
},[]);

const [resInfo, setResInfo] = useState(null)


const fetchMenu = async () => {
    const data = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D18.5204303%26lng%3D73.8567437%26restaurantId%3D755224%26catalog_qa%3Dundefined%26submitAction%3DENTER"
    );
    const json = await data.json();


   const m_data = json
   console.log(m_data,"M-data")
    setResInfo(json)
// name n all details from data.cards[0]
//    const m_data = json?.data?.cards[0]?.card?.card?.info
//    info.costForTwoMessage
//    cuisines
//    name
//    locality
//    sla.deliveryTime


// menu details from data.cards[2]
// data.cards[2].groupedCard.cardGroupMap.REGULAR.cards



};


if ( resInfo === null){
    return <Shimmer/>
}else{
    return (
        <div>
            <h1>{resInfo.data?.cards[0]?.card?.card?.info?.name}</h1>
            <h2>{resInfo.data?.cards[0]?.card?.card?.info?.cuisines.join(", ")}</h2>
            <h2>{resInfo.data?.cards[0]?.card?.card?.info?.locality}</h2>

            <h2>{resInfo.data?.cards[0]?.card?.card?.info?.sla.deliveryTime} mins</h2> <h2>{resInfo.data?.cards[0]?.card?.card?.info?.costForTwoMessage}</h2>


            <h2>Menu:</h2>

            <ul>
                
                <li>1st item</li>
                <li>2nd item</li>
                <li>3rd item</li>
            </ul>
        </div>
    )
}
}
export default RestoInfo;