import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getItem } from "../../../src/core/services/storage/storage";

//          connectrequest

export const connectrequest = createAsyncThunk(
  "connect/connectrequest",
  async (id) => {
    const token = getItem("token");

    try {
      const result = await axios.post(
        `${process.env.webURL}/Connect/RequestConnect?followingId=${id}`,
        {},
        { headers: { Authorization: "bearer " + token } }
      );
      return result.data, result.status;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  data: [],
};

const usersSlice = createSlice({
  name: "connect",
  initialState,
  extraReducers: {
    [connectrequest.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  },
});
export default usersSlice.reducer;
