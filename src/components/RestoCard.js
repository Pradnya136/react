import {resList} from "../utils/mockData";
import {CDN_RESTO_LOGO } from "../utils/constant";


const RestoCard = ( props ) => {
    const {resData} = props;
    const {name,avgRating,costForTwo,cuisines,cloudinaryImageId,deliveryTime} = resData?.info;
    return (
        <div className="restocard-wrapper">
            <img 
            
            className="restologo"
            src={CDN_RESTO_LOGO + cloudinaryImageId}
            alt="resto img">

            </img>
            <h2 className="restocardfont">{name}</h2>
            <h3 className="restocardfont1">{cuisines.join(", ")}</h3>
            <h3 className="restocardfont1">Rating: {avgRating}</h3>
            <h3 className="restocardfont1">{costForTwo}</h3>
            <h3 className="restocardfont1">{deliveryTime} minutes</h3>
          
          
      
        </div>
    )
}

export default RestoCard;