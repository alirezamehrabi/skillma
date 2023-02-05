import Image from "next/image";
import Link from "next/link";
import { useState,createRef } from "react";
import { SSRProvider,Modal,Button   } from "react-bootstrap";
import co from "../../../../styles/panel/course.module.css";
import { Formik, Form, Field,Table  } from "formik";
import * as Yup from "yup";
import UploadBox from "../UploadBox/UploadBox";
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic'

const ReactQuill = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
const ContactSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .required("Required"),
  categoryId: Yup.string()
    .min(2, "Too Short!")
    .required("Required"),
  level: Yup.string()
    .min(4, "Too Short!")
    .required("Required"),
});

const Courses = ({prev,sec,data  }) => {
  const [firstName, setFirstName] = useState('');

  const functionHandler = (data) => {console.log(data)
    prev(data);
    
    }
    const [f1, setF1] = useState("");
    const [whatLearn, setWhatLearn] = useState("");
    const [whatLearn6, setWhatLearn6] = useState("");
    const [f3, setF3] = useState("");
    const [f4, setF4] = useState("");
    const [f5, setF5] = useState("");
    const [f6, setF6] = useState("");
    const [f7, setF7] = useState("");
    const [f8, setF8] = useState("");
    const [f9, setF9] = useState("");
    const [f10, setF10] = useState("");
    const [f11, setF11] = useState("");
    const [f13, setF13] = useState("");
    const [f14, setF14] = useState("");
    const [f15, setF15] = useState("");
    const [f16, setF16] = useState("");
    const [f17, setF17] = useState("");
    const [title, setTitle] = useState("");
    const [categoryId , setCategoryId ] = useState("");
    const [f12, setF12] = useState("");
    const [level, setLevel] = useState("");
    const [sec1, setSec1] = useState("");
    const [sec2, setSec2] = useState("");
    const [lecture, setLecture] = useState("");
    const [price, setPrice] = useState("");
    const [percent, setPercent] = useState("");
    const [discount, setDiscount] = useState("");
    const [freeinputckb, setFreeinputckb] = useState(false);
    const handleCkFree=(e)=>{
      console.log(e.target.checked)
      setFreeinputckb(!freeinputckb)
    }
    const handleNameChangetitle = (event) => {
      setTitle(event.target.value);
    };
    const handleNameChangewhatLearn = (event) => {
      setWhatLearn(event.target.value);
    };
    const handleNameChangewhatLearn6 = (event) => {
      setWhatLearn6(event.target.value);
    };
    const handleNameChangeCat = (event) => {
      setCategoryId(event.target.value);
    };
     const handleNameChangesec1 = (event) => {
      setSec1(event.target.value);
    };
    const handleNameChangeF13 = (event) => {
      setF13(event.target.value);
    };
    const handleNameChangesec2 = (event) => {
      setSec2(event.target.value);
    };
    const handleNameChangeprice = (event) => {
      setPrice(event.target.value);
    };
    const handleNameChangelecture = (event) => {
      setLecture(event.target.value);
    };
    const handleNameChangediscount = (event) => {
      setDiscount(event.target.value);
    };
    const handleNameChangepercent = (event) => {
      setPercent(event.target.value);
    };
    const handleNameChange = (event) => {
      setF1(event.target.value);
    };
    const handleNameChange14 = (event) => {
      setF14(event.target.value);
    };
    const handleNameChange15 = (event) => {
      setF15(event.target.value);
    };
    const handleNameChange16 = (event) => {
      setF16(event.target.value);
    };
    const handleNameChange5 = (event) => {
      setF5(event.target.value);
    };
    const handleNameChange6 = (event) => {
      setF6(event.target.value);
    };
    const handleNameChange7 = (event) => {
      setF7(event.target.value);
    };
    const handleNameChange8 = (event) => {
      setF8(event.target.value);
    };
    const handleNameChange9 = (event) => {
      setF9(event.target.value);
    };
    const handleNameChange10 = (event) => {
      setF10(event.target.value);
    };
    const handleNameChange11 = (event) => {
      setF11(event.target.value);
    };
    const handleNameChange12 = (event) => {
      setF12(event.target.value);
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
  
    const [value1, onChange1] = useState(new Date());
    const [value2, onChange2] = useState(new Date());
  
    const tik = <svg id="Group_20738" data-name="Group 20738" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54">
    <rect id="Rectangle_6118" data-name="Rectangle 6118" width="54" height="54" transform="translate(0 0)" fill="#3a8944" opacity="0"/>
    <path id="Path_51926" data-name="Path 51926" d="M28.917,16.835,20.176,25.6l-3.362-3.362a2.037,2.037,0,1,0-2.873,2.873l4.788,4.809a2.041,2.041,0,0,0,2.873,0L31.79,19.728a2.038,2.038,0,0,0,.011-2.882l-.011-.011A2.037,2.037,0,0,0,28.917,16.835ZM23.375,3A20.375,20.375,0,1,0,43.75,23.375,20.374,20.374,0,0,0,23.375,3Zm0,36.675a16.3,16.3,0,1,1,16.3-16.3A16.3,16.3,0,0,1,23.375,39.675Z" transform="translate(3.792 3.792)" fill="#3a8944"/>
  </svg>
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
    const file = (
      <svg
        id="Group_21369"
        data-name="Group 21369"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="30"
        viewBox="0 0 32 30"
      >
        <rect
          id="Rectangle_16896"
          data-name="Rectangle 16896"
          width="32"
          height="30"
          fill="#7a7d7c"
          opacity="0"
        />
        <path
          id="Path_83065"
          data-name="Path 83065"
          d="M24.339,6.562H16.288l-.411-1.181a3.842,3.842,0,0,0-3.64-2.365H6.389A3.706,3.706,0,0,0,2.543,6.562V21.93a3.706,3.706,0,0,0,3.846,3.546h17.95a3.706,3.706,0,0,0,3.846-3.546V10.109A3.706,3.706,0,0,0,24.339,6.562ZM25.62,21.93a1.234,1.234,0,0,1-1.281,1.181H6.389A1.234,1.234,0,0,1,5.108,21.93V6.562A1.234,1.234,0,0,1,6.389,5.381h5.847a1.277,1.277,0,0,1,1.217.8l.693,1.937a1.277,1.277,0,0,0,1.217.805h8.975a1.234,1.234,0,0,1,1.281,1.181Z"
          transform="translate(0.636 0.754)"
          fill="#7a7d7c"
        />
      </svg>
    );
    const see = (
      <svg
        id="Component_44_9"
        className={co.editsvg}
        data-name="Component 44 – 9"
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="22"
        viewBox="0 0 23 22"
      >
        <defs>
          <clipPath id="clip-path">
            <rect
              id="Rectangle_2658"
              data-name="Rectangle 2658"
              width="23"
              height="22"
              fill="#7a7d7c"
            />
          </clipPath>
        </defs>
        <g id="Group_18439" data-name="Group 18439" clipPath="url(#clip-path)">
          <g id="Group_18438" data-name="Group 18438">
            <g
              id="Group_18437"
              data-name="Group 18437"
              clipPath="url(#clip-path)"
            >
              <path
                id="Path_9429"
                data-name="Path 9429"
                d="M20.359,11.424C18.6,7.337,15.288,4.8,11.716,4.8S4.832,7.337,3.073,11.424a.873.873,0,0,0,0,.7c1.76,4.086,5.071,6.621,8.643,6.621s6.884-2.535,8.643-6.621a.873.873,0,0,0,0-.7M11.716,17c-2.762,0-5.376-2-6.884-5.228C6.34,8.54,8.954,6.545,11.716,6.545S17.092,8.54,18.6,11.773C17.092,15,14.478,17,11.716,17m0-8.713A3.485,3.485,0,1,0,15.2,11.773a3.485,3.485,0,0,0-3.485-3.485m0,5.228a1.743,1.743,0,1,1,1.742-1.742,1.742,1.742,0,0,1-1.742,1.742"
                transform="translate(-0.033 -0.925)"
                fill="#7a7d7c"
              />
            </g>
          </g>
        </g>
      </svg>
    );
    const edit = (
      <svg
        id="Component_29_43"
        data-name="Component 29 – 43"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={co.editsvg}
      >
        <rect
          id="Rectangle_6196"
          data-name="Rectangle 6196"
          width="24"
          height="24"
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

    const notice = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="41"
        height="41"
        viewBox="0 0 41 41"
      >
        <g
          id="Group_21226"
          data-name="Group 21226"
          transform="translate(0.5 0.5)"
        >
          <rect
            id="Rectangle_6293"
            data-name="Rectangle 6293"
            width="40"
            height="40"
            stroke="#1d7dd8"
            strokeWidth="1"
            opacity="0"
          />
          <path
            id="Path_83053"
            data-name="Path 83053"
            d="M18.125,3A15.125,15.125,0,1,0,33.25,18.125,15.124,15.124,0,0,0,18.125,3Zm0,27.225a12.1,12.1,0,1,1,12.1-12.1A12.1,12.1,0,0,1,18.125,30.225Zm0-12.856a1.513,1.513,0,0,0-1.512,1.512v4.538a1.512,1.512,0,1,0,3.025,0V18.881A1.513,1.513,0,0,0,18.125,17.369Zm0-6.05a1.891,1.891,0,1,0,1.891,1.891A1.891,1.891,0,0,0,18.125,11.319Z"
            transform="translate(1.875 1.875)"
            fill="#1d7dd8"
            stroke="#1d7dd8"
            strokeWidth="1"
          />
        </g>
      </svg>
    );
    const del = (
      <svg
        id="Component_39_1"
        data-name="Component 39 – 1"
        xmlns="http://www.w3.org/2000/svg"
        width="47"
        height="56"
        viewBox="0 0 47 56"
      >
        <rect
          id="Rectangle_6297"
          data-name="Rectangle 6297"
          width="47"
          height="56"
          rx="8"
          fill="#fafafa"
        />
        <rect
          id="Rectangle_6197"
          data-name="Rectangle 6197"
          width="28"
          height="28"
          transform="translate(10 14)"
          fill="#2d3ddf"
          opacity="0"
        />
        <path
          id="Path_82778"
          data-name="Path 82778"
          d="M22.978,7.4H18.489V6.3A3.334,3.334,0,0,0,15.122,3H12.878A3.334,3.334,0,0,0,9.511,6.3V7.4H5.022a1.1,1.1,0,1,0,0,2.2H6.144V21.7A3.334,3.334,0,0,0,9.511,25h8.978a3.334,3.334,0,0,0,3.367-3.3V9.6h1.122a1.1,1.1,0,1,0,0-2.2ZM11.756,6.3a1.111,1.111,0,0,1,1.122-1.1h2.244a1.111,1.111,0,0,1,1.122,1.1V7.4H11.756Zm7.856,15.4a1.111,1.111,0,0,1-1.122,1.1H9.511a1.111,1.111,0,0,1-1.122-1.1V9.6H19.611Z"
          transform="translate(10 14)"
          fill="#2d3ddf"
          opacity="0.45"
        />
      </svg>
    );
    const plus = (
      <svg
        id="Group_21233"
        data-name="Group 21233"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
      >
        <rect
          id="Rectangle_6294"
          data-name="Rectangle 6294"
          width="28"
          height="28"
          fill="#7a7d7c"
          opacity="0"
        />
        <path
          id="Path_83054"
          data-name="Path 83054"
          d="M22.858,12.267H14.915V4.324a1.324,1.324,0,0,0-2.648,0v7.943H4.324a1.324,1.324,0,0,0,0,2.648h7.943v7.943a1.324,1.324,0,0,0,2.648,0V14.915h7.943a1.324,1.324,0,0,0,0-2.648Z"
          transform="translate(0.53 0.53)"
          fill="#7a7d7c"
        />
      </svg>
    );
    const [value, setValue] = useState('');
      const [formstep, setFormstep] = useState(2)
      const completeFormStep = (value) => {
          setFormstep((formstep) => formstep + 1);
        
        console.log(formstep + "normal")
      };
      const backFormStep = () => {
        setFormstep((formstep) => formstep - 1);
        // console.log(formstep)
      };
      const [formstep1, setFormstep1] = useState(0)
      const completeFormStep1 = () => {
        setFormstep1((formstep1) => formstep1 + 1);
        console.log(formstep1 + "online")
      };
      const backFormStep1 = () => {
        setFormstep1((formstep1) => formstep1 - 1);
        console.log(formstep1)
      };


  return (
    <SSRProvider>
      <div className={`row ${co.preview}`}>
      <Formik
          initialValues={{
            discount:"",
            title:"",
            checked: [],
            checked2: [],
            categoryId:"",
            title:"",
            level:"",
            whatLearn:"",
            whatLearn6:"",
            value:"",
            price:"",
            percent:""
          
          }}
          // validationSchema={ContactSchema}
          onSubmit={(values) => {
            // "id": 0,
            // "categoryId": 0,
            // "title": title,
            // "pictureName": "string",
            // "introductionVideoName": "string",
            // "createDate": "2023-01-25T11:04:32.674Z",
            // "teacherId": 0,
            // "description": "string",
            // "views": 0,
            // "price": 0,
            // "duration": 0,
            // "isVerified": true,
            // "level": 0,
            // "progress": 0,
            // "whatYouLearn": "string",
            // "status": 0
            // functionHandler(values)

            
            console.log(values,"val");
          }}
        >
          {({ errors, touched,values,handleChange ,field}) => (
            <Form className={co.form} >





{/* form1 - coursePreview */}
<div className={formstep === 0 ? `${co.active}` : `${co.noactive}`}>
<h5 className={`${co.prevTitle}`}>Create new course</h5>

              <label htmlFor="title" className={`${co.label}`}>How about a working title?</label>
              <Field
                name="title"
                type="text"
                placeholder="e.g. Learn  ui/ux design"
                className={`col-12 mx-auto ${co.txtfeild}`}
                onKeyUp={handleNameChangetitle}
                maxLength="160"
              />
              <span className={`${co.txtlength}`}>{160- title.length}</span>
              {errors.title && touched.title ? (
                <div className={co.err}>{errors.title}</div>
              ) : null}
              <label htmlFor="categoryId" className={`${co.label}`}>What category best fits the knowledge you'll share?</label>
              <Field
                as="select"
                name="categoryId"
                placeholder="Select category"
                onKeyUp={handleNameChangeCat}
                className={`col-12 mx-auto ${co.txtfeild} ${co.selectFeild}`} defaultValue={'DEFAULT'} 
              >
              <option hidden value="DEFAULT" >Select Category</option>
              {data.map((i)=>{
                return <option value={i.id} key={i.id}>{i.categoryName}</option>
              })}
                </Field>
              {errors.categoryId && touched.categoryId ? (
                <div className={co.err}>{errors.categoryId}</div>
              ) : null}
              <label htmlFor="level" className={`${co.label}`}>select level</label>
              <Field
                as="select"
                name="level"
                placeholder="select level"
                className={`col-12 mx-auto ${co.txtfeild} ${co.selectFeild}`} defaultValue={'DEFAULT'} 
              >
              <option hidden value="DEFAULT" >Select Level</option>
              <option value="0">Beginer</option>
              <option value="1">Intermediate</option>
              <option value="2">Expert</option>
              </Field>
              {errors.level && touched.level ? (
                <div className={co.err}>{errors.level}</div>
              ) : null}
              <label>
              <Field type="checkbox" name="checked" value="true" />
              This Course is Free
            </label>
              <div className={`col-12 d-flex justify-content-end mt-4`}>
              {(values.level === "" || values.categoryId === "" || values.title === "") ? <>please fill</> : <button  type="submit" onClick={completeFormStep}  className={`${co.conBTN} ${co.nxt}`}>
                Continue
              </button>}
              </div>
              </div>

{/* form2 CourseIntended */}
<div className={formstep === 1 ? `${co.active}` : `${co.noactive}`}>
<div className={`row container mx-auto ${co.blueDes}`}>
        <div className={`col-1`}>{notice}</div>
        <div className={`col-11 ${co.noticedes}`}>
          The following descriptions will have a direct impact on your course
          performance. These descriptions will help learners decide if your
          course is right for them
        </div>
      </div>
      <div className={`row ${co.preview}`}>
        <div className={`row mx-auto justify-content-center`}>
          <div className={`col-2`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`${co.border}`} />
            <div className={`col-12 ${co.navName}`}>Intended learners</div>
          </div>
          
          <div className={`col-2 ${co.disable}`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`${co.border}`} />
            <div className={`col-12 ${co.navName}`}>Course Content</div>
          </div>
          <div className={`col-2 ${co.disable}`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`${co.border}`} />
            <div className={`col-12 ${co.navName}`}>Course Landing</div>
          </div>
          <div className={`col-2 ${co.disable}`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`col-12 ${co.navName}`}>Price & discount</div>
          </div>
        </div>

        
              <h5 className={`fw-bold`}>
                What will students learn in your course?
              </h5>
              <label htmlFor="whatLearn" className={`${co.label} ${co.lbl1}`}>
                You must enter at least 4 learning objectives or outcomes that
                learners can expect to achieve after completing your course
              </label>
              <Field
                name="whatLearn"
                type="text"
                placeholder="e.g. Learn  ui/ux design"
                className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                onKeyUp={handleNameChangewhatLearn}
                maxLength="160"
              />
              <span className={`${co.txtlength} ${co.txtlength2}`}>
                {160 - f1.length}
              </span>
              {errors.email && touched.email ? (
                <div className={co.err}>{errors.email}</div>
              ) : null}
              <Field
                name="whatLearn2"
                type="text"
                placeholder="e.g. Learn  ui/ux design"
                className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                onKeyUp={handleNameChangeF13}
                maxLength="160"
              />
              <span className={`${co.txtlength} ${co.txtlength2}`}>
                {160 - f13.length}
              </span>
              <Field
                name="whatLearn3"
                type="text"
                placeholder="e.g. Learn  ui/ux design"
                className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                onChange={handleNameChange14}
                maxLength="160"
              />
              <span className={`${co.txtlength} ${co.txtlength2}`}>
                {160 - f14.length}
              </span>
              <Field
                name="whatLearn4"
                type="text"
                placeholder="e.g. Learn  ui/ux design"
                className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                onChange={handleNameChange15}
                maxLength="160"
              />
              <span className={`${co.txtlength} ${co.txtlength2}`}>
                {160 - f15.length}
              </span>
              <Field
                name="whatLearn5"
                type="text"
                placeholder="e.g. Learn  ui/ux design"
                className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                onChange={handleNameChange16}
                maxLength="160"
              />
              <span className={`${co.txtlength} ${co.txtlength2}`}>
                {160 - f16.length}
              </span>
              <div className={`${co.delBtn}`}>{del}</div>
              <div className={`col-12 mx-auto text center ${co.addBtn}`}>
                {plus}Add more
              </div>
              <h5 className={`fw-bold`}>
                What are the requirements or prerequisites for taking your
                course?
              </h5>
              <label className={`${co.label} ${co.lbl1}`}>
                List the required skills, experience, tools or equipment
                learners should have prior to taking your course.
              </label>
              <Field
                name="whatLearn6"
                type="text"
                placeholder="e.g. Learn  ui/ux design"
                className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                onKeyUp={handleNameChangewhatLearn6}
                maxLength="160"
              />
              <span className={`${co.txtlength} ${co.txtlength2}`}>
                {160 - f5.length}
              </span>
              <div className={`col-12 mx-auto text center ${co.addBtn}`}>
                {plus}Add more
              </div>
              <h5 className={`fw-bold mb-4`}>Description</h5>
              <ReactQuill theme="snow" value={value} onChange={setValue} />
              <div className="my-2"/>
              <div className={`col-12 d-flex justify-content-end mt-5`}>
              <button type="button" onClick={backFormStep} className={`${co.conBTN} ${co.nxt} mx-3`}>
                  Previous
                </button>
                {(values.whatLearn === "" || values.whatLearn6 ==="") ? <>please fill</> : <button  type="submit" onClick={completeFormStep}  className={`${co.conBTN} ${co.nxt}`}>
                Continue
              </button>}

              </div>
      </div>

      </div>



{/* form4 CourseContent */}


<div className={formstep === 2 ? `${co.active}` : `${co.noactive}`}>
<div className={`row ${co.preview}`}>
        <div className={`row mx-auto justify-content-center`}>
          <div className={`col col-xxl-2 ${co.passed}`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`${co.border}`} />
            <div className={`col-12 ${co.navName}`}>Intended learners</div>
          </div>
          <div className={`col col-xxl-2`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`${co.border}`} />
            <div className={`col-12 ${co.navName}`}>Course Content</div>
          </div>
          <div className={`col col-xxl-2 ${co.disable}`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`${co.border}`} />
            <div className={`col-12 ${co.navName}`}>Course Landing</div>
          </div>
          <div className={`col col-xxl-2 ${co.disable}`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`col-12 ${co.navName}`}>Price & discount</div>
          </div>
        </div>
      </div>
      <div className={`row ${co.courseContent}`}>
        <div className={`col-12  mt-5`}>
        <h6 className={`fw-bold`}>course content</h6>
          <h6 className="mb-4">Here is where you add course topics</h6>
            <UploadBox />
        </div>
        <div className={`d-flex justify-content-end ${co.corsebtn}`}>
        <button type="button" onClick={backFormStep} className={`${co.conBTN} ${co.nxt} mx-3`}>
                  Previous
                </button>
          <button type="button" onClick={completeFormStep} className={`${co.conBTN} ${co.nxt}`}>
            Continue
          </button>
        </div>
      </div>
      </div>





{/* form5 CourseLanding */}

<div className={formstep === 3 ? `${co.active}` : `${co.noactive}`}>
<div className={`row container mx-auto ${co.redDes}`}>
        <div className={`col-1`}>{notice}</div>
        <div className={`col-11 ${co.noticedes}`}><span>
          The following descriptions will have a direct impact on your course
          performance. These descriptions will help learners decide if your
          course is right for them</span>
          <Link href="#">Update your profile</Link>
        </div>
      </div>
      <div className={`row ${co.preview} ${co.courseLanding}`}>
        <div className={`row mx-auto justify-content-center`}>
          <div className={`col col-xxl-2 ${co.passed}`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`${co.border}`} />
            <div className={`col-12 ${co.navName}`}>Intended learners</div>
          </div>
          
          <div className={`col col-xxl-2 ${co.passed}`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`${co.border}`} />
            <div className={`col-12 ${co.navName}`}>Course Content</div>
          </div>
          <div className={`col col-xxl-2`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`${co.border}`} />
            <div className={`col-12 ${co.navName}`}>Course Landing</div>
          </div>
          <div className={`col col-xxl-2 ${co.disable}`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`col-12 ${co.navName}`}>Price & discount</div>
          </div>
        </div>
        <div className={`row `}>
        <h5 className={`${co.landingTitle}`}>Course landing page</h5>
        <h6 className={`${co.landingCourseTitle}`}>Course image</h6>
        <h6 className={`${co.landingDes}`}>Upload your course image here. It must meet our course image quality standards to be accepted.</h6>
        <div className={co.modal}>
          <div className={`row ${co.upholder}`}>
            <div className={`${co.uploadbox}`}>
              <UploadBox />
            </div>
            <h6 className={`fw-bold mt-5`}>Your Files</h6>
            {/* <Table bordered hover responsive size="xl" className={`my-5`}>
              <thead>
                <tr className={co.tablehead}>
                  <th>File Name</th>
                  <th>Data</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className={co.tablebody}>
                  <td>{file} production ID_4884238.Pdf</td>
                  <td>sep 13 , 2022</td>
                  <td>
                    {del} {see}
                  </td>
                </tr>
              </tbody>
            </Table> */}
            <h5 className={`${co.landingCourseTitle}`}>Promotional video</h5>
            <h6 className={`mb-5 ${co.landingDes}`}>Students who watch a well-made promo video are 5X more likely to enroll in your course. <Link href="#">Learn how to make yours awesome!</Link></h6>
            <div className={`${co.uploadbox}`}>
              <UploadBox />
            </div>
          </div>
        </div>




        
        <div className={`d-flex justify-content-end ${co.corsebtn}`}>
        <button type="button" onClick={backFormStep} className={`${co.conBTN} ${co.nxt} mx-3`}>
                  Previous
                </button>
        <button type="button" className={`${co.conBTN} ${co.nxt}`} onClick={completeFormStep}>
                Continue
              </button>
      </div>
      </div>
      </div>
      </div>



{/* form6 CoursePrice */}
<div className={formstep === 4 ? `${co.active}` : `${co.noactive}`}>
<div className={`row ${co.preview}`}>
        <div className={`row mx-auto justify-content-center`}>
          <div className={`col col-xxl-2 ${co.passed}`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`${co.border}`} />
            <div className={`col-12 ${co.navName}`}>Intended learners</div>
          </div>
          <div className={`col col-xxl-2 ${co.passed}`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`${co.border}`} />
            <div className={`col-12 ${co.navName}`}>Course Content</div>
          </div>
          <div className={`col col-xxl-2 ${co.passed}`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`${co.border}`} />
            <div className={`col-12 ${co.navName}`}>Course Landing</div>
          </div>
          <div className={`col col-xxl-2`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`col-12 ${co.navName}`}>Price & discount</div>
          </div>
        </div>
        <div className={`row `}>
        <h6 className={`${co.priceTitle}`}>Price</h6>
        
                <div className={`col-md-6 position-relative`}>
              <Field
                name="price"
                type="text"
                placeholder="Insert Course price"
                className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                onKeyUp={handleNameChangeprice}
              />
              <span className={`${co.txtlength} ${co.txtlength2}`}>
                $
              </span>
              {errors.price && touched.price ? (
                <div className={co.err}>{errors.price}</div>
              ) : null}
              </div>
              <label className={`${co.label} ${co.chkboxlbl}`}>
              <Field type="checkbox" name="checked2" value="true" />
              This Course is Free
            </label>
              <div className={`row`}>
              <div className={`col-md-6 position-relative`}>
              <label htmlFor="discount" className={`col-12 ${co.label} d-block`}>Discount</label>

              <Field
                name="discount"
                type="text"
                placeholder="discount code"
                className={`col-12 col-md-11 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                onKeyUp={handleNameChangediscount}
              />
              {errors.discount && touched.discount ? (
                <div className={co.err}>{errors.discount}</div>
              ) : null}
              </div>
              <div className={`col-md-6 position-relative`}>
              <label htmlFor="percent" className={`col-12 ${co.label} d-block`}>percent discount</label>
              
              <Field
                as="select"
                name="percent"
                placeholder="percent discount"
                className={`col-12 mx-auto ${co.txtfeild} ${co.selectFeild}`} defaultValue={'DEFAULT'} 
              >
              <option hidden value="DEFAULT" >percent discount</option>
              <option value="10%">10%</option>
              <option value="20%">20%</option>
              <option value="50%">50%</option>
              </Field>
                </div>
                <div className={`row`}>
              <div className={`col-md-6 position-relative`}>
              <label htmlFor="subject" className={`${co.label}`}>Active  time</label>
              <DatePicker onChange={onChange1} value={value1} className={`col-11 ${co.datepick}`} />
              </div>
              <div className={`col-md-6 position-relative mb-5`}>
              <label htmlFor="subject" className={`${co.label}`}>Expire time</label>
              <DatePicker className={`col-11 ${co.datepick}`} onChange={onChange2} value={value2} />
              </div>
              </div>
              </div>
        <div className={`d-flex justify-content-end ${co.corsebtn}`}>
        <button type="button" onClick={backFormStep} className={`${co.conBTN} ${co.nxt} mx-3`}>
                  Previous
                </button>
              {(values.price === "" || values.percent === "" || values.discount === "") ? <>please fill</> : <button  type="submit" onClick={handleShow}  className={`${co.conBTN} ${co.nxt}`}>
                Save
              </button>}
              <Modal show={show} onHide={handleClose}>
        <Modal.Body className={co.stepModal}><div>{tik}</div>
        <h6>Your  course  successfully  has been send</h6>
        <h6>The lesson will be published by the admin after checking</h6>
<Link href="/panel/courses">
        <button type="button" className={`mt-3 mb-4 ${co.conBTN} ${co.nxt}`}>
                See Course
              </button>
              </Link>
        </Modal.Body>
      </Modal>
      </div>
      </div>
      </div>

      </div>
            </Form>
          )}
        </Formik>
      </div>
    </SSRProvider>
  );
};
export default Courses;
