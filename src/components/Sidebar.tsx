import {
  FaHome,
  FaThLarge,
  FaRegBookmark,
  FaShoppingCart,
  FaRegCommentAlt,
} from "react-icons/fa";
import { CiSettings, CiPower, CiMenuKebab, CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`absolute top-4 left-4 min-h-[calc(100vh-1.5rem)] bg-white p-4 rounded-xl flex flex-col justify-between  gap-16 transition-all duration-300 ${
        expanded ? "w-56" : "w-[5.5rem]"
      }`}
    >
      <img src="/logo.png" alt="logo" className="size-14" />
      <div className="p-2 px-4">
        <ul className="space-y-8">
          <button className="text-xl text-slate-600 hover:text-red-600 flex items-center justify-start gap-8  ">
            <FaHome />
            <p
              className={`${
                expanded ? "block fade-in " : "hidden"
              }  uppercase text-xl`}
            >
              Home
            </p>
          </button>
          <button className="text-xl text-slate-600 hover:text-red-600 flex items-center justify-start gap-8">
            <FaThLarge />
            <p
              className={`${
                expanded ? "block fade-in " : "hidden"
              }  uppercase text-xl`}
            >
              menu
            </p>
          </button>
          <button className="text-xl text-slate-600 hover:text-red-600 flex items-center justify-start gap-8">
            <FaRegBookmark />
            <p
              className={`${
                expanded ? "block fade-in text-nowrap" : "hidden"
              }  uppercase text-xl text-left`}
            >
              saved items
            </p>
          </button>
          <button className="text-xl text-slate-600 hover:text-red-600 flex items-center justify-start gap-8">
            <FaShoppingCart />
            <p
              className={`${
                expanded ? "block fade-in " : "hidden"
              }  uppercase text-xl`}
            >
              cart
            </p>
          </button>
          <button className="text-xl text-slate-600 hover:text-red-600 flex items-center justify-start gap-8">
            <FaRegCommentAlt />
            <p
              className={`${
                expanded ? "block fade-in text-nowrap" : "hidden"
              }  uppercase text-xl text-left`}
            >
              about us
            </p>
          </button>
        </ul>
      </div>
      <div className="px-2">
        <button
          className="text-2xl text-slate-600 hover:text-white hover:bg-red-600 rounded-full p-2 flex items-center justify-start gap-4"
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          {expanded ? <CiMenuKebab /> : <CiMenuBurger />}
          <p
            className={`${
              expanded ? "block" : "hidden"
            } lowercase text-lg px-2`}
          >
            collapse
          </p>
        </button>
        <button className="text-2xl text-slate-600 hover:text-white hover:bg-red-600 rounded-full p-2 flex items-center justify-start gap-4">
          <CiSettings />
          <p
            className={`${
              expanded ? "block " : "hidden"
            } lowercase text-lg px-2`}
          >
            settings
          </p>
        </button>
        <button className="text-2xl text-slate-600 hover:text-white hover:bg-red-600 rounded-full p-2 flex items-center justify-start gap-4">
          <CiPower />
          <p
            className={`${
              expanded ? "block" : "hidden"
            } lowercase text-lg px-2`}
          >
            log out
          </p>
        </button>
      </div>
    </div>
  );
}
