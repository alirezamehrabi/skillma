import axios from "axios"
import {setItem} from "../../src/core/services/storage/storage"
const loginUser =async(obj)=>{
    try{
        const result = await axios.post('https://skillma-api.shinypi.net/Authentication/LoginUser',obj)

        const token = result.data.data.token

// console.log(result.data.data.token)
        setItem("token", token)


        return result.data
    }
    catch(error){
            return null
    }
}
export {loginUser}