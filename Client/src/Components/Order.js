import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrdersByUser } from "./Redux/Actions/actions";
import Shimmer from "./Shimmers/Shimmer";
import { Link } from "react-router-dom";

function Order() {
    const dispatch = useDispatch();
    const user = useSelector((store)=> store.auth)
    const {orders,loading,error}= useSelector((store) => store.order.ordersByuser)
    
    useEffect(()=>{
        dispatch(fetchOrdersByUser(user._id))
    },[user._id,dispatch])

    return ( 
        <div className="container p-[20px] mx-auto">
            <h2 className="text-2xl text-left my-6">MY Orders</h2>
           
            <div>
                <div>
                    <div className="grid grid-cols-7 gap-4 text- text-left bg-orange-400 p-5 rounded-xl">
                        <p className="col-span-2">Order ID</p>
                        <p>Amount</p>
                        <p>Date</p>
                        <p className="col-span-2">Transaction ID</p>
                        <p>Status</p> 
                    </div>
                    {loading && <Shimmer />}
                    <div>
                       
                        {(user._id ||orders)? (orders.map((item)=>{
                            return(
                            <Link to={`/order/${item._id}`}>
                                <div key={item.transactionId} className="grid grid-cols-7 gap-4 text-left my-4 bg-orange-100 p-3 rounded-xl hover:bg-orange-200">
                                    <div className="col-span-2">#{item._id}</div>
                                    <div>{item.orderAmount}</div>
                                    <div>{item.createdAt.substring(0,10)}</div>
                                    <div className="col-span-2">{item.transactionId}</div>
                                    <div>{item.isDelivered ? <p>isDelivered</p>:<p>Order Placed</p>}</div>
                                </div>
                            </Link>)})):(
                                <div>
                                    <p className="text-red-600 text-lg text-center my-5"> No Orders Found</p>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Order;