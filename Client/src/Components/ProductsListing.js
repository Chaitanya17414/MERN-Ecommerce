import { Link} from "react-router-dom";
import Rating from "react-rating";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchAllProducts} from "./Redux/Actions/actions";
import { addItem } from "./Redux/Slices/cartSlice";

function ProductsListing() {
    const dispatch= useDispatch();
    const { products, status, error } = useSelector((state) => state.productReducer.productList);
    useEffect(() => {
      dispatch(fetchAllProducts());
    }, [dispatch]);
  
    const handleAddToCart = (product) => {
        dispatch(addItem(product));

    }

    if (status === 'loading') {
      return <div>Loading...</div>;
    }
  
    if (status === 'failed') {
      return <div>Error: {error}</div>;
    }
    return ( 
        <div className="container mx-auto">
            <div>

            </div>
            <div className="grid grid-cols-4 gap-4">
                {products.map((items)=>{
                    return(
                        <div key={items.title} className="p-4 h-50 group text-left">
                            <Link to={`/product/${items._id}`}>
                            <div className="w-full h-56 overflow-hidden">
                                 <img src={items.thumbnail} alt=""className="rounded-lg object-contain shadow-xl mx-auto w-full h-full"/>
                            </div>
                           
                            <h4 className="pt-3 text-sm text-neutral-500">{items.title}&nbsp;({items.brand})</h4>
                            <p className=""><Rating
                                initialRating={items.rating}
                                className="text-amber-400"
                                emptySymbol="fa fa-star-o fa-1x"
                                fullSymbol="fa fa-star fa-1x"
                                readonly={true}
                                /></p>
                            <p className="text-stone-500 text-md font-medium "><span className="text-orange-600">&#8377;{items.price}</span></p></Link>
                            <button className="hidden group-hover:block p-2 border border-orange-400 text-[#fb923c] 
                            hover:bg-[#fb923c] hover:text-white rounded-lg mt-3" onClick= {()=>{handleAddToCart(items)}}>Add to Cart</button>
                        </div>
                    )
                })}
            </div>
        </div>
     );
}

export default ProductsListing;