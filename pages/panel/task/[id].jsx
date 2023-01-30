import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { SSRProvider } from "react-bootstrap";
import Header from "../../../src/components/panel/Header/Header.jsx";
import Menu from "../../../src/components/panel/Menu/Menu.jsx";
import dash from "../../../styles/panel/Dashboard.module.css";
import styles from "../../../styles/Home.module.css";
import co from "../../../styles/panel/Courses.module.css";
import men from "../../../styles/panel/Menu.module.css";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import Table from "react-bootstrap/Table";
import ReactPaginate from "react-paginate";
import { Button, Modal } from "react-bootstrap";
import Loader from "../../../src/components/Loader/Loader.jsx";
import { DeleteCourse } from "../../api/course/course";
import { getItem } from "../../../src/core/services/storage/storage.js";
import Moment from "react-moment";
import { useRouter } from "next/router.js";

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps(context) {
  const paths = context.params.id;
  const request1 = await fetch(
    `${process.env.webURL}/Task/GetToDoTaskByTaskId?TaskId=${paths}&page=1&pagesize=5`
  );

  try {
    const todo = await request1.json();
    return {
      props: {
        ...{ todo },
      },
    };
  } catch (e) {
    return {
      redirect: {
        destination: "/404",
      },
    };
  }
}

