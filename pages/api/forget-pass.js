import axios from "axios"
import {setItem} from "../../src/core/services/storage/storage"
import { toast } from 'react-toastify';

const Forgetpass =async(obj)=>{

    try{
        const result = await axios.post(`${process.env.webURL}/Authentication/SendEmailForRepass?email=${obj.email}`,obj)
        const status = result.status
        return status
// console.log(status)
        // const isSucces = result.data.isSucces
        // setItem("isSucces", isSucces)

        // if(result.data.isSucces === true){
        //     const token = result.data.data.token
        // setItem("token", token)
        // return (result.data,
        //     toast.success('You Loggined Successfully!', {
        //         position: "top-center",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "colored",
        //         })
        //     )
        // }
        // else if(result.data.isSucces === false){
        //     toast.error('wrong username or password', {
        //         position: "top-center",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "colored",
        //         });
        //         return null
        // }

        
    }
    catch(error){
            return 500
    }
}
export {Forgetpass}