import { useParams } from "react-router-dom";
import { products } from "./Utills/Custom";
function ProductDetail() {
    
    let params= useParams();
    let productId=params.id; 

    const productDetail= products.find(product => product.id == productId);
    return ( 
        <div className="grid grid-cols-2 gap-4 p-6">
            <div className=""> 
                <img src={productDetail.image} alt="Product Image"/>
            </div>
            <div className="text-left">
                <div>
                    <h4 className="text-xl text-orange-600 pb-2">{productDetail.name}</h4>
                </div>
                <div>
                    <p className="text-stone-500 border-b-2 py-4">Description:</p>
                    <p className="text-sm py-2">{productDetail.description}</p>
                </div>
               <div>
                    <p className="text-stone-500 border-b-2 py-4">Price: <span className="text-orange-600">&#8377;{productDetail.price}</span></p>

               </div>
                <div>
                    <p className="text-stone-500 border-b-2 py-4 ">Select Quantity:</p>
                    <div className="grid grid-cols-2 gap-9">
                        <select className="p-2 mt-4 rounded-md w-12">
                            {[...Array(productDetail.countInStock).keys()].map((x,i)=> {
                                return <option value={i+1} key={i} >{i+1}</option>;
                            })}
                        </select>
                        <button className="rounded-md border border-orange-400 text-[#fb923c] px-4 
                        py-2 mt-4 hover:bg-[#fb923c] hover:text-white">Add to Cart</button>
                    </div>
                   
                </div>
                <div>
                    
                </div>
            </div>
        </div>
     );
}

export default ProductDetail;