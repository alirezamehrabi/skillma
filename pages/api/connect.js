import axios from "axios"
import {getItem, setItem} from "../../src/core/services/storage/storage"

const connectrequest =async(id)=>{
    const token = getItem("token")

    try{
        const result = await axios.post(`${process.env.webURL}/Connect/RequestConnect?followingId=${id}`,{}
        ,{ headers: { Authorization: 'bearer '+  token}
    }).then((r)=>{
        if(r.status === 200){
            return console.log(r.data.isSucces)
            }
                else if(r.status !== 200){
                    console.log(r.status)
                }
    })
    }
    catch(error){
            console.log(error)
    }
}
export {connectrequest}