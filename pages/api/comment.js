import axios from "axios";
import { setItem,getItem } from "../../src/core/services/storage/storage";
import { toast } from "react-toastify";

const comment = async (obj) => {
  try {
    const token = getItem("token")
    const result = await axios.post(
      `${process.env.webURL}/Comment/InsertComment`,
      obj,
      { headers: { Authorization: 'bearer '+  token} }
    );
    
    const status = result.status;
    if(status === 200){
        
                toast.success('Your Comment Sent Successfully!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    })
            return (result.data
                )
                
        }
        else{
            return (result.data,
                toast.error('SomeThing wrong Happened. Please Try again!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    })
                )
    }
  } catch (error) {
    return error;
  }
};
const AddDissLike = async (id) => {
  try {
    const token = getItem("token")
    const result = await axios.put(
      `${process.env.webURL}/Comment/AddDissLike?id=${id}`,{},
      { headers: { Authorization: 'bearer '+  token} }
    );
    
    const status = result.status;
    
  } catch (error) {
    return error;
  }
};
const DecreaseDissLike = async (id) => {
  try {
    const token = getItem("token")
    const result = await axios.put(
      `${process.env.webURL}/Comment/DecreaseDissLike?id=${id}`,{},
      { headers: { Authorization: 'bearer '+  token} }
    );
    
    const status = result.status;
    
  } catch (error) {
    return error;
  }
};
const AddLike = async (id) => {
  try {
    const token = getItem("token")
    const result = await axios.put(
      `${process.env.webURL}/Comment/AddLike?id=${id}`,{},
      { headers: { Authorization: 'bearer '+  token} }
    );
    
    const status = result.status;
    
  } catch (error) {
    return error;
  }
};
const DecreaseLike = async (id) => {
  try {
    const token = getItem("token")
    const result = await axios.put(
      `${process.env.webURL}/Comment/DecreaseLike?id=${id}`,{},
      { headers: { Authorization: 'bearer '+  token} }
    );
    
    const status = result.status;
    
  } catch (error) {
    return error;
  }
};
export { comment,AddDissLike,DecreaseDissLike,AddLike,DecreaseLike };