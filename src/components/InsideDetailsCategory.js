

const InsideDetailsCategory = (data)=>{

   const datatobeused = data?.data;
   console.log(datatobeused)

    filtereddata = datatobeused.map(item => item.card.card.itemCards)
    console.log(filtereddata, " %%% filterdd data ")

    return(
    <div>
        <h1>item name</h1>
        <h1>item description</h1>
        <ul>
            {filtereddata.map(item => <li>{item?.card?.card?.info?.name}</li>)}
        </ul>

    </div>
        
    )
}

export default InsideDetailsCategory;