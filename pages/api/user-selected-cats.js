import axios from "axios"
import {getItem, setItem} from "../../src/core/services/storage/storage"

const UserCat = async ()=>{
    const token = getItem("token")
    try {
      const result = await fetch(
        `${process.env.webURL}/Category/UserSelectedCats`,{ headers: { Authorization: 'bearer '+  token}
    }
        );
        const json = await result.json();
        // console.log(json.data.pageData)
      return json.data
    } catch (error) {
       console.log(error);
    }
  }
export {UserCat}