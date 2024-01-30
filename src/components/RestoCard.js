
import {CDN_RESTO_LOGO } from "../utils/constant";
import React from "react";
import {useContext} from "react";
import UserContext from "../utils/userContext";

const RestoCard = ( props ) => {

    
    const contextDataa = useContext(UserContext);
    const {resData} = props;
    const {name,avgRating,costForTwo,cuisines,cloudinaryImageId,sla,locality} = resData?.info;
    return (//scale-105 transition-transform ease-out
        <div className=" w-72 rounded-md m-2 p-3 h-96  hover:bg-slate-200">
            <img 
            
            className="w-72 h-48 rounded-lg shadow-xl"
            src={CDN_RESTO_LOGO + cloudinaryImageId}
            alt="resto img">

            </img>
            <h2 className=" text-lg mt-2 mb-1 font-bold">{name}</h2>
            <h3 className="text-slate-600 font-medium">⭐ {avgRating} | {sla.slaString}</h3>
            <h4 className="text-slate-600  ">{cuisines.join(", ")}</h4>
            <h4 className="text-slate-600 ">{locality}</h4>
            <h4 className="text-slate-600 ">{costForTwo}</h4>
            <h4 className="text-slate-600 ">user:{place}</h4>
          
          
          
      
        </div>
    )
}

export const RestoCardDiscount = (RestoCard)=>{
    return (props) =>{
   
        const discount = props.resData.info.aggregatedDiscountInfoV3.header;
        const sub_discount = props.resData.info.aggregatedDiscountInfoV3.subHeader;;
  
        return(
            <div>
                 <label className="absolute bg-black text-white p-2 rounded-lg">{discount} {sub_discount}</label>
                <RestoCard {...props}/>
               
               
            </div>
        )
    }
}

export default RestoCard;