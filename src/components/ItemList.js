import { CDN_RESTO_LOGO } from "../utils/constant";

const ItemList = ({items})=>{

    console.log(items,"itemsmm")
    return (
        <div>
           {items.map(item => <div key={item.card.info.id} className="py-4 border-b-2 flex justify-between">
         <div>
             <div className="w-9/12 py-2">
                <span className="text-sm">{item.card.info.name}</span>
                <span>- ₹{item.card.info.price/100}</span>
             </div>
             <p className="text-sm">{item.card.info.description}</p>
         </div>
    
            <div className="w-2/12 rounded-lg group">
                    <img  className="rounded-lg shadow-lg w-13 "
                    src={CDN_RESTO_LOGO + item.card.info.imageId}/>
                    <button className="bg-slate-100 text-green-500 w-27 border-gray-200 
                     font-bold border-2 px-5 text-xs py-1 rounded-lg ml-6 hover:shadow-md ">ADD</button>
            </div>
            
           </div>)}
        </div>
    )
}

export default ItemList;