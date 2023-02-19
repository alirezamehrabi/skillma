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
import { DeleteShort } from "../../api/course/course";
import { getItem } from "../../../src/core/services/storage/storage.js";
import { shortcourse, shortcoursedel } from "../../api/redux/coursereducer.js";
import { useDispatch, useSelector } from "react-redux";
export async function getStaticProps() {
  const token = getItem("token")
  const res = await fetch(`${process.env.webURL}/Category/GetAllCategories`);
  const res1 = await fetch(
    `${process.env.webURL}/ShortContent/GetDashboardShortContentTeacher?page=1&pagesize=5`,{ headers: { Authorization: 'Bearer '+  token}}
  );
  const posts = await res.json();
  const firstdt = await res1.json();

  return {
    props: { posts, firstdt },
  };
}
const Courses = (props) => {
  const disPatch = useDispatch()
  const data1= useSelector((course)=>course.course.data3)
  useEffect(()=>{
    let p=pageNum+1;
    disPatch(shortcourse({p,catId,si,pr,st,val}))
},[])
  const catDt = props.posts.data;
  const [value, onChange] = useState();
  const val = value === undefined ? "" : value.toISOString()
  const [title, setTitle] = useState("Type");
  const [title2, setTitle2] = useState("State");
  const [title3, setTitle3] = useState("Category");
  const [delid, setDelid] = useState();
  const [show, setShow] = useState(false);
  const [st, setSt] = useState(null);
  const [modalData, setModalData] = useState(null);
console.log(modalData)
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setDelid(id);
  };
  const dropdown = (event) => {
    setTitle(event.target.textContent);
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };
  const dropdown2 = (event) => {
    setTitle2(event.target.textContent);
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };
  const dropdown3 = (event) => {
    setTitle3(event.target.textContent);
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };
  const funcHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
  };
  const delet = (
    <svg
      id="Component_28_1"
      data-name="Component 28 – 1"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <rect
        id="Rectangle_6197"
        data-name="Rectangle 6197"
        width="24"
        height="24"
        fill="red"
        opacity="0"
      />
      <path
        id="Path_82778"
        data-name="Path 82778"
        d="M19.2,6.6H15.6V5.7A2.7,2.7,0,0,0,12.9,3H11.1A2.7,2.7,0,0,0,8.4,5.7v.9H4.8a.9.9,0,1,0,0,1.8h.9v9.9A2.7,2.7,0,0,0,8.4,21h7.2a2.7,2.7,0,0,0,2.7-2.7V8.4h.9a.9.9,0,0,0,0-1.8Zm-9-.9a.9.9,0,0,1,.9-.9h1.8a.9.9,0,0,1,.9.9v.9H10.2Zm6.3,12.6a.9.9,0,0,1-.9.9H8.4a.9.9,0,0,1-.9-.9V8.4h9Z"
        fill="#7a7d7c"
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
  const [catId, setCatId] = useState("");
  const [si, setSi] = useState("");
  const [pr, setPr] = useState(null);
  if(pr=== null){
    setPr("")
  }
  if(st === null){
    setSt("")
  }

const [pageNum, setPageNum] = useState(0);

const changePage = async ({ selected }) => {
  setPageNum(selected);
  let p=selected+1;
    disPatch(shortcourse({p,catId,si,pr,st,val}))
};
if((data1 === undefined) || (data1.pageData === undefined)) {
  return <Loader />
}

  const pageCount =
    data1 !== undefined ? data1.totalPage : <Loader />;
  const dtlenght =
    data1 !== undefined ? data1.pageData.length * pageNum : <Loader />;
  const dttotallenght =
    data1 !== undefined ? data1.totalCount : <Loader />;
  
  const displayItems =
  data1 !== undefined ? (
      data1.pageData.map((i,index) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{i.contentName}</td>
            <td>{catDt.filter((x)=> x.id === i.categooryId)[0].categoryName}</td>
            <td>{i.type === 0 ? "Short Video" : i.type === 0 ? "Text" :  "Sound"}</td>
            <td>{parseFloat(i.rate).toFixed(2)}</td>
            {i.statusType === "Published" ? (
              <td className={`${co.greenc}`}>{i.statusType}</td>
            ) : i.statusType === "Awaiting" ? (
              <td className={`${co.orangec}`}>{i.statusType}</td>
            ) : (
              <td className={`${co.orangec}`}>{i.statusType}</td>
            )}
            
            <td>
              <div
                className={`${co.del}`}
                onClick={() => {
                  handleShow(i.id);
                  setModalData(i);
                }}
              >
                {delet}
              </div>
              <div className={`${co.edit}`}>
                <Link href={`/panel/newcourses?id=${i.id}`}>{edit}</Link>
              </div>
            </td>
            {modalData !== null ? (
              <Modal show={show} onHide={handleClose}>
                <Modal.Body className={`${co.modalbody}`}>
                  {delet} <h5 className={``}>Delete course</h5>
                  <h6 className={``}>
                    Are You Sure?
                  </h6>
                  <Button variant="outline-danger mt-3" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button
                    variant="danger mx-3 mt-3"
                    onClick={()=>{disPatch(shortcoursedel(modalData.contentId)).then(()=>{let p=pageNum+1;disPatch(shortcourse({p,catId,si,pr,st,val}))});handleClose()}}
                  >
                    Delete
                  </Button>
                </Modal.Body>
              </Modal>
            ) : null}
          </tr>
        );
      })
    ) : (
      <Loader />
    );
  // const [state, setState] = useState(0);
  const submitHandler = (e) => {
    e.preventDefault();
    // setState(state + 1);
  let p=1;

    disPatch(shortcourse({p,catId,si,pr,st,val}))
  };
  // console.log(dt)


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
              <span className={``}>Short Content</span>
              <div className={``}>
                <Link href={`/panel/newcourses`}>
                  <button type="button" className={`${co.coursebtn}`}>
                    Create New
                  </button>
                </Link>
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
                        <ul className={styles.boxList2} onClick={dropdown3}>
                          <Link
                            passHref
                            href="#"
                            className={styles.listHeader2}
                          >
                            <span onClick={funcHandler}>{title3}</span>
                          </Link>
                          {catDt.map((i) => {
                            return (
                              <li
                                key={i.id}
                                className={styles.listItem21}
                                onClick={() => setCatId(i.id)}
                              >
                                {i.categoryName}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className={`col-6 col-xl-2 col-md-6 g-3 my-3`}>
                      <div className={styles.box2}>
                        <ul className={styles.boxList2} onClick={dropdown}>
                          <Link
                            passHref
                            href="#"
                            className={styles.listHeader2}
                          >
                            <span onClick={funcHandler}>{title}</span>
                          </Link>
                          <li
                            className={styles.listItem21}
                            onClick={() => setPr(0)}
                          >
                            Short Video
                          </li>
                          <li
                            className={styles.listItem21}
                            onClick={() => setPr(1)}
                          >
                            Text
                          </li>
                          <li
                            className={styles.listItem21}
                            onClick={() => setPr(2)}
                          >
                            Sound
                          </li>
                        </ul>
                      </div>
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
                            Awaiting
                          </li>
                          <li
                            className={styles.listItem21}
                            onClick={() => setSt(1)}
                          >
                            Published
                          </li>
                          <li
                            className={styles.listItem21}
                            onClick={() => setSt(2)}
                          >
                            IsDeleted
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
                <div className={`col-6 fw-bold`}>Short Content List</div>
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
                        <th>Name</th>
                        <th>Category</th>
                        <th>Type</th>
                        <th>Rate</th>
                        <th>Status</th>
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
