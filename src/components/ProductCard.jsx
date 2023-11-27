import { BsFillHeartFill } from "react-icons/bs";
import { IoHeartDislikeSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { ViewProduct, openModal } from "../app/slices/ProductQuickViewSlice";
import {
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  SelectFavorites,
  addToFavorite,
  removeFromFavorites,
} from "../app/slices/FavoritesSlice";

const ProductCard = ({ data }) => {
  // Redux setup
  const dispatch = useDispatch();
  const FavoriteItems = useSelector(SelectFavorites);

  // State and ref for animation
  const [itemIsFavorite, setitemIsFavorite] = useState(false);
  const productRef = useRef(null);
  const isInView = useInView(productRef);
  const mainAnimationControler = useAnimation();

  // Animation variants
  const prodcutAnimation = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // Effect to start animation when the component is in view
  useEffect(() => {
    if (isInView) {
      mainAnimationControler.start("visible");
    }
  }, [isInView]);

  // Function to handle quick view
  const handlequickview = () => {
    dispatch(openModal());
    dispatch(ViewProduct(data));
  };

  // Function to handle adding or removing from favorites
  const handleFavorite = () => {
    if (!itemIsFavorite) {
      dispatch(addToFavorite(data));
      setitemIsFavorite((pre) => !pre);
    } else {
      dispatch(removeFromFavorites(data));
      setitemIsFavorite((pre) => !pre);
    }
  };

  // Check if the item is already in favorites
  const addedFavorite = FavoriteItems.find((item) => {
    return item.id === data.id;
  });

  // Update favorite state when the component mounts
  useEffect(() => {
    setitemIsFavorite(addedFavorite);
  }, []);

  return (
    <motion.div
      variants={prodcutAnimation}
      transition={{ duration: 0.9, delay: 0.15 }}
      initial="hidden"
      animate={mainAnimationControler}
      className="relative"
      ref={productRef}
    >
      <div className="h-[350px] bg-white rounded-md mx-auto w-full max-w-sm hover:shadow-md  flex flex-col group ">
        <div
          onClick={() => handlequickview()}
          className="w-[200px] min-h-[180px] py-4 aspect-square mx-auto h-full flex flex-col justify-center items-center cursor-pointer"
        >
          <img
            className="max-h-full group-hover:scale-105 transition-all duration-400"
            src={data.image}
            alt={data.title}
          />
        </div>
        <div className="p-4 flex flex-col h-full">
          <h2 className=" mb-4 font-semibold text-center overflow-ellipsis line-clamp-2">
            {data.title}
          </h2>
          <div className="flex-1 flex flex-col justify-end">
            <div className="flex items-end justify-around mb-3">
              <p className="text-gray-500">
                <span className="line-through font-light">
                  {(data.price * 1.3).toFixed(2)}
                </span>
                $
              </p>
              <p className="text-xl">{data.price.toFixed(2)}$</p>
            </div>
            <div className="flex sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => handlequickview()}
                className="mx-auto w-full bg-darkBlue hover:opacity-80 py-2 text-white"
              >
                Quick view
              </button>
              <div
                onClick={handleFavorite}
                className="bg-gray-700 hover:bg-gray-500 focus:bg-darkBlue cursor-pointer p-2 "
              >
                {itemIsFavorite && (
                  <IoHeartDislikeSharp className="w-full text-white h-full " />
                )}
                {!itemIsFavorite && (
                  <BsFillHeartFill className="w-full text-white h-full " />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
