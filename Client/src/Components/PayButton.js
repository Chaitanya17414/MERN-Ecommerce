import axios from "axios";
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, useSelector } from "react-redux";
import CheckoutSucess from "./CheckoutSucess"
import { checkoutUser } from "./Redux/Actions/actions";

const PayButton = ({ cart }) => {
  const dispatch =useDispatch()
  const STRIPE_KEY="pk_test_51Ou8ltSFcNUpoV2W6LsyaIQo3jITSMHx2F6S8irvcGOboZzSFhas0J3ey9HUfJxfvUNE7yL1Sql0qjc1Y26KE31A001Cvqs8A1"
  const user = useSelector((state) => state.auth);
  const {status,error} = useSelector((state) => state.order.checkout)
  

  const tokenHandler= (token)=>{
    const demoItems=cart.cartItems
    dispatch(checkoutUser({token,cart,demoItems,user}))
  
  }

  return (
    <>
    {status=="Succeeded" && <CheckoutSucess />}
    <StripeCheckout
        token={tokenHandler}
        amount={cart.cartTotalAmount * 100}
        currency="INR"
        shippingAddress
        stripeKey={STRIPE_KEY}
    >
        <div className="flex justify-end">
            <button className="px-10 w-full py-3 my-5 border border-blue-600 rounded-lg  text-center bg-blue-600 text-white
             hover:text-blue-600 hover:bg-white">Checkout</button>
        </div>
    </StripeCheckout>
  </>
  );
};

export default PayButton;