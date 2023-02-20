import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SSRProvider } from "react-bootstrap";
import Header from "../../../src/components/panel/Header/Header.jsx";
import Menu from "../../../src/components/panel/Menu/Menu.jsx";
import dash from "../../../styles/panel/Dashboard.module.css";
import styles from "../../../styles/Home.module.css";
import co from "../../../styles/panel/Courses.module.css";
import ch from "../../../styles/panel/Chats.module.css";
import men from "../../../styles/panel/Menu.module.css";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import Table from "react-bootstrap/Table";
import ReactPaginate from "react-paginate";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router.js";
import { useDispatch, useSelector } from "react-redux";
import { conaccept, conlist, conreq } from "../../api/redux/connectlistreducer.js";
import { useEffect } from "react";

const Courses = () => {
  const router = useRouter()
const data1= useSelector((profile)=>profile.connection.data.data)
const dispatch = useDispatch()
useEffect(()=>{
dispatch(conreq())
},[])
const data= useSelector((profile)=>profile.connection.data1.data)
useEffect(()=>{
dispatch(conlist())
},[])
  const searc = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 19.802 19.785"
    >
      <path
        id="search"
        d="M21.5,20.1l-3.671-3.641a8.906,8.906,0,1,0-1.375,1.375L20.1,21.471A.983.983,0,1,0,21.5,20.1Zm-10.6-2.266A6.926,6.926,0,1,1,17.832,10.9a6.926,6.926,0,0,1-6.927,6.926Z"
        transform="translate(-1.979 -1.979)"
        fill="#7a7d7c"
      />
    </svg>
  );
  return (
    <SSRProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${dash.container}`}>
        <div className={`row d-flex justify-content-between`}>
          <div className={`col-2 ${men.menucontainer}`}>
            <Link href="/panel/dashboard">
              <div className={`${men.logo}`}></div>
            </Link>
            <Menu />
          </div>
          <div className={`col-lg-10 ${dash.maincontainer}`}>
            <Header />
            <div className={`row ${ch.chatlivehold}`}>
              <div className={`col-lg-5`}>
                <div className={`col-lg-11`}>
                  <h6 className={`fw-bold ${ch.conreqtitle}`}>
                    Connection Request
                  </h6>
                  <div className={`col-12 ${ch.searchperson}`}>
                    <input
                      type="text"
                      placeholder="Search People"
                      className={`${ch.search}`}
                    />
                    {searc}
                  </div>
                  <div className={`${ch.conreqSec}`}>
                    {data1 !== undefined && data1.map((i)=>{
                      return(
                      <div className={`row ${ch.conreq}`} key={i.id}>
                      <div className={`col-3 ${ch.conreqPic}`}>
                        <Image
                          src={i.picName}
                          alt=""
                          width="50"
                          height="50"
                        />
                      </div>
                      <div className={`col-9`}>
                        <h6 className={`fw-bold ${ch.conreqName}`}>
                          {i.userName}
                        </h6>
                        <h6 className={`${ch.conreqDes}`}>
                          {i.field}
                        </h6>
                      </div>
                      <div
                        className={`col-12 d-flex mx-auto my-3 justify-content-center ${ch.conreqBTN}`}
                      >
                        <Button
                          variant="success"
                          className={`${ch.conreqConfirm}`}
                          onClick={() => {dispatch(conaccept(i.id)).then((r)=>{r.payload.isSucces === true && dispatch(conreq());dispatch(conlist())})}}
                        >
                          Confirm
                        </Button>
                        <Button variant="outline-danger">Reject</Button>
                      </div>
                    </div>
                      )
                    })}
                    
                  </div>
                </div>
              </div>
              <div className={`col-lg-7`}>
                <div className={`row ${ch.conholder}`}>
                <div className={`row p-3`}>
                  <div className={`col-6`}>
                    <h6 className={`fw-bold ${ch.conList}`}>Connection List</h6>
                  </div>
                  <div className={`col-6`}>
                    <div className={`col-12 ${ch.searchperson}`}>
                      <input
                        type="text"
                        placeholder="Search People"
                        className={`${ch.search}`}
                      />
                      {searc}
                    </div>
                  </div>
                </div>
                {data !== undefined && data.pageData.map((i)=>{
                  return(
                    <div className={`col-12 p-3`} key={i.id}>
                <div className={`row ${ch.conreq}`}>
                      <div className={`col-3 ${ch.conreqPic}`}>
                        <Image
                          src={i.picName}
                          alt=""
                          width="50"
                          height="50"
                        />
                      </div>
                      <div className={`col-5`}>
                        <h6 className={`fw-bold ${ch.conreqName}`}>
                          {i.userName}
                        </h6>
                        <h6 className={`${ch.conreqDes}`}>
                          {i.field}
                        </h6>
                      </div>
                      <div className={`col-4 align-self-center`}>
                      <Button variant="secondary py-2" className={`${ch.conBTN}`}>Connected</Button>
                      </div>
                    </div>
                </div>
                  )
                })}
                
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SSRProvider>
  );
};
export default Courses;
