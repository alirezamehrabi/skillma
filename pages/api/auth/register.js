import axios from "axios"
import {setItem} from "../../../src/core/services/storage/storage"
import { toast } from 'react-toastify';

const Resetpass =async(obj)=>{

    try{
        const result = await axios.post(`${process.env.webURL}/User/InsertUser`,obj)
console.log(result)
        

        
    }
    catch(error){
            return error
    }
}
export {Resetpass}