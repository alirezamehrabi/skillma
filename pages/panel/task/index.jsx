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
import { Button, Modal } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Courses = () => {
  const [value, onChange] = useState(new Date());

  const [delid, setDelid] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => { setShow(true); setDelid(id); }


  const funcHandler = (e) => {
    e.stopPropagation();
    e.preventDefault()
    e.nativeEvent.stopImmediatePropagation();
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 8.5,
    speed: 500
  };

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
            <div className={`col-12 ${co.coursetitle}`}><span className={``}>Task</span>
              <div className={``}><button type="button" className={`${co.coursebtn}`}>Create New</button></div></div>

            <div className={`col-12`}>
              <div className={`row ${co.coursesection}`}>
                <div className={`col-12 ${co.datesection}`}><DatePicker onChange={onChange} value={value} format={"yyyy"} maxDetail={"decade"} />
                  <div className={`my-5`} />
                  <Slider {...settings}>
                    <div>
                      <h6>January</h6>
                    </div>
                    <div>
                      <h6>February</h6>
                    </div>
                    <div>
                      <h6>March</h6>
                    </div>
                    <div>
                      <h6>April</h6>
                    </div>
                    <div>
                      <h6>May</h6>
                    </div>
                    <div>
                      <h6>June</h6>
                    </div>
                    <div>
                      <h6>July</h6>
                    </div>
                    <div>
                      <h6>August</h6>
                    </div>
                    <div>
                      <h6>September</h6>
                    </div>
                    <div>
                      <h6>October</h6>
                    </div>
                    <div>
                      <h6>November</h6>
                    </div>
                    <div>
                      <h6>December</h6>
                    </div>
                  </Slider></div>


              </div>

            </div>
          <div className={`row mt-5`}>
            <div className={`col-lg-4 ${co.taskitemholder}`}><h6 className={`${co.tasktitle}`}>To Do</h6>
            <div className={`col-11`}>
              <div className={`col-12`}>
                <h5 className={`${co.tname}`}>Task Name</h5>
                <h6 className={`${co.tdes}`}>Lorem Ipsum is simply dummy text of the printingand typesetting.</h6>
                <div className={`${co.cname}`}>Course Name</div><div className={`${co.cdate}`}>Sep 10 ,2022</div>
                <div className={`${co.conholder}`}>
                <div className={`${co.conpicholder}`}>
              <Image src={require(`../../../src/assets/student/1.png`)} alt="1" height="" width="" />
            </div>
            <div className={`${co.conpicholder}`}>
              <Image src={require(`../../../src/assets/student/2.png`)} alt="1" height="" width="" />
            </div>
            <div className={`${co.conpicholder}`}>
              <Image src={require(`../../../src/assets/student/3.png`)} alt="1" height="" width="" />
            </div>
            <div className={`${co.conpicholder}`}>
              <Image src={require(`../../../src/assets/student/4.png`)} alt="1" height="" width="" />
            </div>
            <div className={`${co.conpicholder}`}>
              <Image src={require(`../../../src/assets/panel/dash/1.png`)} alt="1" height="" width="" />
            </div>
            <div className={`${co.conpicholdernum}`}>
              <Image src={require(`../../../src/assets/student/6.png`)} alt="1" height="" width="" /><span className={`${co.connum}`}>+124</span>
            </div>
            </div>
              </div>
              <div className={`col-12`}>1</div>
            </div>
            </div>
            <div className={`col-lg-4 ${co.taskitemholder}`}><h6 className={`${co.tasktitle}`}>Doing</h6>
            <div className={`col-11`}>
              <div className={`col-12`}>1</div>
              <div className={`col-12`}>1</div>
            </div>
            </div>
            <div className={`col-lg-4 ${co.taskitemholder}`}><h6 className={`${co.tasktitle}`}>Done</h6>
            <div className={`col-11`}>
              <div className={`col-12`}>1</div>
              <div className={`col-12`}>1</div>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className={`${co.modalbody}`}> <h5 className={``}>Delete course</h5><h6 className={``}>Lorem ipsum, or lipsum as it is sometimes known</h6>
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