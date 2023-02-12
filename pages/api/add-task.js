import axios from "axios"
import {getItem, setItem} from "../../src/core/services/storage/storage"
import { toast } from 'react-toastify';

const addTask =async(obj)=>{
    const token = getItem("token")

    try{
        const result = await axios.post(`${process.env.webURL}/Task/InsertTask`,obj
        ,{ headers: { Authorization: 'bearer '+  token}
    }).then((r)=>{
        // console.log(r.status)
        if(r.status === 200){
            return toast.success('Task Sended Successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                })
            }
                else if(r.status !== 200){
                    return toast.error('Some thing went wrong!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        })
                }
        
    })
    }
    catch(error){
            console.log(error)
    }
}
export {addTask}