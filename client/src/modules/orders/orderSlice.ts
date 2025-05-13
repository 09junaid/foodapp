import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { orderPlaceAPI } from "./api";

// @ ======== For Order Placing =========
export const createOrder=createAsyncThunk(
  "orders/createOrder",
  async(data:any,thunkAPI)=>{
    try {
      return await orderPlaceAPI(data);
    } catch (err:any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
)

// @ interface
interface OrderState{
  loading:boolean
  success:boolean
  error:string|null
}
const initialState:OrderState={
  loading:false,
  success:false,
  error:null
}

// @ Create Slice
const orderSlice=createSlice({
  name:"order",
  initialState,
  reducers:{},

  // @ Extra Reducers
  extraReducers:(builder)=>{
    builder
    .addCase(createOrder.pending,(state)=>{
      state.loading=true;
    })
    .addCase(createOrder.fulfilled,(state)=>{
      state.loading=false;
      state.success=true;
    })
    .addCase(createOrder.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.payload as string;
    })
  }

})
export default orderSlice.reducer