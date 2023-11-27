import { AiOutlineClose } from "react-icons/ai";
import { decreaseAmount, increaseAmount, removeFromCart } from "../app/slices/CartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ cartItem }) => {
// Destructuring properties from cartItem
const { title, image, price, amount } = cartItem;

// Redux setup
const dispatch = useDispatch();

// Function to handle removing item from the cart
const handleRemoveFromCart = () => {
  dispatch(removeFromCart(cartItem));
};

// Function to handle increasing the amount of the item in the cart
const handleIncreaseAmount = () => {
  dispatch(increaseAmount(cartItem));
};

// Function to handle decreasing the amount of the item in the cart
const handleDecreaseAmount = () => {
  if (amount < 2) {
    dispatch(handleRemoveFromCart(cartItem));
  } else {
    dispatch(decreaseAmount(cartItem));
  }
};

  return (
    <li className="flex items-center p-4 text-gray-500 border gap-4">
      <img className="max-w-[190px] max-h-[100px]" src={image} alt={title} />

      <div className="flex-1 flex flex-col justify-between gap-4">
        <div className="flex justify-between gap-4">
          <h2 className="text-black font-semibold overflow-ellipsis line-clamp-3">
            {title}
          </h2>
          <div onClick={handleRemoveFromCart} className="min-h-5 min-w-5">
            <AiOutlineClose className=" min-w-full hover:text-red-600 cursor-pointer " />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className=" flex items-center w-fit px-2 self-stretch gap-3 rounded-sm ">
            <span>quantity</span>
            <div className="flex items-center gap-2">
              <button onClick={handleIncreaseAmount}>+</button>
              <span>{amount}</span>
              <button onClick={handleDecreaseAmount}>-</button>
            </div>
          </div>

          <p className="text-lg">{(price).toFixed(2)}$</p>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
