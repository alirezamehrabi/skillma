import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SSRProvider,Modal } from "react-bootstrap";
import Header from "../../../src/components/panel/Header/Header.jsx";
import Menu from "../../../src/components/panel/MenuStu/Menu.jsx";
import dash from "../../../styles/panel/Dashboard.module.css";
import st from "../../../styles/panel/Student.module.css";
import co from "../../../styles/panel/Courses.module.css";
import men from "../../../styles/panel/Menu.module.css";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StudentTask = () => {
  const [value, onChange] = useState(new Date());
  const [show, setShow] = useState(false);
  const [delid, setDelid] = useState();
  const handleClose = () => setShow(false);
  const handleShow = (id) => {setShow(true); setDelid(id);}
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1.5,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [data, setData] = useState([
    {
      id: 1,
      title: "Design",
      des: "Lorem ipsum (task title)",
      day: "Tus,10",
      time: "09:00",
      state: 0,
    },
    {
      id: 2,
      title: "Design",
      des: "Lorem ipsum (task title)",
      day: "Tus,10",
      time: "09:00",
      state: 1,
    },
    {
      id: 3,
      title: "Design",
      des: "Lorem ipsum (task title)",
      day: "Tus,10",
      time: "09:00",
      state: 1,
    },
    {
      id: 4,
      title: "Design",
      des: "Lorem ipsum (task title)",
      day: "Tus,10",
      time: "09:00",
      state: 1,
    },
    {
      id: 5,
      title: "Design",
      des: "Lorem ipsum (task title)",
      day: "Tus,10",
      time: "09:00",
      state: 1,
    },
  ]);

  const [formstep, setFormstep] = useState(0)
  const completeFormStep = () => {
    setFormstep((formstep) => formstep + 1);
    console.log(formstep + "normal")
  };
  const backFormStep = () => {
    setFormstep((formstep) => formstep - 1);
    console.log(formstep)
  };

  

  const [btnindex,setbtnIndex]=useState([])
  const handelcheck=(val)=>{ 
  if(btnindex.includes(val)){
  const filteredNumbers = btnindex.filter((number) => number !== val);
  setbtnIndex(filteredNumbers)
  }else{
  setbtnIndex(prevState => [...prevState, val])
  }
  }


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
          <div
            className={`col-lg-10 ${dash.maincontainer} ${st.maincontainer}`}
          >
            <Header />
            {formstep === 0 && 
            <div className={`col-12`}>
            <div className={`row ${co.coursesection}`}>
              <div className={`col-12 ${co.datesection}`}>
                <DatePicker
                  onChange={onChange}
                  value={value}
                  format={"yyyy"}
                  maxDetail={"decade"}
                />
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
                </Slider>
              </div>
            </div>
            <div className={`row ${st.taskholder}`}>


            {data.map((i,index)=>{
    return(<>
<div className={`col-12 ${st.taskit}`} key={i.id}>
                <div className={`col-12`}>
                  <div className={`d-flex`}>
                    <div className={`text-truncate ${st.small}`}>
                      <div className={i.state ===0 ? `${st.dot}`: `${st.dot} ${st.dot1}`} />
                      <span onClick={i.state ===1 ? completeFormStep: null}>Design</span>
                    </div>
                    <div className={`text-truncate ${st.big}`}>
                      Lorem ipsum (task title)
                    </div>
                    <div className={`text-truncate ${st.small}`}>Tus,10</div> 
                    <div className={`text-truncate ${st.small}`}>09:00</div>
                    
                    <div className={`text-truncate ${st.small}`}>{i.state ===0 ? <span className={`${st.stateColor}`}>Finish</span>: 
                    <button className={btnindex.includes(index) ? `${st.stateDone}`:`${st.stateNotDone}`} onClick={()=>handelcheck(index)}>Done</button>}</div>

                  </div>
                </div>
              </div>
      </>
    )
  })}
            </div>
          </div>}
            {formstep === 1 && 
            <div className={`col-12`}>
              <div className={`row`}>
            <div className={`col-12`}>
            <div className={`row ${st.taskHead}`}>
            <div className={`col-2 fw-bold`}>Task Name:</div>
            <div className={`col-10 ${st.taskHeadDes}`}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter.</div>
            </div>
            </div>
            <div className={`col-12 ${st.editor}`}>
              <h6 className={``}>Description</h6>
              <div className={`col-12`}>Editor</div>
            </div>
            <div className={`d-flex justify-content-end`}>
            <button className={`${st.taskBtn}`} onClick={handleShow}>
                  Send
              </button>
              </div>
              </div>
              </div>}
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className={`${st.modalbody}`}>gfgfg</Modal.Body>
      </Modal>
    </SSRProvider>
  );
};
export default StudentTask;