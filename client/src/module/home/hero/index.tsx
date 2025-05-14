"use client";
import React,{useEffect} from "react";
import Image from "next/image";
import hero from "/public/images/hero.svg";
import group from "/public/images/group.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { createBooking } from "@/modules/bookings/bookingSlice";
import { getUser } from "@/modules/auth/authSlice";
import { useSnackbar } from "notistack";

type BookingData = {
  booking_date: string;
  booking_time: string;
  seating_capacity: number;
  user_id: number;
};

export default function HeroSection() {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const { enqueueSnackbar } = useSnackbar();

  const { loading } = useAppSelector((state) => state.booking);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingData>();

 const onSubmit: SubmitHandler<BookingData> = async (data) => {
  try {
    // Step 1: Check if the user is authenticated
    if (!isAuthenticated) {
      enqueueSnackbar("Please login first", {
        variant: "error",
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
      return;
    }

    // Step 2: Dispatch the booking action and await result
    await dispatch(createBooking(data)).unwrap();

    // Step 3: If booking is successful
    enqueueSnackbar("Booking successful!", {
      variant: "success",
      autoHideDuration: 2000,
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });

    // Reset form after success
    reset();

  } catch (error: any) {
    // Step 4: Catch specific errors and handle 401 error
    console.error("Booking Error:", error);

    // Check if the error is 401 or some other type
    const message = error?.message || error?.response?.data?.message || "Something went wrong!";

    // Show the error message as snackbar
    enqueueSnackbar(message, {
      variant: "error",
      autoHideDuration: 2000,
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  }
};


  return (
    <section
      className="relative sm:w-full min-h-screen flex items-center justify-center font-[Arial] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${hero.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Content Container */}
      <div className="relative z-10 container mt-20 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-14 py-20 sm:py-32">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 mt-3 text-start sm:text-center  lg:text-left space-y-6 md:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[96px] font-bold text-white leading-tight">
            <span className="text-[#8EC63F] border-b-4 border-[#8EC63F] pb-1 inline-block">
              Go
            </span>{" "}
            Green
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-md mx-auto lg:mx-0">
            Fresh, organic ingredients. Carefully prepared. Eat green for a
            reason.
          </p>
          <div className="flex flex-row sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-[#8EC63F] hover:bg-[#7CB532] text-white font-bold py-3 px-6 rounded-full transition duration-300 text-[12px] sm:text-base">
              GET STARTED
            </button>
            <button className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-6 rounded-full transition duration-300 text-sm sm:text-base">
              OUR MENU
            </button>
          </div>
        </div>

        {/* Right Side - Booking Form */}
        <div className="w-full max-w-md sm:max-w-[260px] lg:max-w-xs xl:max-w-[260px] sm:px-0 mt-8 lg:mt-0">
  <div className="bg-[#0000001A]/40 backdrop-blur-lg p-5 sm:p-6 rounded-[7.4px] sm:rounded-2xl border border-[#8EC63F]">
    <div className="flex flex-col lg:py-2 justify-center gap-4 sm:gap-6">
      {/* Header Section */}
      <div className="flex justify-center items-center gap-4">
        <Image
          src={group}
          alt="group"
          width={56}
          height={56}
          className="w-9 h-9 sm:w-[50px] sm:h-[50px]"
        />
        <div>
          <p className="text-white text-xs sm:text-sm font-bold">
            Book a Table
          </p>
          <p className="text-[#797979] text-[10px] sm:text-[12px]">
            Powered by opentable
          </p>
        </div>
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 sm:gap-4 w-full"
      >
        {/* Booking Date */}
        <div className="flex flex-col gap-1">
          <input
            type="date"
            {...register("booking_date", {
              required: "Booking date is required",
            })}
            aria-invalid={errors.booking_date ? "true" : "false"}
            className={`w-full h-8 sm:h-[37px] bg-white/10 text-white text-sm px-4 rounded-full border ${
              errors.booking_date ? "border-red-500" : "border-white/30"
            } focus:outline-none focus:ring-2 focus:ring-[#8EC63F] placeholder:text-white/70`}
          />
          {errors.booking_date && (
            <span className="text-sm text-red-500">
              {errors.booking_date.message}
            </span>
          )}
        </div>

        {/* Booking Time */}
        <div className="flex flex-col gap-1">
          <input
            type="time"
            {...register("booking_time", {
              required: "Booking time is required",
            })}
            aria-invalid={errors.booking_time ? "true" : "false"}
            className={`w-full h-8 sm:h-[37px] bg-white/10 text-white text-sm px-4 rounded-full border ${
              errors.booking_time ? "border-red-500" : "border-white/30"
            } focus:outline-none focus:ring-2 focus:ring-[#8EC63F] placeholder:text-white/70`}
          />
          {errors.booking_time && (
            <span className="text-sm text-red-500">
              {errors.booking_time.message}
            </span>
          )}
        </div>

        {/* Seating Capacity */}
        <div className="flex flex-col gap-1">
          <input
            type="number"
            min="1"
            max="20"
            {...register("seating_capacity", {
              required: "Seating capacity is required",
              min: { value: 1, message: "Minimum 1 person required" },
              max: { value: 20, message: "Maximum 20 people allowed" },
            })}
            aria-invalid={errors.seating_capacity ? "true" : "false"}
            placeholder="How many people?"
            className={`w-full h-8 sm:h-[37px] bg-white/10 text-white text-sm px-4 rounded-full border ${
              errors.seating_capacity
                ? "border-red-500"
                : "border-white/30"
            } focus:outline-none focus:ring-2 focus:ring-[#8EC63F] placeholder:text-white/70`}
          />
          {errors.seating_capacity && (
            <span className="text-sm text-red-500">
              {errors.seating_capacity.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full h-8 sm:h-[37px] cursor-pointer text-white text-sm bg-[#8EC63F] hover:bg-[#7CB532] rounded-full font-bold transition duration-300"
        >
          {loading ? "Booking..." : "Find a Table"}
        </button>
      </form>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}
