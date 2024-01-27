import InsideDetailsCategory from "./InsideDetailsCategory";

const MenuCategory = (data) =>{
    // const {itemCards} = data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card; //getting accordions info

    const itemsCatergory = data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    filteredCategory = itemsCatergory.filter(item => item.card.card && item.card.card["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
    // console.log(filteredCategory,"<<< items filteredCategory")
    
    return (
  
        <div>
          <ul className="p-4 m-2 ">
            {filteredCategory.map(items => 
                    <li className="p-4 border-b-4 border-gray-300 " key={items.card?.card?.title}>
                         {items.card?.card?.title} {<span className=" flex justify-end mt-[-30px]">⬇️</span>}
                         {"details" }
                        <InsideDetailsCategory data={filteredCategory}/>
                         
                    </li>)}
        </ul>
          
        </div>
    )
}

export default MenuCategory;