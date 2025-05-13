"use client";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/modules/auth/authSlice";
import  bookingReducer  from '@/modules/bookings/bookingSlice';
import orderReducer from "@/modules/orders/orderSlice";
export const store=configureStore({
  reducer:{
    auth:authReducer,
    booking:bookingReducer,
    order:orderReducer
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;