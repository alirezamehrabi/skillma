import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import FavorivteCategory from "../FavorivteCategory/FavorivteCategory";
import { useState, useEffect } from "react";
import { useContext } from "react";
import DataContext from "../../../src/Context/DataContext";
import Loader from "./../Loader/Loader";
import { getItem } from "../../core/services/storage/storage";

const Menu = () => {
  const token = getItem("token");
  const { menuCat, onLogoutUser, loading, isSucces } = useContext(DataContext);
  const menu = menuCat.data;
  const down = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs>
        <style>{`.cls-1{opacity:0;}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <rect className="cls-1" width="24" height="24" />
        <path d="M20.49,7.16a1.7,1.7,0,0,0-2.4,0L12,13.21,5.91,7.16A1.71,1.71,0,0,0,3.5,9.58h0l7.23,7.24a1.72,1.72,0,0,0,2.42,0h0l7.32-7.24a1.71,1.71,0,0,0,0-2.42Z" />
      </g>
    </svg>
  );
  const isTeacher = getItem("isTeacher");
  const picName = getItem("picName");
  const userId = getItem("userId");
  const userName = getItem("userName");
  const [state, setState] = useState(false);
  const [searchTXT, setSearchTXT] = useState();
  const searchHandler = (e) => {
    setSearchTXT(e.target.value);
  };
  const formsubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    window.addEventListener("click", () => setState(false));

    return () => window.removeEventListener("click", () => setState(false));
  });
  return !loading ? (
    <>
      <section className={`container-fluid ${styles.menuHolder}`}>
        <div className={`container mx-auto ${styles.menu}`}>
          <div className="row mx-auto">
            <div className="col-lg-2 col-md-7 col-sm-7 order-2 order-lg-1 col-4">
              <figure className={styles.logo}>
                <Link href={`/`}>
                  <Image
                    src={require(`../../assets/home/logo.png`)}
                    alt="logo"
                    width="145"
                    height="42"
                  />
                </Link>
              </figure>
            </div>
            <div className="col-lg-7 col-md-1 col-sm-1 order-1 order-lg-2 col-2 d-flex justify-content-center">
              <Navigation />
              <MobileNavigation />
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1 order-3 order-lg-3 col-1">
              <Link href="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className={styles.cartSVG}
                >
                  <defs>
                    <style>{`.cls-1{opacity:0}`}</style>
                  </defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <rect className="cls-1" width="24" height="24" />
                    <path d="M18.3,7.5H15.6V6.6a3.6,3.6,0,0,0-7.2,0v.9H5.7a.9.9,0,0,0-.9.9v9.9A2.7,2.7,0,0,0,7.5,21h9a2.7,2.7,0,0,0,2.7-2.7V8.4A.9.9,0,0,0,18.3,7.5Zm-8.1-.9a1.8,1.8,0,0,1,3.6,0v.9H10.2Zm7.2,11.7a.9.9,0,0,1-.9.9h-9a.9.9,0,0,1-.9-.9v-9H8.4v.9a.9.9,0,0,0,1.8,0V9.3h3.6v.9a.9.9,0,1,0,1.8,0V9.3h1.8Z" />
                  </g>
                </svg>
              </Link>
            </div>
            <div
              className={`col-lg-2 col-md-3 col-sm-3 order-4 order-lg-4 col-5 ${styles.btn}`}
            >
              {isSucces ? (
                <>
                  <div className={`btn-group ${styles.drop2}`}>
                    <button
                      type="button"
                      className="btn btn-white "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div className="row">
                        <div className={`col-xxl-3 col-8 ${styles.account}`}>
                          <Image
                            src={picName}
                            alt="per"
                            width="40"
                            height="40"
                          />
                        </div>
                        <div className={`col-8 ${styles.pernameHolder}`}>
                          <h6 className={`text-truncate ${styles.pername}`}>
                            {userName}
                          </h6>
                        </div>
                        <div className={`col-xxl-1 col-4`}>{down}</div>
                      </div>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          href={
                            isTeacher === true
                              ? `/panel/teacher/${userId}`
                              : `/panel/student/${userId}`
                          }
                        >
                          <a className="dropdown-item">profile</a>
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" onClick={onLogoutUser}>
                          logOut
                        </a>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <Link href="/login">
                  <button
                    type="button"
                    className={`btn btn-warning ${styles.logBut}`}
                  >
                    Login / Sign Up
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className={`container-lg mt-4`}>
        <div className={`row`}>
          <div className={`col-2`}>
            <div className={`btn-group ${styles.drop}`}>
              <button
                type="button"
                className="btn btn-white dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All Categories
              </button>
              <ul className="dropdown-menu">
                {menu.map((i) => {
                  return (
                    <li key={i.id}>
                      <a className="dropdown-item" href="#">
                        {i.categoryName}
                      </a>
                      <hr className="dropdown-divider" />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={`col-5 ${styles.favCat}`}>
            {token ? <FavorivteCategory /> : null}
          </div>
          <div className={`col-5`}>
            <form className="input-group mb-3" onSubmit={formsubmit}>
              <input
                type="text"
                className={`form-control ${styles.sinput}`}
                placeholder="Search by Topic,Course,Teacher"
                aria-label="Search by Topic,Course,Teacher"
                aria-describedby="basic-addon2"
                value={searchTXT}
                onChange={searchHandler}
              />
              <div className={`input-group-append ${styles.search}`}>
                <Link href={`/search?search=${searchTXT}`}>
                  <button
                    className={`btn btn-outline-secondary ${styles.searchsvg}`}
                    type="submit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="#FF9D14"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  ) : (
    <Loader />
  );
};

export default Menu;
