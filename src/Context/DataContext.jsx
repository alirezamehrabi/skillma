import { createContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { loginUser } from "../../pages/api/login-user";
import {clearStorage, getItem} from "../../src/core/services/storage/storage"
const DataContext = createContext();

export function DataProvider({ children }) {
  const router = useRouter();
  const [f1, setF1] = useState("");
  const [f2, setF2] = useState("");

  const handleNameChange = (event) => {
    setF1(event.target.value);
  };
  const handleNameChange2 = (event) => {
    setF2(event.target.value);
  };

  const [loading, setLoading] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const loggedIn = getItem("token")
  const isSucces = getItem("isSucces")
  const[user,setUser] = useState(loggedIn ? true : false)

  useEffect(() => {
    setHydrated(true);
}, []);
if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
}
const onLoginUser = async(event)=>{
  const userObj ={
    email : f1,
    password: f2,
  }
  const user = await loginUser(userObj)
  setUser(true)
  if(isSucces === "true"){
    router.push({pathname:'/'})
  }
}
console.log(isSucces)

  const onLogoutUser = () => {
    setUser(false);
    clearStorage()
  };
  return (
    <DataContext.Provider value={{ onLoginUser,onLogoutUser,user,loading,handleNameChange,handleNameChange2, f1, f2 , isSucces }}>
      {children}
    </DataContext.Provider>
  );
}
export default DataContext;
