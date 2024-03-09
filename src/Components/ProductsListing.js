import { Link} from "react-router-dom";
import {products} from "./Utills/Custom"

function ProductsListing() {
    return ( 
        <div className="container mx-auto">
            <div>

            </div>
            <div className="grid grid-cols-4 gap-6">
                {products.map((items)=>{
                    return(
                        <div key={items.image}className="p-4 h-50">
                           <Link to={`/product/${items.id}`}><img src={items.image} alt=""className="cart shadow-xl mx-auto h-56"width={200} height={150}/>
                            <h4 className="pt-3">{items.name}</h4>
                            <p className="pt-2">Rating: {items.rating}</p>
                            <p className="pt-2">Price: {items.price}</p>
                            <button className="hidden cart-hover:block">Add to Cart</button></Link>
                        </div>
                    )
                })}
            </div>
        </div>
     );
}

export default ProductsListing;