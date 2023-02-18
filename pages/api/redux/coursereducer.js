import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getItem } from "../../../src/core/services/storage/storage";

//          coursedel

export const coursedel = createAsyncThunk("course/coursedel", async (id) => {
    try {
        const token = getItem("token")
        const result = await axios.put(
          `${process.env.webURL}/Course/DeleteCourseDashboard?id=${id}`,{},
          {}
        ).then((r)=>{
            return r.isSucces
        })
        
        
        
      } catch (error) {
        return error;
      }
});
//          courselist

export const courselist = createAsyncThunk("course/courselist", async (value) => {
  try {
    const result = await fetch(
      `${process.env.webURL}/Course/GetCoursesDashboard?page=${value.p}&pagesize=5&CategoryId=${value.catId}&key=${value.si}`
    );
    const json = await result.json();
    return json.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  data: [],
  data1: [],
  data2: [],
};

const usersSlice = createSlice({
  name: "course",
  initialState,
  extraReducers: {
    [coursedel.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [courselist.fulfilled]: (state, action) => {
      state.data1 = action.payload;
    },
  },
});
export default usersSlice.reducer;