const Courses = (props) => {
  // const catDt = props.posts.data;
  // console.log(props.posts)
  const firstdt = props.todo.data;
  const [value, onChange] = useState(new Date());
  const val = value.toISOString();
  const [title2, setTitle2] = useState("State");
  const [delid, setDelid] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setDelid(id);
  };

  const dropdown2 = (event) => {
    setTitle2(event.target.textContent);
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };
  const funcHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
  };
  const line = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12.5"
      height="2.5"
      viewBox="0 0 12.5 2.5"
    >
      <line
        id="Line_92"
        data-name="Line 92"
        x2="10"
        transform="translate(1.25 1.25)"
        fill="none"
        stroke="#7a7d7c"
        strokeLinecap="round"
        strokeWidth="2.5"
      />
    </svg>
  );
  const edit = (
    <svg
      id="Group_20967"
      data-name="Group 20967"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <rect
        id="Rectangle_6196"
        data-name="Rectangle 6196"
        width="24"
        height="24"
        transform="translate(0)"
        fill="#7a7d7c"
        opacity="0"
      />
      <path
        id="Path_82777"
        data-name="Path 82777"
        d="M20.092,12a.9.9,0,0,0-.9.9v5.4a.9.9,0,0,1-.9.9H5.7a.9.9,0,0,1-.9-.9V5.706a.9.9,0,0,1,.9-.9h5.4a.9.9,0,0,0,0-1.8H5.7A2.7,2.7,0,0,0,3,5.706V18.3A2.7,2.7,0,0,0,5.7,21H18.294a2.7,2.7,0,0,0,2.7-2.7V12.9A.9.9,0,0,0,20.092,12ZM6.6,12.686V16.5a.9.9,0,0,0,.9.9h3.814a.892.892,0,0,0,.638-.261L18.177,10.9h0l2.554-2.5a.9.9,0,0,0,0-1.272l0-.005L16.917,3.269a.9.9,0,0,0-1.272-.005l-.005.005L13.1,5.814h0L6.862,12.048A.892.892,0,0,0,6.6,12.686Zm9.678-7.51,2.545,2.545L17.547,9,15,6.453ZM8.4,13.055l5.333-5.334,2.546,2.546L10.945,15.6H8.4Z"
        fill="#7a7d7c"
      />
    </svg>
  );
  const [courseDt, setCourseDt] = useState();
  // console.log(courseDt)
  const fetchcourse = async (p) => {
    const token = getItem("token");
    try {
      const result = await fetch(
        `${process.env.webURL}/Course/GetTeacherCoursesName`,
        { headers: { Authorization: "Bearer " + token } }
      );
      const json = await result.json();
      // console.log(json.data.pageData)
      setCourseDt(json.data);
      return json.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchcourse();
  }, []);
  const fetchData = async (p) => {
    try {
      const result = await fetch(
        `${process.env.webURL}/Task/GetToDoTaskByTaskId?page=${p}&pagesize=5`
      );
      const json = await result.json();
      // console.log(json.data.pageData)
      setDatacourse(json.data);
      return json.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData(1);
  }, [state]);

  const router = useRouter();
  const ro = router.query.id;
  const [si, setSi] = useState("");
  const [datacourse, setDatacourse] = useState(firstdt);
  const [dt, setDt] = useState(firstdt);
  const sData = async (p) => {
    try {
      const result = await fetch(
        `${process.env.webURL}/Task/GetToDoTaskByTaskId?page=1&pagesize=5&TaskId=${p.ro}&Type=${p.st}&Key=${p.si}`
      );
      const json = await result.json();
      // console.log(json.data.pageData)
      setDatacourse(json.data);
      setDt(json.data);
      return json.data;
    } catch (error) {
      console.log(error);
    }
  };
  const [pageNum, setPageNum] = useState(0);

  const changePage = async ({ selected }) => {
    setPageNum(selected);
    setDt(await fetchData(selected + 1));
  };
  // console.log(dt)
  const pageCount = dt !== undefined ? dt.totalPage : <Loader />;
  const dtlenght = dt !== undefined ? dt.pageData.length : <Loader />;
  const dttotallenght = dt !== undefined ? dt.totalCount : <Loader />;

  const [st, setSt] = useState(null);
  const stData = () => {
    dt.pageData !== undefined ? (
      dt.pageData.map((i) => {
        if (i.status === 0) {
          setSt(0);
        } else if (i.status === 1) {
          setSt(1);
        } else if (i.status === 2) {
          setSt(2);
        }
      })
    ) : (
      <Loader />
    );
  };
  useEffect(() => {
    stData();
  }, []);
  console.log(dt)
  const displayItems =
    dt !== undefined ? (
      dt.pageData.map((i, index) => {
        return (
          <tr key={i.id}>
            <td>{index + 1}</td>
            <td>{i.studentName}</td>
            {i.status === "Compelete" ? (
              <td className={`${co.greenc}`}>{i.status}</td>
            ) : (
              i.status === "In Progress" && (
                <td className={`${co.orangec}`}>{i.status}</td>
              )
            )}
            <td>
              <Moment format="YYYY/MM/DD">{i.dateOfSubmit}</Moment>
            </td>
            {i.score === null ? <td>{line}</td> : <td>{i.score}</td>}
            <td>
              <div className={`${co.edit}`}>{edit}</div>
            </td>
          </tr>
        );
      })
    ) : (
      <Loader />
    );
  const [state, setState] = useState(0);
 if(st=== null){
  setSt("")
 }

  const submitHandler = (e) => {
    e.preventDefault();
    setState(state + 1);
    sData({ si, st, ro, val })
  };

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
            <div className={`col-12 ${co.coursetitle}`}>
              <div className={`row`}>
                <div className={`col-3`}>
              <span className={`fw-bolder p-3 mt-3`}>{(dt.pageData[0] !== undefined) ? dt.pageData[0].taskName : <>Can't Find This Task</>}</span>
                </div>
                <div className={`col-9`}>
              <span className={`fw-bolder p-3 mt-3`}>{(dt.pageData[0] !== undefined) ? dt.pageData[0].description : null}</span>

                </div>
              </div>
            </div>
            <div className={`col-12`}>
              <form>
                <div className={`col-12 ${styles.searchBox} ${co.searchBox}`}>
                  <div className={`row `}>
                    <div className={`col-6 col-xl-4 col-md-6 g-3 my-3`}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search by Name"
                        aria-label="Search by Name"
                        aria-describedby="basic-addon2"
                        value={si}
                        onChange={(e) => setSi(e.target.value)}
                      />
                    </div>

                    <div className={`col-6 col-xl-2 col-md-6 g-3 my-3`}>
                      <div className={styles.box2}>
                        <ul className={styles.boxList2} onClick={dropdown2}>
                          <Link
                            passHref
                            href="#"
                            className={styles.listHeader2}
                          >
                            <span onClick={funcHandler}>{title2}</span>
                          </Link>

                          <li
                            className={styles.listItem21}
                            onClick={() => setSt(0)}
                          >
                            Inprogress
                          </li>
                          <li
                            className={styles.listItem21}
                            onClick={() => setSt(1)}
                          >
                            compelete
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className={`col-12 col-xl-2 col-md-12 g-3 my-3`}>
                      <button
                        type="submit"
                        className={`btn btn-warning ${styles.logBut} ${co.searchbtn}`}
                        onClick={submitHandler}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className={`col-12`}>
              <div className={`row ${co.coursesection}`}>
                <div className={`col-6 fw-bold`}>Course List</div>
                <div className={`col-6`}>
                  <div className={`${dash.datepicker}`}>
                    <DatePicker
                      onChange={onChange}
                      value={value}
                      format={"MMMM yyyy"}
                    />
                  </div>
                </div>
                <div className={`col-12`}>
                  <Table bordered hover responsive size="xl" className={`my-5`}>
                    <thead>
                      <tr className={co.tablehead}>
                        <th></th>
                        <th>Student Name</th>
                        <th>Date of Submission</th>
                        <th>Status</th>
                        <th>Score</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>{displayItems}</tbody>
                  </Table>
                  <ReactPaginate
                    perviousLabel={"Pervious"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={co.paginationBttns}
                    previousLinkClassName={co.previousBttn}
                    nextLinkClassName={co.nextBttn}
                    disabledClassName={co.paginationDisabled}
                    activeClassName={co.paginationActive}
                    pageRangeDisplayed={5}
                  />
                  <h6 className={`${co.itemnum}`}>
                    See {dtlenght} from {dttotallenght} recoed
                  </h6>
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
