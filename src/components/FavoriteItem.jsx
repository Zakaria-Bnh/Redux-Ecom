import { useEffect, useState } from "react";
import { IoHeartDislikeSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../app/slices/FavoritesSlice";
import { addtocart, selectCartitems } from "../app/slices/CartSlice";
import { motion } from "framer-motion";

const FavoriteItem = ({ item }) => {
  const dispatch = useDispatch();
  const [itemIsAdded, setitemIsAdded] = useState();
  const cartItems = useSelector(selectCartitems);

  const { title, image } = item;

  const handleFavorite = () => {
    dispatch(removeFromFavorites(item));
  };

  // Find if the product is already in the cart
  const AddedProduct = cartItems.find((product) => {
    return product.id === item.id;
  });

  const handleAddtocart = (e) => {
    itemIsAdded
      ? e.preventDefault()
      : dispatch(addtocart({ ...item, amount: 1 }));
    setitemIsAdded(true);
  };

  useEffect(() => {
    setitemIsAdded(AddedProduct);
  }, []);

  // animation functions
  const favoriteanimation = {
    start: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.li
      variants={favoriteanimation}
      initial="start"
      animate="visible"
      transition={{ duration: 0.3, delay: 0.15 }}
      className="flex items-center p-4 text-gray-500 border gap-4 overflow-hidden
        "
    >
      <div onClick={handleFavorite} className="flex justify-center min-w-24">
        <IoHeartDislikeSharp className="w-5 h-5 text-darkBlue cursor-pointer" />
      </div>
      <img
        className=" max-w-[100x] max-h-[90px] sm:max-h-[120px]"
        src={image}
        alt={title}
      />

      <div className="flex justify-start flex-col sm:flex-row items-center gap-4">
        <h2 className="text-black text-sm sm:text-base font-semibold overflow-ellipsis line-clamp-3">
          {title}
        </h2>

        <button onClick={handleAddtocart} className="flex-1 whitespace-nowrap">
          {itemIsAdded ? "ITEM IS ADDED !" : "ADD TO CART"}
        </button>
      </div>
    </motion.li>
  );
};

export default FavoriteItem;
