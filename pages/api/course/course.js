import axios from "axios";
import { setItem,getItem } from "../../../src/core/services/storage/storage";
import { toast } from "react-toastify";


const DeleteCourse = async (id) => {
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
};
const DeleteShort = async (id) => {
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
};
const DeleteTask = async (id) => {
  try {
    const token = getItem("token")
    const result = await axios.delete(
      `${process.env.webURL}/Task/DeleteTask?id=${id}`,{},
      {}
    ).then((r)=>{
        return r.isSucces
    })
  } catch (error) {
    return error;
  }
};

export { DeleteCourse,DeleteTask,DeleteShort };
