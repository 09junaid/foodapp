import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { tableBookingApi } from './api';


// @ ======== For Table Booking =========
export const createBooking = createAsyncThunk(
  "bookings/createBooking",
  async (data: any, thunkAPI) => {
    try {
      // Assuming tableBookingApi is your API call function
      return await tableBookingApi(data);
    } catch (err: any) {
      // Logging the error to see the structure
      console.error("Booking Error:", err);

      // Return the full error object, not just message
      // If it's an HTTP error, you can use err.response?.data or err.message as appropriate
      const errorMessage = err?.response?.data?.message || err?.message || "Something went wrong";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);


// @ interface
interface BookingState{
  loading:boolean;
  success:boolean;
  error:string|null;
} 


const initialState:BookingState={
  loading:false,
  success:false,
  error:null
}

// @ Create Slice
const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBooking.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBooking.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null; // Reset error on successful booking
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.loading = false;
        state.success = false; // Reset success in case of failure
        state.error = action.payload as string; // Assign the error message to the state
      });
  },
});

export default bookingSlice.reducer;
