import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"
import { SSRProvider } from "react-bootstrap";
import Header from "../../../src/components/panel/Header/Header.jsx"
import Menu from "../../../src/components/panel/Menu/Menu.jsx"
import dash from "../../../styles/panel/Dashboard.module.css"
import styles from "../../../styles/Home.module.css"
import co from "../../../styles/panel/Courses.module.css"
import men from "../../../styles/panel/Menu.module.css"
import about from "../../../styles/About.module.css"
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import Table from 'react-bootstrap/Table';
import ReactPaginate from "react-paginate";
import { Button, Modal } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { getItem } from "../../../src/core/services/storage/storage.js";
import Loader from "../../../src/components/Loader/Loader.jsx";


const ContactSchema = Yup.object().shape({
  title: Yup.string()

    .min(2, "Too Short!")

    .required("Required"),

  people: Yup.string()

    .required("Required"),
  description: Yup.string()

    .min(4, "Too Short!")

    .required("Required"),
  startTime: Yup.string()

    .required("Required"),
  endTime: Yup.string()

    .required("Required"),
});

const Courses = (props) => {

  const [courseDt, setCourseDt] = useState()
  const fetchcourse = async (p) => {
     const token = getItem("token")
     try {
       const result = await fetch(
         `${process.env.webURL}/Task/GetMainTasks`,{headers: { Authorization: 'Bearer '+  token}}
       );
       const json = await result.json();
       console.log(json.data)
       setCourseDt(json.data)
       return json.data;
     } catch (error) {
       console.log(error);
     }
   };
   useEffect(() => {
     fetchcourse();
   }, []);



  console.log(props.data)
  const [value, onChange] = useState(new Date());
  const [value1, onChange1] = useState(new Date());
  const [value2, onChange2] = useState(new Date());

  const [delid, setDelid] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => { setShow(true); setDelid(id); }


  const funcHandler = (e) => {
    e.stopPropagation();
    e.preventDefault()
    e.nativeEvent.stopImmediatePropagation();
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5.5,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1.5,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  }

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
              <div className={``}><button type="button" className={`${co.coursebtn}`} onClick={handleShow}>Create New</button></div></div>
            
            {/* <div className={`col-12`}>
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

            </div> */}

            <div className={`row mt-5`}>
            {courseDt !== undefined ? courseDt.map((i,index)=>{
              return(
<div className={`col-xl-4 ${co.taskitemholder}`} key={index}>
                <Link href={`/panel/task/${i.id}`}>
                <div className={`col-11`}>
                  <div className={`col-12`}>
                    <h5 className={`${co.tname}`}>{i.taskName}</h5>
                    <h6 className={`${co.tdes}`}>{i.description}</h6>
                    <div className={`${co.cname}`}>{i.courseName}</div><div className={`${co.cdate}`}>{i.startDate}</div>
                    <div className={`${co.conholder}`}>
                      {i.studentPics.map((j,index)=>{
                        return(
                        <div className={`${co.conpicholder}`}>
                        <Image src={j.picName} alt="1" height="100" width="100" key={index}/>
                      </div>
                        )
                      })}
                      <div className={`${co.conpicholdernum}`}>
                        <Image src={require(`../../../src/assets/student/6.png`)} alt="1" height="" width="" /><span className={`${co.connum}`}>{i.studentCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
              )
            }):<Loader/>}



{/* 
              <div className={`col-xl-4 ${co.taskitemholder}`}><h6 className={`${co.tasktitle}`}>To Do</h6>
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
                </div>
              </div>
              <div className={`col-xl-4 ${co.taskitemholder}`}><h6 className={`${co.tasktitle}`}>Doing</h6>
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
                </div>
              </div>
              <div className={`col-xl-4 ${co.taskitemholder}`}><h6 className={`${co.tasktitle}`}>Done</h6>
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
                </div>
              </div> */}
            </div>
            <div className={co.seeMore}>
              <Link href={`/panel/tasklist`}>See All</Link>
            </div>
          </div>
        </div>
      </div>

      <Modal size="xl" show={show} onHide={handleClose} className={`${co.modalholder}`}>
        <Modal.Body className={`${co.modalbody} ${co.modalbody2}`}>
          <h5 className={``}>Create new task</h5>



          <Formik
            initialValues={{
              title: "",
              people: "",
              startDate: "",
              endDate: "",
              startTime: "",
              endTime: "",
              description: "",
            }}
            validationSchema={ContactSchema}
            onSubmit={(values) => {
              // same shape as initial values

              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className={co.form}>
                <label className={`${co.label}`}>
                  Title
                <Field
                  name="title"
                  type="text"
                  placeholder="Event Title"
                  className={`col-12 mx-auto ${co.field}`}
                />

                {errors.title && touched.title ? (
                  <div className={co.err}>{errors.title}</div>
                ) : null}
                </label>
                <label className={`${co.label}`}>
                People
                <Field
                  name="people"
                  placeholder="People"
                  className={`col-12 mx-auto ${co.field}`}
                />

                {errors.people && touched.people ? (
                  <div className={co.err}>{errors.people}</div>
                ) : null}
                </label>
                <div className={`row d-flex justify-content-between`}>
                <label className={`col-lg-6 ${co.label} ${co.labelleft}`}>Start Date<br/><DatePicker onChange={onChange1} value={value1} className={`col-12 ${co.datepick}`} /></label><label className={`col-lg-6 ${co.label}`}>End Date<br/><DatePicker className={`col-12 ${co.datepick}`} onChange={onChange2} value={value2} /></label>
                </div>
                <div className={`row d-flex justify-content-between`}>
                  <div className={`col-lg-6 ${co.timefield}`}>
                  <label className={`col-12 ${co.label} ${co.labelleft}`}>
                    Start Time
                    <Field
                      name="startTime"
                      placeholder="10:00"
                      className={`${co.field} `}
                    />
                  
                    {errors.startTime && touched.startTime ? (
                      <div className={co.err}>{errors.startTime}</div>
                    ) : null}
</label>
                  </div>
                  <div className={`col-lg-6 ${co.timefield}`}>
                  <label className={`col-12 ${co.label}`}>
                    End Time
                    <Field
                      name="endTime"
                      placeholder="10:00"
                      className={`${co.field} `}
                    />

                    {errors.endTime && touched.endTime ? (
                      <div className={co.err}>{errors.endTime}</div>
                    ) : null}
                    </label>
                  </div>
                </div>
                <label className={`col-12 ${co.label} ${co.labelleft}`}>
                Description
                <Field
                  name="description"
                  placeholder="description"
                  as="textarea"
                  className={`col-12 mx-auto ${co.field}`}
                />

                {errors.description && touched.description ? (
                  <div className={co.err}>{errors.description}</div>
                ) : null}
                </label>
                <label for="upload-photo" className={co.uplodlabel}>Attach File</label>
                <input type="file" name="photo" id="upload-photo" className={co.uplod} />
                <div className={co.divider} />
                <h6 className={`${co.notify}`}>Notification Setting</h6>
                <label>

                  <Field type="checkbox" name="jobType" value="ck1" className={`${co.chek}`} />

                  Send SMS

                </label><br />
                <label>

                  <Field type="checkbox" name="jobType1" value="ck2" className={`${co.chek}`} />

                  Send Email

                </label>
              </Form>
            )}

          </Formik>









          <Button variant="warning mt-4 mb-3" onClick={handleClose} className={`${co.frmBTN}`}>
            Create
          </Button></Modal.Body>
      </Modal>


    </SSRProvider>
  )
}
export default Courses;