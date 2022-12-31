import { createContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { loginUser } from "../../pages/api/login-user";
import {clearStorage, getItem} from "../../src/core/services/storage/storage"
const DataContext = createContext();

export function DataProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const loggedIn = getItem("token")
  const[user,setUser] = useState(loggedIn ? true : false)


  useEffect(() => {
    setHydrated(true);
}, []);
if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
}
const onLoginUser = async()=>{
  const userObj ={
    email : "",
    password: ""
  }
  const user = await loginUser(userObj)
  setUser(true)
}
  
  const onLogoutUser = () => {
    setUser(false);
    clearStorage()
  };

  return (
    <DataContext.Provider value={{ onLoginUser,onLogoutUser,user,loading }}>
      {children}
    </DataContext.Provider>
  );
}
export default DataContext;
