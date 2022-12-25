import { createContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { loginUser } from "../../pages/api/login-user";
const DataContext = createContext();

export function DataProvider({ children }) {

  const[user,setUser] = useState(null)
  
  let router = useRouter();


  const onLoginUser = async()=>{
    const userObj ={
      email : "saeed@gmail.com",
      password: "saeed"
    }
    const user = await loginUser(userObj)
    // console.log(user)
  }







  return (
    <DataContext.Provider value={{ onLoginUser }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
