import { useDispatch, useSelector } from "react-redux";
import Shimmer from "./Shimmers/Shimmer";
import { useParams } from "react-router-dom";
import { fetchOrderById } from "./Redux/Actions/actions";
import { useEffect } from "react";

function OrderDetail() {
    const dispatch = useDispatch()
    const params = useParams();
    const paramId = params.id; 
    const {order,loading,error} = useSelector((store)=> store.order.orderById)
    useEffect(()=>{
        dispatch(fetchOrderById(paramId))
    },[])
    return ( 
        <>
        <div className="container mx-auto">
            <h2 className="text-2xl text-left my-[30px]">Order Details</h2>
            {loading && <Shimmer />}
            <div className="grid grid-cols-2 gap-4">
                <div className="shadow-lg rounded-xl bg-white">
                    <h1 className="text-xl font-medium p-4 border-b-slate-200 ">Order Items</h1>
                    {order.orderItems.map((items)=>{
                        return(
                            <div className="text-left p-4 border-b-slate-200 border ">
                                <p className="text-orange-400">{items.name}</p>
                                <p className="text-red-500"><span className="text-md font-medium mr-1 text-black">Quantity:</span>{items.quantity}</p>
                                <p className="text-red-500"><span className="text-md font-medium mr-1 text-black">Price:</span>&#8377;{items.price}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="shadow-lg rounded-xl bg-white text-right">
                    <div className="">
                        <h1 className="text-xl font-medium p-4 border-b-2 ">Order Details</h1>
                        <div className="pr-4">
                            <p className="text-red-500"><span className="text-md font-medium mr-1 text-black">Order Id:</span>#{order._id}</p>
                            <p className="text-red-500"><span className="text-md font-medium mr-1 text-black">Total Amount:</span>&#8377;{order.orderAmount}</p>
                            <p className="text-red-500"><span className="text-md font-medium mr-1 text-black">Date Of Order:</span>{order.createdAt.substring(0,10)}</p>
                            <p className="text-red-500"><span className="text-md font-medium mr-1 text-black">Transaction ID:</span>{order.transactionId}</p>
                            <p className="text-red-500">{order.isDelivered}</p>
                        </div>
                       
                    </div>
                   
                   <div>
                        <h1 className="text-xl font-medium p-4 border-y-2 ">Shipping Details</h1>
                        {order.shippingAddress.map((items)=>{
                        return(
                            <div className="text-left p-4">
                                <p className="text-red-500"><span className="text-md font-medium mr-1 text-black">Address:</span>{items.address}</p>
                                <p className="text-red-500"><span className="text-md font-medium mr-1 text-black">City:</span>{items.city}</p>
                                <p className="text-red-500"><span className="text-md font-medium mr-1 text-black">Country:</span>{items.country}</p>
                                <p className="text-red-500"><span className="text-md font-medium mr-1 text-black">ZipCode:</span>{items.zipcode}</p>
                            </div>
                        )
                    })}
                   </div>      
                </div>
            </div>
        </div>
        <div className="shadow-lg bg-white text-left my-4">
            <div className="container mx-auto p-4"> 
                <h1 className="text-xl font-medium">Replacement Conditions</h1>
                <div className="py-3">
                    <p>&#9830;&nbsp; A free replacement cannot be created for an item which was returned and replaced once earlier.</p>
                    <p> &#9830;&nbsp; If the item has missing parts or accessories, you may try to contact the manufacturer for assistance. Manufacturer contact information can usually be found on the item packaging or in the paperwork included with the item.</p>
                    <p> &#9830;&nbsp; If your item is not eligible for free replacement due to any reason, you can always return it for a refund.</p>
                    <p>&#9830;&nbsp; If your item is "Seller-Fulfilled," A replacement can only be created if the product is available with the same seller. In case the product is not available with the same seller, please "Contact Seller" from "Your Orders" to request a refund.</p>
                </div>
            </div>
        </div>
        </>
     );
}

export default OrderDetail;