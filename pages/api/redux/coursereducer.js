import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getItem } from "../../../src/core/services/storage/storage";

//          coursedel

export const coursedel = createAsyncThunk("course/coursedel", async (id) => {
    try {
        const token = getItem("token")
        const result = await axios.put(
          `${process.env.webURL}/Course/DeleteCourseDashboard?id=${id}`,{},
          { headers: { Authorization: 'bearer '+  token}}
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
    const token = getItem("token")
    const result = await fetch(
      `${process.env.webURL}/Course/GetCoursesDashboard?page=${value.p}&pagesize=5&CategoryId=${value.catId}&key=${value.si}&PriceType=${value.pr}&status=${value.st}&date=${value.val}`,
      { headers: { Authorization: 'bearer '+  token}}
    );
    const json = await result.json();
    return json.data;
  } catch (error) {
    console.log(error);
  }
});

//          shortcoursedel

export const shortcoursedel = createAsyncThunk("course/shortcoursedel", async (id) => {
  try {
      const token = getItem("token")
      const result = await axios.delete(
        `${process.env.webURL}/ShortContent/DeleteShortContent?ContentId=${id}`,{},
        { headers: { Authorization: 'bearer '+  token}}
      ).then((r)=>{
          return r.isSucces
      })
    } catch (error) {
      return error;
    }
});
//          shortcourse

export const shortcourse = createAsyncThunk("course/shortcourse", async (value) => {
try {
  const token = getItem("token")
  const result = await fetch(
    `${process.env.webURL}/ShortContent/GetDashboardShortContentTeacher?page=${value.p}&pagesize=5&CategoryId=${value.catId}&key=${value.si}&contentType=${value.pr}&status=${value.st}&date=${value.val}`,
    { headers: { Authorization: 'bearer '+  token}}
  );
  const json = await result.json();
  return json.data;
} catch (error) {
  console.log(error);
}
});

//          taskdel

export const taskdel = createAsyncThunk("course/taskdel", async (id) => {
  try {
      const token = getItem("token")
      const result = await axios.delete(
        `${process.env.webURL}/Task/DeleteTask?id=${id}`,{},
        { headers: { Authorization: 'bearer '+  token}}
      ).then((r)=>{
          return r.isSucces
      })
    } catch (error) {
      return error;
    }
});
//          tasklist

export const tasklist = createAsyncThunk("course/tasklist", async (value) => {
try {
  const token = getItem("token")
  const result = await fetch(
    `${process.env.webURL}/Task/GetAllTasks?page=${value.p}&pagesize=5&Type=${value.st}&Key=${value.si}&CourseId=${value.catId}&date=${value.val}`,
    { headers: { Authorization: 'bearer '+  token}}
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
  data3: [],
  data4: [],
  data5: [],
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
    [shortcoursedel.fulfilled]: (state, action) => {
      state.data2 = action.payload;
    },
    [shortcourse.fulfilled]: (state, action) => {
      state.data3 = action.payload;
    },
    [taskdel.fulfilled]: (state, action) => {
      state.data4 = action.payload;
    },
    [tasklist.fulfilled]: (state, action) => {
      state.data5 = action.payload;
    },
  },
});
export default usersSlice.reducer;
