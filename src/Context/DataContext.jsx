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
  const [f1, setF1] = useState("");
  const [f2, setF2] = useState("");

  const handleNameChange = (event) => {
    setF1(event.target.value);
  };
  const handleNameChange2 = (event) => {
    setF2(event.target.value);
  };

  const refreshToken = getItem("refreshToken");
  const loggedIn = getItem("token");
  const refreshTokenExpireDate = getItem("refreshTokenExpireDate");
  const expireDate = getItem("expireDate");
  var date = new Date(expireDate);
  var date1 = new Date(refreshTokenExpireDate);
  const now = new Date();
  console.log(date);
  console.log(date1);
  console.log(new Date());




  // if (date < now || (date1 < now && loggedIn !== null)) {
  //   try {
  //      axios
  //       .post(`${process.env.webURL}/Authentication/RefreshToken`, {
  //         token: loggedIn,
  //         refreshToken: refreshToken,
  //       })
  //       .then( (r) => {
  //         if (r.data.isSucces) {
  //           setItem("token", r.data.token);
  //           setItem("refreshToken", r.data.refreshToken);
  //           setItem("expireDate", r.data.expireDate);
  //           setItem("refreshTokenExpireDate", r.data.refreshTokenExpireDate);
  //         }
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


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
  const onLoginUser = async (event) => {
    const userObj = {
      email: f1,
      password: f2,
    };
    const user = await loginUser(userObj);
    setUser(user);
    console.log(user);
    if (user !== "undefined" && user !== "false" && user !== null) {
      router.push({ pathname: "/" });
    }
  };
  // console.log(isSucces)

  const onLogoutUser = () => {
    setUser(false);
    clearStorage();
  };
  return (
    <DataContext.Provider
      value={{
        onLoginUser,
        onLogoutUser,
        user,
        loading,
        handleNameChange,
        handleNameChange2,
        f1,
        f2,
        setF1,
        setF2,
        isSucces,
        setUser,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
export default DataContext;
