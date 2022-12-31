import axios from "axios"
import { isFunction } from "formik"
import {setItem} from "../../src/core/services/storage/storage"


const loginUser =async(obj)=>{
    try{
        const result = await axios.post(`${process.env.webURL}/Authentication/LoginUser`,obj)
        console.log(result.data)
        if(result.data.isSucces === true){
            const token = result.data.data.token
        setItem("token", token)
        return result.data
        }
        else if(result.data.isSucces === false){
            alert("eshteb")
        }

        
    }
    catch(error){
            return null
    }
}
export {loginUser}