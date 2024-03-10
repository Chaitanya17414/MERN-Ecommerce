import { Link} from "react-router-dom";
import {products} from "./Utills/Custom"
import Rating from "react-rating";
function ProductsListing() {
    return ( 
        <div className="container mx-auto">
            <div>

            </div>
            <div className="grid grid-cols-4 gap-4">
                {products.map((items)=>{
                    return(
                        <div key={items.image} className="p-4 h-50">
                           <Link to={`/product/${items.id}`}><img src={items.image} alt=""className="cart shadow-xl mx-auto h-56"width={200} height={150}/>
                            <h4 className="pt-3 text-sm text-neutral-500">{items.name}</h4>
                            <p className=""><Rating
                                initialRating={items.rating}
                                className="text-amber-400"
                                emptySymbol="fa fa-star-o fa-1x"
                                fullSymbol="fa fa-star fa-1x"
                                readonly={true}
                                /></p>
                            <p className="text-stone-500 text-lg font-medium "><span className="text-orange-600">&#8377;{items.price}</span></p>
                            <button className="hidden cart-hover:block">Add to Cart</button></Link>
                        </div>
                    )
                })}
            </div>
        </div>
     );
}

export default ProductsListing;