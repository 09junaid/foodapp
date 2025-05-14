"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { createOrder } from "@/modules/orders/orderSlice";
import { useSnackbar } from "notistack";

interface OrderPayload {
  user_id: number;
  customer_name: string;
  phone_number: string;
  food_items: string;
  quantity: number;
  address: string;
  additional_note?: string;
  order_date: string;
  message: string;
}

const inputFields = [
  { label: "Name:", name: "customer_name", type: "text", placeholder: "Enter your name" },
  { label: "Phone:", name: "phone_number", type: "tel", placeholder: "Enter your phone" },
  { label: "Order:", name: "food_items", type: "text", placeholder: "Enter your Food name" },
  { label: "Additional Food:", name: "additional_note", type: "text", placeholder: "Extra with food" },
  { label: "How Much:", name: "quantity", type: "number", placeholder: "Many orders" },
  { label: "Date and Time:", name: "order_date", type: "datetime-local" },
  { label: "Your Address:", name: "address", type: "textarea", placeholder: "Enter your address" },
  { label: "Your Message:", name: "message", type: "textarea", placeholder: "Write your message" },
];

export default function OrderNowSection() {
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const { loading } = useAppSelector((state) => state.order);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<OrderPayload>();

  const onSubmit: SubmitHandler<OrderPayload> = async (data) => {
    try {
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

      const result = await dispatch(createOrder(data));

      if (createOrder.fulfilled.match(result)) {
        enqueueSnackbar("Order successfully placed!", {
          variant: "success",
          autoHideDuration: 2000,
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
        reset();
      }

      if (createOrder.rejected.match(result)) {
        enqueueSnackbar("Failed to place order. Please try again.", {
          variant: "error",
          autoHideDuration: 2000,
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      }
    } catch (err) {
      console.error(err);
      enqueueSnackbar("Failed to create order!", {
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
    <section className="py-12 px-6 bg-[#F8F7F2]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center flex-col justify-center gap-4 mb-12">
          <p className="sm:text-[18px] text-[#8EC63F] font-medium">Free and Fast</p>
          <h1 className="text-5xl sm:text-[64px] font-bold mt-2 mb-4">Order Now</h1>
          <p className="sm:text-[16px] text-center text-gray-600">
            Inspired by recipes and creations of the world’s best chefs
          </p>
        </div>

        <form
  onSubmit={handleSubmit(onSubmit)}
  className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-8 bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-xl w-full lg:w-[981px] lg:h-auto"
>
  {inputFields.map((item, index) => (
    <div key={index} className="flex flex-col w-full">
      <label className="mb-2 font-semibold text-[18px] sm:text-[20px] text-gray-700">
        {item.label}
      </label>

      {item.type === "textarea" ? (
        <textarea
          {...register(item.name as keyof OrderPayload, {
            required: `${item.label.replace(":", "")} is required`,
          })}
          placeholder={item.placeholder}
          className="p-4 shadow-md bg-[#F8F7F2] rounded-lg resize-none text-[12px] w-full h-[120px] sm:h-[149px] lg:w-[413px]"
          rows={6}
        />
      ) : (
        <input
          type={item.type}
          {...register(item.name as keyof OrderPayload, {
            required: `${item.label.replace(":", "")} is required`,
            ...(item.name === "quantity" && {
              valueAsNumber: true,
              min: {
                value: 1,
                message: "Quantity must be at least 1",
              },
            }),
          })}
          placeholder={item.placeholder}
          className="p-4 shadow-md bg-[#F8F7F2] rounded-lg text-[12px] w-full h-[50px] lg:w-[413px] lg:h-[50px]"
        />
      )}

      {errors[item.name as keyof OrderPayload] && (
        <span className="text-red-500 text-sm mt-1">
          {(errors[item.name as keyof OrderPayload] as any).message || "This field is required"}
        </span>
      )}
    </div>
  ))}

  <div className="md:col-span-2 text-center mt-6">
    <button
      type="submit"
      className="bg-[#8EC63F] hover:bg-[#8EC63F]/80 text-white h-[38px] w-[100px] sm:w-[150px] sm:h-[50px] px-2 sm:px-2 py-3 rounded-full text-[10.63px] sm:text-[16px] cursor-pointer font-semibold transition"
      disabled={loading}
    >
      {loading ? "PLACING ORDER..." : "ORDER NOW"}
    </button>
  </div>
</form>

      </div>
    </section>
  );
}
