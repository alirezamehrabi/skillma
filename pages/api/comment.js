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
    
    // console.log(result);
    // const status = result.status;
    // setItem("status", status);
    // console.log(result.data.isSucces)
    // if(status === 200 && result.data.isSucces === false){
    //     if(result.data.errorMessage === "Opration Feild,User Already Exist With this Email"){
    //         return (result.data,
    //             toast.error('User Existed!', {
    //                 position: "top-center",
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "colored",
    //                 })
    //             )
    //     }
    //     else{
    //         return (result.data,
    //             toast.error('Passwords are not Match!', {
    //                 position: "top-center",
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "colored",
    //                 })
    //             )
    //     }
    // }
    // else if(status === 200 && result.data.isSucces === true){
    //     return (result.data,
    //         toast.success('Register Successfully, Check your Email!', {
    //             position: "top-center",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "colored",
    //             })
    //         )

    // }
  } catch (error) {
    return error;
  }
};
export { comment };
