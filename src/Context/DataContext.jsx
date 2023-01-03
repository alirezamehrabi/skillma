import { createContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { loginUser } from "../../pages/api/auth/login-user";
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
  const _iSMounted = useRef(true);
  const [loading, setLoading] = useState(true);
  const [hydrated, setHydrated] = useState(false);
  const isSucces = getItem("isSucces");
  const [user, setUser] = useState(loggedIn ? true : false);
  const[menuCat, setMenuCat] = useState();
  useEffect(() => {
    if (_iSMounted.current) {
      (async () => {
		
		const result = (
			await Promise.all([
			  fetch(`https://skillma-api.shinypi.net/Category/GetAllCategories`),
			  ])
		  ).map((r) => r.json());

      // and waiting a bit more - fetch API is cumbersome
      const [GetAllCategories] = await Promise.all(result);

      // when the data is ready, save it to state
		  setMenuCat(GetAllCategories);
		
		setLoading(false);
		
      })();
    }
    return () => {
      _iSMounted.current = false;
    };
  }, []);



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
        menuCat,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
export default DataContext;
