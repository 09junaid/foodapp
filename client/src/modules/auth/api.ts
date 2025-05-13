"use client"
import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:5000/api/v1/auth",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

// @ For Sign-Up
export const signUpApi=async(data:any)=>{
  try {
    const response=await API.post("/signup",data);
    return response?.data
    
  } catch (error) {
    throw error;
  }
}

// @ For Login
export const loginApi=async(data:any)=>{
  try {
    const response=await API.post("/login",data);
    if(response.status===200){
      return response?.data
    }else{
      return false
    }
  } catch (error) {
    throw error;
  }
}
export const logoutApi = async () => {
  try {
    const response = await API.post("/logout");
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const getUserApi = async () => {
  try {
    const response = await API.get("/me");
    return response?.data;
  } catch (error) {
    throw error;
  }
};