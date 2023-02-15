import axios from "axios"
import {getItem, setItem} from "../../src/core/services/storage/storage"

const subscribe =async(obj)=>{
    const token = getItem("token")

    try{
        const result = await axios.post(`${process.env.webURL}/Subscribe/InsertSubscribeEmail`,{"email":obj})
        return result.data
    }
    catch(error){
            console.log(error)
    }
}
export {subscribe}