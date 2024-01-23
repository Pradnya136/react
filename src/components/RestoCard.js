
import {CDN_RESTO_LOGO } from "../utils/constant";


const RestoCard = ( props ) => {
    const {resData} = props;
    const {name,avgRating,costForTwo,cuisines,cloudinaryImageId,sla,locality} = resData?.info;
    return (
        <div className="restocard-wrapper">
            <img 
            
            className="restologo"
            src={CDN_RESTO_LOGO + cloudinaryImageId}
            alt="resto img">

            </img>
            <h2 className="restocardfont0">{name}</h2>
            <h3 className="restocardfont1">Rating: {avgRating} {sla.slaString}</h3>
            <h3 className="restocardfont2">{cuisines.join(", ")}</h3>
            <h3 className="restocardfont2">{locality}</h3>
            <h3 className="restocardfont2">{costForTwo}</h3>
          
          
          
      
        </div>
    )
}

export default RestoCard;