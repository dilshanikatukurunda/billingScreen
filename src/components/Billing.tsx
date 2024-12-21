// import React from 'react'
import { FaUser, FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import birthDayCake from "../images/birthDayCake.jpg";

export default function billing() {
  return (
    <div className="absolute top-4 right-4 w-1/3 max-w-80 min-h-[calc(100vh-1.5rem)] bg-white p-4 py-2 rounded-xl flex flex-col justify-between">
      <div className="">
        <p className="font-bold text-xl ">Current Order</p>
        <div className="flex flex-row gap-2 px-2 py-6 ">
          <button className="text-lg border-2 rounded-2xl p-1 hover:border-cyan-600">
            <FaUser />
          </button>
          <p className="text-base text-slate-700">user name</p>
        </div>
        <div className="flex gap-2 bg-slate-50 shadow-md hover:shadow-lg transition-shadow min-h-24 p-2 rounded-md">
          <img src={birthDayCake} alt="img" className="object-cover w-14" />
          <div className="flex flex-col justify-between ">
            <div className="flex ">
              <p className="text-base text-wrap">Birthday cake</p>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex">
                <p className="text-sm ">Rs.1200.00</p>
              </div>
              <div className="flex gap-1 items-center px-1 absolute right-6 ">
                <FaMinusCircle />
                <p className="text-sm w-4 text-center">1</p>
                <FaPlusCircle />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between mt-auto bg-slate-50 shadow-md hover:shadow-lg transition-shadow px-2 py-3 rounded-md">
          <div className="flex flex-col gap-1">
            <label id="lblSubtotal">Sub total </label>
            <label id="lblDiscount">Discount </label>
          </div>
          <div className="flex flex-col gap-1">
            <label id="subtotal">Rs.1000.00 </label>
            <label id="discount">Rs.50.00 </label>
          </div>
        </div>
        <div className="flex justify-between bg-slate-50 shadow-md hover:shadow-lg transition-shadow p-2 rounded-md">
          <label id="lblTotal">Total </label>
          <label id="total">Rs.950 </label>
        </div>
        <div className="text-center rounded-3xl p-2  mt-auto bg-red-500 text-white hover:shadow-lg hover:bg-red-700 cursor-pointer transition-all ease-linear">
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}
