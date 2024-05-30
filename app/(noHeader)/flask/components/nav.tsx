"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div>
      <nav className="space-x-5 flex items-start">
        <button
          onClick={handleMenuOpen}
          type="button"
          className="z-10 space-y-1 pt-1"
        >
          {/* <div
        className={
          openMenu
            ? "w-4 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 transition duration-300 ease-in-out"
            : "w-4 h-0.5 bg-gray-600 transition duration-300 ease-in-out"
        }
      />
      <div
        className={
          openMenu
            ? "opacity-0 transition duration-300 ease-in-out"
            : "w-4 h-0.5 bg-gray-600 transition duration-300 ease-in-out"
        }
      />
      <div
        className={
          openMenu
            ? "w-4 h-0.5 bg-gray-600 -rotate-45 transition duration-300 ease-in-out"
            : "w-4 h-0.5 bg-gray-600 transition duration-300 ease-in-out"
        }
      /> */}
          <div className="w-4 h-0.5 bg-gray-600 transition duration-300 ease-in-out" />
          <div className="w-4 h-0.5 bg-gray-600 transition duration-300 ease-in-out" />
          <div className="w-4 h-0.5 bg-gray-600 transition duration-300 ease-in-out" />
        </button>
        {/* nav */}

        <Link href="#">
          <Image src="/play.png" alt="a" width="20" height="20" />
        </Link>
      </nav>
      <nav
        className={
          openMenu
            ? "text-left fixed z-5 bg-slate-100 left-0 top-0 w-1/5 h-screen flex flex-col justify-start pt-8 pl-4 ease-linear duration-200"
            : "fixed left-[-100%] ease-linear duration-300 "
        }
      >
        <ul className="mt-6">//..</ul>
      </nav>
      {/* <div
    className={
      openMenu
        ? "text-left fixed z-0 bg-slate-600 opacity-15 right-0 top-0 w-full h-screen flex flex-col justify-start pt-8  ease-in duration-700"
        : "hidden "
    }
  ></div> */}
    </div>
  );
}
