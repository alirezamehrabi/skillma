import axios from "axios";
import { setItem,getItem } from "../../src/core/services/storage/storage";

const updatecourse = async (id) => {
    try {
      const token = getItem("token")
      const result = await axios.put(
        `${process.env.webURL}/Course/UpdateCourse`,{},
        { headers: { Authorization: 'bearer '+  token} }
      );
      
      const status = result.status;
      
    } catch (error) {
      return error;
    }
  };
  const updateonlinecourse = async (id) => {
    try {
      const token = getItem("token")
      const result = await axios.put(
        `${process.env.webURL}/OnlineCourse/UpdateOnlineCourse`,{},
        { headers: { Authorization: 'bearer '+  token} }
      );
      
      const status = result.status;
      
    } catch (error) {
      return error;
    }
  };
  export { updatecourse,updateonlinecourse };