import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { getItem } from "../../../src/core/services/storage/storage";

export const getLike = createAsyncThunk('like/count', async(id)=>{
  // console.log(id,"id")
  try {
    const token = getItem("token")
    const result = await axios.put(
      `${process.env.webURL}/Comment/AddDissLike?id=${id}`,{},
      { headers: { Authorization: 'bearer '+  token} }
    )
    const data = result.data
    return data
  } catch (error) {
    return error;
  }
})
export const getLikeFallBack = createAsyncThunk('like/likecount', async(value)=>{
  // console.log(value,"idddddddddvall")
  try {
    const token = getItem("token")
    const result = await axios.get(
      `${process.env.webURL}/Comment/GetTeacherComment?CourseId=${value.id}&page=${value.p}&pagesize=5`,
      { headers: { Authorization: 'bearer '+  token} }
    )
    const data = result.data.data.pageData
    // console.log(data)
    return data
  } catch (error) {
    return error;
  }
})
export const getLikeFallBackOnline = createAsyncThunk('like/likeonlinecount', async(value)=>{
  console.log(value,"idddddddddvall")
  try {
    const token = getItem("token")
    const result = await axios.get(
      `${process.env.webURL}/Comment/GetOnlineCourseComment?CourseId=${value.id}&page=${value.p}&pagesize=5`,
      { headers: { Authorization: 'bearer '+  token} }
    )
    const data = result.data.data.pageData
    return data
  } catch (error) {
    return error;
  }
})
const initialState= {
    data: [],
    data1: [],
    data2: []
  }

const usersSlice = createSlice({
    name: 'like',
    initialState,
    extraReducers:{
        [getLike.fulfilled] : (state,action)=>{
            state.data=action.payload
        } ,
        [getLikeFallBack.fulfilled] : (state,action)=>{
          state.data1=action.payload;
         
      },
      [getLikeFallBackOnline.fulfilled] : (state,action)=>{
        state.data2=action.payload;
    }
    }
  }
  )
export default usersSlice.reducer