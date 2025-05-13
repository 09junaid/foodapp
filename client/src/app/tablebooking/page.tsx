// "use client";
// import React from 'react';
// import { useForm, SubmitHandler } from "react-hook-form";
// import { useAppDispatch, useAppSelector } from '@/store/hooks';
// import { createBooking } from '@/modules/bookings/bookingSlice';

// type BookingData = {
//   booking_date: string;
//   booking_time: string;
//   seating_capacity: number;
//   user_id: number;
// };

// export default function BookingPage() {
//   const dispatch = useAppDispatch();
//   const { loading, success, error } = useAppSelector(state => state.booking);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<BookingData>();

//   const onSubmit: SubmitHandler<BookingData> = async (data) => {
//    try {
//     const result=await dispatch(createBooking(data));
//     if(createBooking.fulfilled.match(result)){
//       alert("Booking successful!");
//       reset();
//     }
//     if(createBooking.rejected.match(result)){
//       alert( "Booking failed!");
//     }
//    } catch (error) {
//     console.log(error);
    
//    }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto p-4">
//       <div>
//         <label className="block">Date:</label>
//         <input
//           type="date"
//           {...register("booking_date", { required: "Booking date is required" })}
//           className="border p-2 w-full"
//         />
//         {errors.booking_date && <p className="text-red-500 text-sm">{errors.booking_date.message}</p>}
//       </div>

//       <div>
//         <label className="block">Time:</label>
//         <input
//           type="time"
//           {...register("booking_time", { required: "Booking time is required" })}
//           className="border p-2 w-full"
//         />
//         {errors.booking_time && <p className="text-red-500 text-sm">{errors.booking_time.message}</p>}
//       </div>

//       <div>
//         <label className="block">People:</label>
//         <input
//           type="number"
//           min="1"
//           max="20"
//           {...register("seating_capacity", {
//             required: "Seating capacity is required",
//             min: { value: 1, message: "Minimum 1 person required" },
//             max: { value: 20, message: "Maximum 20 people allowed" }
//           })}
//           className="border p-2 w-full"
//         />
//         {errors.seating_capacity && <p className="text-red-500 text-sm">{errors.seating_capacity.message}</p>}
//       </div>
//           {error && <p className="text-red-500 text-sm">{error}</p>}
//       <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//         {loading ? "Booking..." : "Book Table"}
//       </button>
//     </form>
//   );
// }
