import { useSelector } from "react-redux";
import { selectCartitems, selectTotalPrice } from "../app/slices/CartSlice";
import {CartDetails, CartItem} from "./index";

const Cart = () => {
  const Cartitems = useSelector(selectCartitems);
  const Total = useSelector(selectTotalPrice)


  return (
    <div className="container | py-20">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">SHOPPING CART</h1>
      <div className="grid md:grid-cols-140  gap-16 sm:gap-6">
      <ul className={`flex flex-col gap-4 ${Cartitems.length > 0 ? '' : 'bg-gray-100'}`}>
  {Cartitems.length > 0 ? (
    Cartitems.map((item, index) => (
      <CartItem key={index} cartItem={item} />
    ))
  ) : (
    <div className="flex justify-center items-center">
      <h3 className="text-lg font-semibold text-gray-500 mt-8 mb-4">Your cart is empty :(</h3>
    </div>
  )}
</ul>

        <div className="mb-12 md:mb-0">
          <CartDetails total={Total} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
