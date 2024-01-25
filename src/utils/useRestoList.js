// import { useEffect,useState } from "react";
// import { SWIGGY_MAIN_URL } from "./constant";


// const useRestoList = ()=>{

//  const [listOfResto, setListOfResto] = useState([])   

//     useEffect(()=>{
//         fetchData()
//     },[])
//     const fetchData = async ()=>{
//         const data = await fetch(SWIGGY_MAIN_URL);
//         const json = await data.json();
//         setListOfResto(json.data.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants)

//     }
//    return listOfResto;
// }

// export default useRestoList;