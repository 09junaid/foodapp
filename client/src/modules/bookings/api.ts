"use client"
import axios from "axios"
const API=axios.create({
   baseURL:"http://localhost:5000/api/v1/booking",
   withCredentials:true,
})

// @ For Table Booking
export const tableBookingApi=async(data:any)=>{
  try {
    const response=await API.post("/create-booking",data);
    return response?.data
  } catch (error) {
    console.log(error)
  }
}