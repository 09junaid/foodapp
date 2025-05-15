"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { login } from "@/modules/auth/authSlice";
import { useRouter } from "next/navigation";
import blurleaf from "/public/images/blureleaf.svg";
import logo from "/public/images/logo.svg";
import Link from "next/link";
import { useSnackbar } from "notistack";

type InputDataType = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<InputDataType>();

  const onSubmit: SubmitHandler<InputDataType> = async (data) => {
    try {
      const result = await dispatch(login(data)); // dispatch login thunk

      if (login.fulfilled.match(result)) {
        enqueueSnackbar("Login successful!", {
          variant: "success",
          autoHideDuration: 2000,
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
        reset();
        router.push("/login");
      }

      if (login.rejected.match(result)) {
        enqueueSnackbar(JSON.stringify(result.payload) || "Login failed!", {
          variant: "error",
          autoHideDuration: 2000,
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      className="w-full min-h-screen bg-[#f8f7f2] relative px-4 py-10"
      style={{
        backgroundImage: `url(${blurleaf.src})`,
        backgroundSize: "200px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left bottom",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Logo */}
      <div className="absolute top-6 left-0 rounded-r-full bg-[#8EC63F] h-16 sm:h-20 md:h-28 lg:h-32 w-[180px] sm:w-[240px] md:w-[320px] lg:w-[484px] flex items-center justify-end px-4 shadow-md">
        <Image
          src={logo}
          alt="logo"
          className="mr-6 sm:mr-8 md:mr-10 w-24 sm:w-28 md:w-32"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-evenly items-center gap-10 lg:gap-16 mt-32 lg:mt-48 px-2">
        {/* Text Section */}
        <div className="text-left lg:text-left max-w-md px-4">
          <h1 className="font-bold text-[#001e42] mb-4 text-3xl sm:text-4xl md:text-5xl">
            Sign In to My <span className="text-[#8EC63F]">Application</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            If you don’t have an account, you can{" "}
            <Link
              href="/signup"
              className="text-[#8EC63F] font-medium cursor-pointer underline"
            >
              Register here
            </Link>
            .
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-xl min-h-[500px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#8EC63F] text-center mb-2">
            Sign In
          </h2>
          <p className="text-gray-600 mb-6 text-center text-sm sm:text-base">
            Access your account by entering your email and password. Enjoy
            personalized features and secure access to our services.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-6"
          >
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-lg sm:text-xl font-medium mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-[#f8f7f2] shadow-md rounded focus:outline-none focus:ring-2 focus:ring-[#8EC63F]"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-gray-700 text-lg sm:text-xl font-medium mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                placeholder="Enter your password"
                className="w-full px-4 py-3 bg-[#f8f7f2] shadow-md rounded focus:outline-none focus:ring-2 focus:ring-[#8EC63F] pr-12"
              />

              {/* Eye Icon for Toggle */}
              <div
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute top-[52px] right-4 cursor-pointer text-gray-600 text-xl"
              >
                {showPassword ? (
                  <FaRegEyeSlash className="text-[#8EC63F]" />
                ) : (
                  <FaRegEye className="text-[#8EC63F]" />
                )}
              </div>

              {/* Error */}
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#8EC63F] mt-6 text-white py-3 cursor-pointer  rounded font-semibold hover:bg-[#6e9b2f] transition duration-300
          disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

//  <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         {errors.root && (
//           <div className="p-2 bg-red-100 text-red-700 rounded">
//             {errors.root.message}
//           </div>
//         )}

//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//             Email
//           </label>
//           <input
//             id="email"
//             type="email"
//             placeholder="Enter your email"
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                 message: "Invalid email address"
//               }
//             })}
//           />
//           {errors.email && (
//             <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
//           )}
//         </div>

//         <div>
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//             Password
//           </label>
//           <input
//             id="password"
//             type="password"
//             placeholder="Enter your password"
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             {...register("password", {
//               required: "Password is required",
//               minLength: {
//                 value: 6,
//                 message: "Password must be at least 6 characters"
//               }
//             })}
//           />
//           {errors.password && (
//             <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
//           )}
//         </div>
//         {error && <p className="text-red-600 text-sm">{error}</p>}

//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//       </form>
