import { Link } from "react-router-dom";

function CheckoutSuccess() {
    return ( 
        <div className="container mx-auto my-[30px]">
            <div className="mx-auto bg-white p-[60px] rounbded-xl shadow-lg xl:w-[40%] w-[90%] sm:p-[20px] md:p-[30px] lg:w-[70%]">
            <div className="rounded-full h-[200px] w-[200px] bg-[#F8FAF5] mx-auto my-0 sm:h-[150px] sm:w-[150px]">
                <i className="text-[#9ABC66] text-[150px] ml-[-15px] sm:text-[100px]">✓</i>
            </div>
                <h1 className=" text-[#88B04B] font-bold text-[40px] mb-[10px]">Success</h1> 
                <p className=" text-[#404F5E] text-[20px] m-0 sm:text-[17px]">
                    We received your purchase request<br/> we'll be in touch shortly!</p>
                <Link to="/"><button className="px-10 py-3 m-5 border border-orange-500 rounded-lg  text-center bg-orange-500 text-white
                 hover:text-orange-500 hover:bg-white">Continue Shopping</button></Link>
        </div>
        </div>
        
     );
}

export default CheckoutSuccess;