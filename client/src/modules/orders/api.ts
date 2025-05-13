"use client"
import axios from "axios"
const API=axios.create({
  baseURL:"http://localhost:5000/api/v1/order",
  withCredentials:true
})

// @ For Order Place

export const orderPlaceAPI=async(data:any)=>{
  try {
    const response=await API.post("/create-order",data);
    return response?.data
  } catch (error) {
    console.log(error)
  }
}