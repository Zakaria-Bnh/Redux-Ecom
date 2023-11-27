import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchProducts, SelecteProducts } from "../app/slices/ProductsSlices";
import { ProductCard, ProductQuickView } from "./index";
import { SelectIsShowModal } from "../app/slices/ProductQuickViewSlice";

const Products = ({ showCategories }) => {
  const [category, setcategory] = useState("all");
  const products = useSelector(SelecteProducts);
  const dispatch = useDispatch();
  const showModal = useSelector(SelectIsShowModal);


  

  useEffect(() => {
    dispatch(FetchProducts());
  }, [category]);
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const handleClickedCategory = (item) => {
    setcategory(item);
  };

  const renderTitleCategories = (...arg) =>
    arg.map((item, index) => {
      return (
        <li
          key={index}
          onClick={() => handleClickedCategory(item)}
          className={`${
            category === item ? "text-gray-900 font-semibold" : ""
          } hover:text-gray-900 cursor-pointer capitalize`}
        >
          {item}
        </li>
      );
    });

  return (
    <div className="container | bg-lightSecondary py-16 md:py-20">
      {showCategories && (
        <ul className="mx-auto w-fit flex gap-3 sm:gap-4 md:gap-6 mb-8 text-md md:text-xl text-gray-500 ">
          {renderTitleCategories("all", "cloths", "jewelery", "electronics")}
        </ul>
      )}
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 ">
        {products.map((item, index) => {
          if (
            category === "all" ||
            (category === "cloths" &&
              (item.category === "men's clothing" ||
                item.category === "women's clothing")) ||
            (category === "jewelery" && item.category === "jewelery") ||
            (category === "electronics" && item.category === "electronics")
          ) {
            return <ProductCard key={item.id} index={index} data={item} />;
          }
        })}
      </div>
      {showModal && <ProductQuickView />}
    </div>
  );
};

export default Products;
