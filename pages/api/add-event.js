import axios from "axios"
import {getItem, setItem} from "../../src/core/services/storage/storage"

const addEvent =async(obj)=>{
    const token = getItem("token")

    try{
        const result = await axios.post(`${process.env.webURL}/Event/InsertEvent`,obj
        ,{ headers: { Authorization: 'bearer '+  token}
    })
    // console.log(result)
    }
    catch(error){
            console.log(error)
    }
}
export {addEvent}