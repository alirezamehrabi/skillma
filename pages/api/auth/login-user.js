import axios from "axios"
import {setItem} from "../../../src/core/services/storage/storage"
import { toast } from 'react-toastify';

const loginUser =async(obj)=>{

    try{
        const result = await axios.post(`${process.env.webURL}/Authentication/LoginUser`,obj)
        const isSucces = result.data.isSucces
        setItem("isSucces", isSucces)

        if(result.data.isSucces === true){
            const token = result.data.data.token
        setItem("token", token)
        const isTeacher = result.data.data.isTeacher
        const picName = result.data.data.picName
        const userId = result.data.data.userId
        const userName = result.data.data.userName
        setItem("isTeacher", isTeacher)
        setItem("picName", picName)
        setItem("userId", userId)
        setItem("userName", userName)
        const refreshToken = result.data.data.refreshToken
        const refreshTokenExpireDate = result.data.data.refreshTokenExpireDate
        const expireDate = result.data.data.expireDate
        setItem("refreshToken", refreshToken)
        setItem("refreshTokenExpireDate", refreshTokenExpireDate)
        setItem("expireDate", expireDate)
        return (result.data,
            toast.success('You Loggined Successfully!', {
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
        else if(result.data.isSucces === false){

            toast.error('wrong username or password', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
                return null
        }

        
    }
    catch(error){
            return null
    }
}
export {loginUser}