import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{
    const cartItems = useSelector((store) => store.cart.items)
    
    const dispatch = useDispatch();
    const handleClearCart =()=>{
        dispatch(clearCart())
    }



    return(<>
        <h1 className="font-bold flex justify-center align-middle items-center p-4 m-4 text-xl">Cart </h1>
        {/* <button onClick={handleClearCart}
        className="font-bold flex justify-center align-middle items-center bg-slate-500 text-white p-3 rounded-lg">Clear Cart
        </button> */}
    
      <div className="flex justify-center">

        <div className="w-6/12  flex justify-center align-middle items-center">
  
    
            <ItemList 
            items={cartItems}/>
        </div>
      </div>
      <span className="flex justify-center p-4">{cartItems.length === 0 &&(<h1>Cart is empty, please add something.. . from store</h1>)}</span>
      </> )

}

export default Cart;



