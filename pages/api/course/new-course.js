import axios from "axios"
import {getItem, setItem} from "../../../src/core/services/storage/storage"

const addShort =async(obj)=>{
    const token = getItem("token")

    try{
        const result = await axios.post(`${process.env.webURL}/ShortContent/InsertShortContent`,obj
        ,{ headers: { Authorization: 'bearer '+  token}
    })
    // console.log(result)
    }
    catch(error){
            console.log(error)
    }
}
const addOnlineCourse =async(obj)=>{
    const token = getItem("token")

    try{
        const result = await axios.post(`${process.env.webURL}/OnlineCourse/InsertOnlineCourse`,obj
        ,{ headers: { Authorization: 'bearer '+  token}
    })
    // console.log(result)
    }
    catch(error){
            console.log(error)
    }
}
const addCourse =async(obj)=>{
    const token = getItem("token")

    try{
        const result = await axios.post(`${process.env.webURL}/Course/InsertCourse`,obj
        ,{ headers: { Authorization: 'bearer '+  token}
    })
    // console.log(result)
    }
    catch(error){
            console.log(error)
    }
}
export {addShort,addOnlineCourse,addCourse}