import { useEffect, useState } from "react";
import {MENU_URL} from "../utils/constant";


const useRestoMenu = (resId) =>{
    const [resInfo,setResInfo] = useState(null);


    useEffect(()=>{
        fetchData();     
    },[]); //we want our data to be initialized only once.
    const fetchData = async ()=>{
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResInfo(json.data)
    }
    
    return resInfo;
}


export default useRestoMenu;