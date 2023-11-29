import { useDispatch, useSelector } from "react-redux";
// actions from slices
import {
  SelectProductData,
  closeModal,
} from "../app/slices/ProductQuickViewSlice";
import { addtocart, selectCartitems } from "../app/slices/CartSlice";
//utilities
import { RatingStars } from "../utilities/index";
// icons
import { AiOutlineClose } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import { IoHeartDislikeSharp } from "react-icons/io5";

import { useEffect, useState } from "react";

import {
  SelectFavorites,
  addToFavorite,
  removeFromFavorites,
} from "../app/slices/FavoritesSlice";

const ProductQuickView = () => {
  // Redux setup
  const product = useSelector(SelectProductData);
  const cartItems = useSelector(selectCartitems);
  const dispatch = useDispatch();
  // favorite functionality
  const [itemIsFavorite, setitemIsFavorite] = useState(false);
  const FavoriteItems = useSelector(SelectFavorites);

  // State for component
  const [itemIsAdded, setitemIsAdded] = useState();
  const [amount, setamount] = useState(1);

  // Component's functions

  // Function to close the quick view modal
  const handlecloseQuickView = () => {
    dispatch(closeModal());
  };

  // Function to add product to the cart
  const handleAddtocart = (e) => {
    // Prevent adding to cart if the item is already added
    itemIsAdded
      ? e.preventDefault()
      : dispatch(addtocart({ ...product, amount }));
    setitemIsAdded(true);
  };

  // Find if the product is already in the cart
  const AddedProduct = cartItems.find((item) => {
    return item.id === product.id;
  });

  // Update itemIsAdded state when the component mounts
  useEffect(() => {
    setitemIsAdded(AddedProduct);
  }, []);

  // Function to increase the amount of the product
  const handleIncreaseAmount = (e) => {
    // Prevent increasing amount if the item is already added
    itemIsAdded
      ? e.preventDefault()
      : setamount((previousAmount) => previousAmount + 1);
  };

  // Function to decrease the amount of the product
  const handleDecreaseAmount = (e) => {
    // Prevent decreasing amount if the item is already added or the amount is already at the minimum
    if (amount > 1 && !itemIsAdded) {
      setamount((previousAmount) => previousAmount - 1);
    } else {
      e.preventDefault();
    }
  };

  // Check if the item is already in favorites
  const addedFavorite = FavoriteItems.find((item) => {
    return item.id === product.id;
  });
  // Update favorite state when the component mounts
  useEffect(() => {
    setitemIsFavorite(addedFavorite);
  }, []);

  // Function to handle adding or removing from favorites
  const handleFavorite = () => {
    if (!itemIsFavorite) {
      dispatch(addToFavorite(product));
      setitemIsFavorite((pre) => !pre);
    } else {
      dispatch(removeFromFavorites(product));
      setitemIsFavorite((pre) => !pre);
    }
  };

  return (
    <div className="flex justify-center">
      <div
        onClick={() => handlecloseQuickView()}
        className="bg-black opacity-70 fixed h-full w-screen z-20 top-0"
      ></div>

      <div className="fixed top-12 sm:top-28 h-[85vh] sm:h-auto sm:bottom-auto  flex justify-center rounded-md items-center z-40">
        <div className="bg-white rounded-sm overflow-hidden  h-full relative w-11/12  max-w-[800px]  flex flex-col sm:flex-row">
          <div className="flex-1 flex justify-center items-center md:items-start">
            <div className=" max-w-[280px] md:max-w-[320px]  p-12 mx-auto">
              <img
                className="max-h-[200px]"
                src={product.image}
                alt={product.title}
              />
            </div>
          </div>
          <div className=" overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400  scrollbar-track-gray-300 flex-1 p-4 pb-6 bg-lightSecondary">
            <div
              onClick={() => handlecloseQuickView()}
              className="w-full mb-8 cursor-pointer"
            >
              <AiOutlineClose className=" absolute right-3 top-3 ml-auto w-8 h-8 hover:text-red-600 " />
            </div>
            <h1 className="mb-2 font-semibold text-xl">{product.title}</h1>
            <div className="flex items-end gap-4 mb-6">
              <p className="text-gray-500">
                <span className="line-through font-light">{product.price}</span>
                $
              </p>
              <p className="text-xl">{(product.price * 0.7).toFixed(2)}$</p>
            </div>
            <div className="mb-2">
              <RatingStars rate={product.rating.rate} />
            </div>
            <p className="text-gray-500 mb-6 line-clamp-5">
              {product.description}
            </p>
            <div className=" flex flex-col items-start   gap-2 mb-6 rounded-sm">
              <div
                className={` ${
                  itemIsAdded ? "opacity-50" : ""
                } flex items-center w-fit p-3 gap-3 border rounded-sm border-gray-500 transition-opacity duration-300`}
              >
                <span className="text-gray-500">quantity</span>
                <div className="flex items-center gap-2">
                  <button onClick={handleIncreaseAmount} className="text-xl font-bold">+</button>
                  <span>{amount}</span>
                  <button onClick={handleDecreaseAmount} className="text-xl font-bold">-</button>
                </div>
              </div>
              <button
                onClick={handleAddtocart}
                className={`${
                  itemIsAdded ? "bg-amber-500" : "bg-darkBlue"
                } tracking-wide  w-full p-3 hover:opacity-80 text-white flex-1 transition-colors duration-300`}
              >
                {itemIsAdded ? "ITEM IS ADDED !" : "ADD TO CART"}
              </button>
            </div>
            <div
              onClick={handleFavorite}
              className="flex items-center gap-2"
            >
              {itemIsFavorite ? (
                <IoHeartDislikeSharp className="bg-transparent border" />
              ) : (
                <BsFillHeartFill className="bg-transparent border" />
              )}
              <span className="text-gray-500 hover:text-gray-800 ">
                {itemIsFavorite ? "remove from wishlist!" : "Add to wish list"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickView;
