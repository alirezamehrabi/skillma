import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { getItem } from "../../../src/core/services/storage/storage";

export const getLike = createAsyncThunk('like/count', async(id)=>{
  try {
    const token = getItem("token")
    const result = await axios.put(
      `${process.env.webURL}/Comment/AddDissLike?id=${id}`,{},
      { headers: { Authorization: 'bearer '+  token} }
    )
    const data = result.status
    
  } catch (error) {
    return error;
  }
})
export const getLikeFallBack = createAsyncThunk('like/likecount', async(id)=>{
  console.log(id)
  try {
    const token = getItem("token")
    const result = await axios.get(
      `${process.env.webURL}/Comment/GetCourseComment?CourseId=${id}`,
      { headers: { Authorization: 'bearer '+  token} }
    )
    const data = result.data.data.pageData
    console.log(data)
    return data
  } catch (error) {
    return error;
  }
})
const initialState= {
    data: [],
    data1: []
  }

const usersSlice = createSlice({
    name: 'like',
    initialState,
    extraReducers:{
        [getLike.fulfilled] : (state,action)=>{
            // console.log(action.payload,"fullfild");
            state.data=action.payload
        } ,
        [getLikeFallBack.fulfilled] : (state,action)=>{
          state.data1=action.payload
      }
    }
  }
  )
export default usersSlice.reducer