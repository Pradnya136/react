import { CDN_RESTO_LOGO } from "../utils/constant";

const ItemList = ({items})=>{

    // console.log(items,"itemsmm")
    return (
        <div>
           {items.map(item => <div key={item.card.info.id} className="py-4 border-b-2 flex justify-between">
         <div className="w-9/12 ">
             <div className="py-4" >
                <span className="text-sm py-4" >{item.card.info.name}</span>
                <span>- ₹{item.card.info.price/100}</span>
             </div>
             <p className="text-sm">{item.card.info.description}</p>
         </div>
    
            <div className="w-36 p-4 rounded-lg group flex flex-col items-center justify-end">
                <div className="absolute ">
                     <button className="bg-slate-100 text-green-500 w-27 border-gray-200
                     font-bold border-2 px-5 py-2 text-xs  rounded-lg  hover:shadow-md ">ADD +</button>
                </div>
                    <img  className="rounded-lg shadow-lg w-full "
                    src={CDN_RESTO_LOGO + item.card.info.imageId}/>
              
            </div>
            
           </div>)}
        </div>
    )
}

export default ItemList;