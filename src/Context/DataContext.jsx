import { createContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { loginUser } from "../../pages/api/login-user";
import {
  clearStorage,
  getItem,
  setItem,
} from "../../src/core/services/storage/storage";
const DataContext = createContext();
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export function DataProvider({ children }) {
  const router = useRouter();


  const refreshToken = getItem("refreshToken");
  const loggedIn = getItem("token");
  const refreshTokenExpireDate = getItem("refreshTokenExpireDate");
  const expireDate = getItem("expireDate");
  var date = new Date(expireDate);
  var date1 = new Date(refreshTokenExpireDate);
  const now = new Date();



useEffect(() => {
  async function fetchData() {
  if ((date < now || date1 < now) && loggedIn !== false) {
    try {
       await axios
        .post(`${process.env.webURL}/Authentication/RefreshToken`, {
          token: loggedIn,
          refreshToken: refreshToken,
        })
        .then( (r) => {
          if (r.data.isSucces) {
            setItem("token", r.data.token);
            setItem("refreshToken", r.data.refreshToken);
            setItem("expireDate", r.data.expireDate);
            setItem("refreshTokenExpireDate", r.data.refreshTokenExpireDate);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }
}
fetchData();
},[])

  const [loading, setLoading] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const isSucces = getItem("isSucces");
  const [user, setUser] = useState(loggedIn ? true : false);

  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }
  const onLogoutUser = () => {
    setUser(false);
    clearStorage();
  };
  return (
    <DataContext.Provider
      value={{
        onLogoutUser,
        user,
        loading,
        isSucces,
        setUser,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
export default DataContext;
