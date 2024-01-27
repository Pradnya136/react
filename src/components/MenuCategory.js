import ItemList from "./ItemList"

const MenuCategory = ({data}) =>{
    
    return (
        <div>
            {/* header */}
            <div  className=" w-12/12  p-2  m-2 py-5 shadow-lg ">
             <div className="flex justify-between">
                <span className="font-bold text-sm " >{data.title} ({data.itemCards.length})</span>
                <span className="">{"⬇️"}</span>
             </div>
                <ItemList items={data.itemCards}/>
          
           </div>
           {/* body */}

           
        </div>

    )
}

export default MenuCategory;