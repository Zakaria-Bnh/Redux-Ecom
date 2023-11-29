import { useState } from "react";

const CartDetails = ({ total }) => {
  const [shippingType, setShippinType] = useState("express");
  const [shippingPrice, setShippingPrice] = useState(0.2);

  const handleShippingPrice = (type) => {
    setShippinType(type);

    if (type === "express") {
      setShippingPrice(0.12);
    } else if (type === "standard") {
      setShippingPrice(0.1);
    } else if (type === "flat-rate") {
      setShippingPrice(0.15);
    }
  };

  const handleShippingOptionChange = (e) => {
    const selectedOption = e.target.value;
    handleShippingPrice(selectedOption);
  };

  return (
    <div className="py-6 px-4 sticky top-32 bg-secondary rounded-sm">
      <h3 className="text-2xl sm:text-2xl tracking-widest font-semibold mb-10">
        CART TOTALS
      </h3>

      <div className="grid grid-cols-301 gap-3 items-center mb-4 ">
        <h3 className="font-semibold text-sm ">SUB-TOTAL</h3>
        <span className="text-lg text-gray-500">{total.toFixed(2)}$</span>
      </div>

      <div className="grid grid-cols-301 gap-3 mb-12">
        <h3 className="font-semibold text-sm">SHIPPING</h3>

        <form className="flex flex-col gap-3">
          <div className="flex gap-2 text-sm lg:text-base">
            <input
              onChange={handleShippingOptionChange}
              className="cursor-pointer"
              type="radio"
              checked={shippingType === "express"}
              value="express"
              name="shipping"
              id="express"
            />
            <label className="cursor-pointer text-gray-500" htmlFor="express">
              Express Shipping
            </label>
          </div>
          <div className="flex gap-2 text-sm lg:text-base cursor-pointer">
            <input
              onChange={handleShippingOptionChange}
              className="cursor-pointer"
              type="radio"
              checked={shippingType === "standard"}
              value="standard"
              name="shipping"
              id="standard"
            />
            <label className="cursor-pointer text-gray-500" htmlFor="standard">
              Standard Shipping
            </label>
          </div>
          <div className="flex gap-2 text-sm lg:text-base cursor-pointer">
            <input
              onChange={handleShippingOptionChange}
              className="cursor-pointer"
              type="radio"
              checked={shippingType === "flat-rate"}
              value="flat-rate"
              name="shipping"
              id="flat-rate"
            />
            <label className="cursor-pointer text-gray-500" htmlFor="flat-rate">
              Flat-rate
            </label>
          </div>
        </form>
      </div>

      <div className="w-full h-[2px] bg-gray-300 mb-4"></div>

      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">TOTAL</h3>
        <span className="text-lg font-semibold">
          {(total + total * shippingPrice).toFixed(2)}$
        </span>
      </div>
      <div>
        <button className=" bg-darkBlue rounded-sm tracking-wide  w-full p-3 hover:opacity-80 text-white flex-1 transition-colors duration-300`">PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartDetails;
