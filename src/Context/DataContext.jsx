import { createContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { loginUser } from "../../pages/api/login-user";
import {clearStorage, getItem} from "../../src/core/services/storage/storage"
const DataContext = createContext();

export function DataProvider({ children }) {
  const loggedIn = getItem("token")
  const[user,setUser] = useState(loggedIn ? true : false)
  
  let router = useRouter();


  const onLoginUser = async()=>{
    const userObj ={
      email : "saeed@gmail.com",
      password: "saeed"
    }
    const user = await loginUser(userObj)
    setUser(true)
  }

  const onLogoutUser = () => {
    setUser(false);
    clearStorage()

  };
  return (
    <DataContext.Provider value={{ onLoginUser,onLogoutUser }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
