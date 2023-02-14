import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getItem } from "../../../src/core/services/storage/storage";

//          dislike

export const getLike = createAsyncThunk("like/count", async (id) => {
  try {
    const token = getItem("token");
    const result = await axios.put(
      `${process.env.webURL}/Comment/AddDissLike?id=${id}`,
      {},
      { headers: { Authorization: "bearer " + token } }
    );
    const data = result.data;
    return [data,result.status]
  } catch (error) {
    return error;
  }
});

//        like

export const addLike = createAsyncThunk("like/countlike", async (id) => {
  try {
    const token = getItem("token");
    const result = await axios.put(
      `${process.env.webURL}/Comment/AddLike?id=${id}`,
      {},
      { headers: { Authorization: "bearer " + token } }
    );
    
    const data = result.data;
    return data;
  } catch (error) {
    return error;
  }
});

//        decreaselike

export const decreaselike = createAsyncThunk(
  "like/decreaselike",
  async (id) => {
    try {
      const token = getItem("token");
      const result = await axios.put(
        `${process.env.webURL}/Comment/DecreaseLike?id=${id}`,
        {},
        { headers: { Authorization: "bearer " + token } }
      );
      const data = result.data;
      return data;
    } catch (error) {
      return error;
    }
  }
);

//        decreasedislike

export const decreasedislike = createAsyncThunk(
  "like/decreasedislike",
  async (id) => {
    try {
      const token = getItem("token");
      const result = await axios.put(
        `${process.env.webURL}/Comment/DecreaseDissLike?id=${id}`,
        {},
        { headers: { Authorization: "bearer " + token } }
      );
      const data = result.data;
      return data;
    } catch (error) {
      return error;
    }
  }
);

//                      GetTeacherComment

export const getLikeFallBack = createAsyncThunk(
  "like/likecount",
  async (value) => {
    // console.log(value,"idddddddddvall")
    try {
      const token = getItem("token");
      const result = await axios.get(
        `${process.env.webURL}/Comment/GetTeacherComment?CourseId=${value.id}&page=${value.p}&pagesize=5`,
        { headers: { Authorization: "bearer " + token } }
      );
      const data = result.data.data.pageData;
      // console.log(data)
      return data;
    } catch (error) {
      return error;
    }
  }
);

//                      GetOnlineCourseComment

export const getLikeFallBackOnline = createAsyncThunk(
  "like/likeonlinecount",
  async (value) => {
    try {
      const token = getItem("token");
      const result = await axios.get(
        `${process.env.webURL}/Comment/GetOnlineCourseComment?CourseId=${value.id}&page=${value.p}&pagesize=5`,
        { headers: { Authorization: "bearer " + token } }
      );
      const data = result.data.data.pageData;
      return data;
    } catch (error) {
      return error;
    }
  }
);

//                      GetCourseComment

export const getLikeFallBackCourse = createAsyncThunk(
  "like/likeoursecount",
  async (value) => {
    try {
      const token = getItem("token");
      const result = await axios.get(
        `${process.env.webURL}/Comment/GetCourseComment?CourseId=${value.id}&page=${value.p}&pagesize=5`,
        { headers: { Authorization: "bearer " + token } }
      );
      const data = result.data.data.pageData;
      return data;
    } catch (error) {
      return error;
    }
  }
);

//                      GetShortVideoComment

export const getLikeFallBackVid = createAsyncThunk(
  "like/likeoursevid",
  async (value) => {
    try {
      const token = getItem("token");
      const result = await axios.get(
        `${process.env.webURL}/Comment/GetShortVideoComment?CourseId=${value.id}&page=${value.p}&pagesize=5`,
        { headers: { Authorization: "bearer " + token } }
      );
      const data = result.data.data.pageData;
      console.log(data, "cdta");
      return data;
    } catch (error) {
      return error;
    }
  }
);

//                      GetTextComment

export const getLikeFallBacktxt = createAsyncThunk(
  "like/likeoursetxt",
  async (value) => {
    try {
      const token = getItem("token");
      const result = await axios.get(
        `${process.env.webURL}/Comment/GetTextComment?CourseId=${value.id}&page=${value.p}&pagesize=5`,
        { headers: { Authorization: "bearer " + token } }
      );
      const data = result.data.data.pageData;
      return data;
    } catch (error) {
      return error;
    }
  }
);

//                      GetSoundComment

export const getLikeFallBackSound = createAsyncThunk(
  "like/likeoursesound",
  async (value) => {
    try {
      const token = getItem("token");
      const result = await axios.get(
        `${process.env.webURL}/Comment/GetSoundComment?CourseId=${value.id}&page=${value.p}&pagesize=5`,
        { headers: { Authorization: "bearer " + token } }
      );
      const data = result.data.data.pageData;
      return data;
    } catch (error) {
      return error;
    }
  }
);

//          InsetComment

export const InsetComment = createAsyncThunk("like/InsetComment", async (obj) => {
  console.log(obj,"obj")
  try {
    const token = getItem("token")
    const result = await axios.post(
      `${process.env.webURL}/Comment/InsertComment`,
      obj,
      { headers: { Authorization: 'bearer '+  token} }
    );
    
    const status = result.status;
    if(status === 200){
            return (result.data
                )
        }
  } catch (error) {
    return error;
  }});

const initialState = {
  data: [],
  data1: [],
  data2: [],
  data3: [],
  data4: [],
  data5: [],
  data6: [],
  data7: [],
  data8: [],
  data9: [],
  data10: []
};

const usersSlice = createSlice({
  name: "like",
  initialState,
  extraReducers: {
    [getLike.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [getLikeFallBack.fulfilled]: (state, action) => {
      state.data1 = action.payload;
    },
    [getLikeFallBackOnline.fulfilled]: (state, action) => {
      state.data2 = action.payload;
    },
    [getLikeFallBackCourse.fulfilled]: (state, action) => {
      state.data3 = action.payload;
    },
    [getLikeFallBackVid.fulfilled]: (state, action) => {
      state.data4 = action.payload;
    },
    [getLikeFallBacktxt.fulfilled]: (state, action) => {
      state.data5 = action.payload;
    },
    [getLikeFallBackSound.fulfilled]: (state, action) => {
      state.data6 = action.payload;
    },
    [addLike.fulfilled]: (state, action) => {
      state.data7 = action.payload;
    },
    [decreaselike.fulfilled]: (state, action) => {
      state.data8 = action.payload;
    },
    [decreasedislike.fulfilled]: (state, action) => {
      state.data9 = action.payload;
    },
    [InsetComment.fulfilled]: (state, action) => {
      state.data10 = action.payload;
    }
  },
});
export default usersSlice.reducer;
