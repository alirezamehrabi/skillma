import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { getItem } from "../../../src/core/services/storage/storage";

export const getLike = createAsyncThunk('like/count', async()=>{
    try {
        const token = getItem("token")
        const result = await axios.put(
          `https://skillma-api.shinypi.net/Comment/AddLike?id=1`,{},
          { headers: { Authorization: 'bearer '+  token} }
        );
        
        const status = result.status;
        return status
      } catch (error) {
        return error;
      }
})


const initialState= {
    likeCount : 0
  }


const usersSlice = createSlice({
    name: 'like',
    initialState,
    extraReducers:{
        [getLike.fulfilled] : (state,action)=>{
            console.log(action.payload,"fullfild");
            state.likeCount=action.payload
        }
    }
  })
export default usersSlice.reducer
