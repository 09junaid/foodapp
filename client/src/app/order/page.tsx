"use client"
import React,{useState,ReactNode} from 'react'
import { orderApi } from '@/utils/axios';
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
export default function page() {
  const [formData, setFormData] = useState<OrderPayload>({
    user_id: 1,
    customer_name: "",
    phone_number: "",
    food_items: "",
    quantity: 1,
    address: "",
    additional_note: "",
    order_date: "",
    message: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === "quantity" || name === "user_id" ? Number(value) : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await orderApi.post("/create-order", formData);
      console.log("Order created:", res.data);
      alert("Order created successfully!");
    } catch (error) {
      console.error("Error creating order:", error);
      alert("Error creating order");
    }
  };

  return (
        <form onSubmit={handleSubmit}>
      <input name="customer_name" placeholder="Your Name" onChange={handleChange} />
      <input name="phone_number" placeholder="Your Number" onChange={handleChange} />
      <input name="food_items" placeholder="Your Order" onChange={handleChange} />
      <input name="quantity" type="number" placeholder="How Much" onChange={handleChange} />
      <input name="address" placeholder="Your Address" onChange={handleChange} />
      <input name="additional_note" placeholder="Additional Food" onChange={handleChange} />
      <input name="order_date" type="date" onChange={handleChange} />
      <textarea name="message" placeholder="Your Message" onChange={handleChange} />
      <button type="submit">Place Order</button>
    </form>
    )
}
