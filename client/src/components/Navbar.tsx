"use client";
import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Image from "next/image";
import logo from "/public/images/logo.svg";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { getUser, logout } from "@/modules/auth/authSlice";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const links = ["Home", "About", "Blog", "Contact", "Shop"];
  const [isOpen, setIsOpen] = useState(false);

  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  // ✅ Sync user from cookies on reload
  // useEffect(() => {
  //   dispatch(getUser() as any);
  // }, [dispatch]);

  // ✅ Logout handler
  const handleLogout = () => {
    dispatch(logout() as any);
    router.push("/login");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full font-[Arial]">
        <div className="bg-[#8EC63F] flex items-center justify-between w-full h-[18vh] px-4 sm:px-6 md:px-8 lg:px-10 xl:mx-auto xl:max-w-[70vw] xl:rounded-b-[20px]">
          {/* Logo + Hamburger */}
          <div className="flex items-center gap-4">
            <div className="xl:hidden text-white text-3xl cursor-pointer" onClick={() => setIsOpen(true)}>
              <HiMenuAlt3 />
            </div>

            <div className="hidden xl:flex">
              <Image src={logo} alt="logo" width={150} height={60} />
            </div>
          </div>

          {/* Mobile Login/Logout Button */}
          <div className="xl:hidden">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="text-[#8EC63F] cursor-pointer bg-white w-[87px] h-[45px] rounded-[20px]"
              >
                Logout
              </button>
            ) : (
              <Link href="/login">
                <button className="text-[#8EC63F] cursor-pointer  bg-white w-[87px] h-[45px] rounded-[20px]">
                  Login
                </button>
              </Link>
            )}
          </div>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-8 2xl:gap-16 font-bold text-white text-[18px] 2xl:text-[20px] cursor-pointer">
            {links.map((text, index) => (
              <Link key={index} href={"/"} className="relative py-12 group">
                <span className="relative z-10">{text}</span>
                <span
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[6px] bg-[#F8FD00] rounded-full transition-all duration-300 ${
                    index === 0 ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}

            {/* Desktop Login/Logout Button */}
            <div className="hidden xl:block">
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="text-[#8EC63F] cursor-pointer  bg-white w-[88px] h-[45px] cursor-pointer rounded-[20px]"
                >
                  Logout
                </button>
              ) : (
                <Link href="/login">
                  <button className="text-[#8EC63F] cursor-pointer  bg-white w-[87px] h-[45px] rounded-[20px]">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 w-full max-w-[75%] sm:max-w-[60%] h-full bg-[#8EC63F] z-50 p-6 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-10">
          <Image src={logo} alt="logo" width={100} height={40} />
          <HiX
            className="text-white text-3xl cursor-pointer hover:text-gray-200 transition-colors"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <div className="flex flex-col items-center gap-6 text-white font-bold text-[20px] sm:text-[20px]">
          {links.map((text, index) => (
            <Link
              key={index}
              href={"/"}
              onClick={() => setIsOpen(false)}
              className="hover:opacity-90 transition-opacity text-center w-full border-b-[2px] border-[#F8FD00]"
            >
              <span className="inline-block pb-1 w-fit transition-all duration-300">
                {text}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
