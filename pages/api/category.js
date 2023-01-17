import axios from "axios"
import {getItem, setItem} from "../../src/core/services/storage/storage"

const category =async(obj)=>{
    const token = getItem("token")

    try{
        const result = await axios.post(`${process.env.webURL}/Category/InsertUserCategory`,{"categoryId":obj}
        ,{ headers: { Authorization: 'bearer '+  token}
    })
    }
    catch(error){
            console.log(error)
    }
}
export {category}