import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getItem } from "../../../src/core/services/storage/storage";

//          conreq

export const conreq = createAsyncThunk(
  "connection/conreq",
  async () => {
    const token = getItem("token");

    try {
      const result = await axios.get(
        `${process.env.webURL}/Connect/GetConnectionRequests`,
        { headers: { Authorization: "bearer " + token } }
      );
      return result.data
    } catch (error) {
      console.log(error);
    }
  }
);

//          conlist

export const conlist = createAsyncThunk(
    "connection/conlist",
    async () => {
      const token = getItem("token");
  
      try {
        const result = await axios.get(
          `${process.env.webURL}/Connect/GetAcceptedConnections`,
          { headers: { Authorization: "bearer " + token } }
        );
        return result.data
      } catch (error) {
        console.log(error);
      }
    }
  );

  //          conaccept

export const conaccept = createAsyncThunk(
    "connection/conaccept",
    async (id) => {
      const token = getItem("token");
  
      try {
        const result = await axios.put(
          `${process.env.webURL}/Connect/AcceptConnection?follower=${id}`,{},
          { headers: { Authorization: "bearer " + token } }
        );
        return result.data
      } catch (error) {
        console.log(error);
      }
    }
  );
const initialState = {
  data: [],
  data1: [],
  data2: [],
};

const usersSlice = createSlice({
  name: "connection",
  initialState,
  extraReducers: {
    [conreq.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [conlist.fulfilled]: (state, action) => {
        state.data1 = action.payload;
      },
      [conaccept.fulfilled]: (state, action) => {
        state.data2 = action.payload;
      },
  },
});
export default usersSlice.reducer;
