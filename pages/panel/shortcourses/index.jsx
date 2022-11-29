import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"
import { SSRProvider } from "react-bootstrap";
import Header from "../../../src/components/panel/Header/Header.jsx"
import Menu from "../../../src/components/panel/Menu/Menu.jsx"
import dash from "../../../styles/panel/Dashboard.module.css"
import styles from "../../../styles/Home.module.css"
import co from "../../../styles/panel/Courses.module.css"
import men from "../../../styles/panel/Menu.module.css"
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import Table from 'react-bootstrap/Table';
import ReactPaginate from "react-paginate";
import {Button,Modal} from 'react-bootstrap';

const Courses = () => {
  const [value, onChange] = useState(new Date());

  const [title, setTitle] = useState("Type");
  const [title2, setTitle2] = useState("State");
  const [title3, setTitle3] = useState("Category");
  const [delid, setDelid] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {setShow(true); setDelid(id);}

  const dropdown = (event) => {
    setTitle(event.target.textContent)
    event.preventDefault()
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };
  const dropdown2 = (event) => {
    setTitle2(event.target.textContent)
    event.preventDefault()
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };
  const dropdown3 = (event) => {
    setTitle3(event.target.textContent)
    event.preventDefault()
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };
  const funcHandler = (e) => {
    e.stopPropagation();
    e.preventDefault()
    e.nativeEvent.stopImmediatePropagation();
  };
  const line = <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="2.5" viewBox="0 0 12.5 2.5"><line id="Line_92" data-name="Line 92" x2="10" transform="translate(1.25 1.25)" fill="none" stroke="#7a7d7c" stroke-linecap="round" stroke-width="2.5"/></svg>
  const tik = <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g id="keylines"><rect id="Rectangle_6198" data-name="Rectangle 6198" width="24" height="24" fill="#0092e4" opacity="0"/><path id="Path_82779" data-name="Path 82779" d="M20.59,5.83a1.28,1.28,0,0,0-1.81,0h0L9.23,15.39l-4-4A1.31,1.31,0,1,0,3.4,13.25l4.92,4.92a1.28,1.28,0,0,0,1.81,0h0L20.59,7.72a1.28,1.28,0,0,0,.07-1.81Z" fill="#7a7d7c"/></g></svg>
  const delet = <svg id="Component_28_1" data-name="Component 28 – 1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect id="Rectangle_6197" data-name="Rectangle 6197" width="24" height="24" fill="red" opacity="0"/><path id="Path_82778" data-name="Path 82778" d="M19.2,6.6H15.6V5.7A2.7,2.7,0,0,0,12.9,3H11.1A2.7,2.7,0,0,0,8.4,5.7v.9H4.8a.9.9,0,1,0,0,1.8h.9v9.9A2.7,2.7,0,0,0,8.4,21h7.2a2.7,2.7,0,0,0,2.7-2.7V8.4h.9a.9.9,0,0,0,0-1.8Zm-9-.9a.9.9,0,0,1,.9-.9h1.8a.9.9,0,0,1,.9.9v.9H10.2Zm6.3,12.6a.9.9,0,0,1-.9.9H8.4a.9.9,0,0,1-.9-.9V8.4h9Z" fill="#7a7d7c"/></svg>
  const edit = <svg id="Group_20967" data-name="Group 20967" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect id="Rectangle_6196" data-name="Rectangle 6196" width="24" height="24" transform="translate(0)" fill="#7a7d7c" opacity="0"/><path id="Path_82777" data-name="Path 82777" d="M20.092,12a.9.9,0,0,0-.9.9v5.4a.9.9,0,0,1-.9.9H5.7a.9.9,0,0,1-.9-.9V5.706a.9.9,0,0,1,.9-.9h5.4a.9.9,0,0,0,0-1.8H5.7A2.7,2.7,0,0,0,3,5.706V18.3A2.7,2.7,0,0,0,5.7,21H18.294a2.7,2.7,0,0,0,2.7-2.7V12.9A.9.9,0,0,0,20.092,12ZM6.6,12.686V16.5a.9.9,0,0,0,.9.9h3.814a.892.892,0,0,0,.638-.261L18.177,10.9h0l2.554-2.5a.9.9,0,0,0,0-1.272l0-.005L16.917,3.269a.9.9,0,0,0-1.272-.005l-.005.005L13.1,5.814h0L6.862,12.048A.892.892,0,0,0,6.6,12.686Zm9.678-7.51,2.545,2.545L17.547,9,15,6.453ZM8.4,13.055l5.333-5.334,2.546,2.546L10.945,15.6H8.4Z" fill="#7a7d7c"/></svg>

  const [txt, setTxt] = useState([
    {num:"1",Name:"Mark",Category:"Otto",Type:"2524",Rate:"4/5",Status:"Publish"},
    {num:"2",Name:"Mark",Category:"Otto",Type:"2524",Rate:"4/5",Status:"Awaiting"},
    {num:"3",Name:"Mark",Category:"Otto",Type:"2524",Rate:"2/5",Status:"Awaiting"},
    {num:"4",Name:"Mark",Category:"Otto",Type:"2524",Rate:"1/5",Status:"Awaiting"},
    {num:"5",Name:"Mark",Category:"Otto",Type:"2524",Rate:"3/5",Status:"Publish"},
    {num:"6",Name:"Mark",Category:"Otto",Type:"2524",Rate:"4.5/5",Status:"Publish"},
  ])
  const [pageNum, setPageNum] = useState(0);
  const itemPerPage = 5;
  const pageVisited = itemPerPage * pageNum;
  const pageCount = Math.ceil(txt.length / itemPerPage);
  const changePage = ({ selected }) => {
    setPageNum(selected);
  };
  const displayItems = txt
    .slice(pageVisited, pageVisited + itemPerPage)
    .map((i) => {
      return (
        <tr key={i.num}>
        <td>{i.num}</td>
        <td>{i.Name}</td>
        <td>{i.Category}</td>
        <td>{i.Type}</td>
        <td>{i.Rate}</td>
        {i.Status === "Publish" ?<td className={`${co.greenc}`}>{i.Status}</td>: <td className={`${co.orangec}`}>{i.Status}</td>}
        <td><div className={`${co.del}`} onClick={()=>handleShow(i.Rate)}>{delet}</div><div className={`${co.edit}`}>{edit}</div></td>
      </tr>
      );
    });



  return (
    <SSRProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${dash.container}`}>
        <div className={`row d-flex justify-content-between`}>
          <div className={`col-2 ${men.menucontainer}`}>
            <Link href="/panel/dashboard"><div className={`${men.logo}`}></div></Link>

            <Menu /></div>
          <div className={`col-lg-10 ${dash.maincontainer}`}>
            <Header />
            <div className={`col-12 ${co.coursetitle}`}><span className={``}>Short Content</span>
              <div className={``}><button type="button" className={`${co.coursebtn}`}>Create New</button></div></div>
            <div className={`col-12`}>


              <div className={`col-12 ${styles.searchBox} ${co.searchBox}`}>
                <div className={`row `}>
                  <div className={`col-6 col-xl-4 col-md-6 g-3 my-3`}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search by Name"
                      aria-label="Search by Name"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                  <div className={`col-6 col-xl-2 col-md-6 g-3 my-3`}>
                    <div className={styles.box2}>
                      <ul className={styles.boxList2} onClick={dropdown3}>
                        <Link passHref href="#" className={styles.listHeader2}>
                          <span onClick={funcHandler}>
                            {title3}
                          </span>
                        </Link>

                        <li className={styles.listItem21}>cat1</li>
                        <li className={styles.listItem21}>cat2</li>
                        <li className={styles.listItem21}>cat3</li>
                      </ul>
                    </div>
                  </div>
                  <div className={`col-6 col-xl-2 col-md-6 g-3 my-3`}>
                    <div className={styles.box2}>
                      <ul className={styles.boxList2} onClick={dropdown}>
                        <Link passHref href="#" className={styles.listHeader2}>
                          <span onClick={funcHandler}>
                            {title}
                          </span>
                        </Link>

                        <li className={styles.listItem21}>video</li>
                        <li className={styles.listItem21}>text</li>
                        <li className={styles.listItem21}>sound</li>
                      </ul>
                    </div>
                  </div>

                  <div className={`col-6 col-xl-2 col-md-6 g-3 my-3`}>
                    <div className={styles.box2}>
                      <ul className={styles.boxList2} onClick={dropdown2}>
                        <Link passHref href="#" className={styles.listHeader2}>
                          <span onClick={funcHandler}>
                            {title2}
                          </span>
                        </Link>

                        <li className={styles.listItem21}>Publish</li>
                        <li className={styles.listItem21}>Awaiting</li>
                      </ul>
                    </div>
                  </div>
                  <div className={`col-12 col-xl-2 col-md-12 g-3 my-3`}>
                    <button
                      type="button"
                      className={`btn btn-warning ${styles.logBut} ${co.searchbtn}`}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-12`}>
              <div className={`row ${co.coursesection}`}>
                <div className={`col-6 fw-bold`}>Course List</div>
                <div className={`col-6`}>
                  <div className={`${dash.datepicker}`}>
                    <DatePicker onChange={onChange} value={value} format={"MMMM yyyy"} />
                  </div>
                </div>
                <div className={`col-12`}>
                <Table  bordered hover responsive size="xl" className={`my-5`}>
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
      <tbody>
        {displayItems}
      </tbody>
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
          <h6 className={`${co.itemnum}`}>See {itemPerPage} from {txt.length} recoed</h6>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className={`${co.modalbody}`}>{delet} <h5 className={``}>Delete course</h5><h6 className={``}>Lorem ipsum, or lipsum as it is sometimes known</h6>
          <Button variant="outline-danger mt-3" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger mx-3 mt-3" onClick={handleClose}>
            Save Changes
          </Button></Modal.Body>
      </Modal>


    </SSRProvider>
  )
}
export default Courses;