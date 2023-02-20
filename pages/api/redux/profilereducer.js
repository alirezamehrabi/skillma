import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getItem } from "../../../src/core/services/storage/storage";

//          connectrequest

export const userprofile = createAsyncThunk("profile/userprofile", async (id) => {
    const token = getItem("token")

    try{
        const result = await axios.get(`${process.env.webURL}/User/GetUserDetailById?id=${id}`
    
    )
    return result.data
    }
    catch(error){
            console.log(error)
    }
});
export const teacherprofile = createAsyncThunk("profile/teacherprofile", async (id) => {
    const token = getItem("token")

    try{
        const result = await axios.get(`${process.env.webURL}/TeacherDetail/GetTeacherDetailById?id=${id}`
    
    )
    return result.data
    }
    catch(error){
            console.log(error)
    }
});

const initialState = {
  data: [],
  data1: [],
};

const usersSlice = createSlice({
  name: "profile",
  initialState,
  extraReducers: {
    [userprofile.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [teacherprofile.fulfilled]: (state, action) => {
        state.data1 = action.payload;
      },
  },
});
export default usersSlice.reducer;
