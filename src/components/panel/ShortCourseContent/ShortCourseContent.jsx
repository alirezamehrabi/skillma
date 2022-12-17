import Image from "next/image";
import Link from "next/link";
import { useState,createRef } from "react";
import { SSRProvider,Table } from "react-bootstrap";
import co from "../../../../styles/panel/course.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import UploadBox from "../UploadBox/UploadBox"


const ContactSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .required("Required"),
  category: Yup.string()
    .min(2, "Too Short!")
    .required("Required"),
  level: Yup.string()
    .min(4, "Too Short!")
    .required("Required"),
});

const Courses = () => {
  const [firstName, setFirstName] = useState('');

  const handleNameChange = event => {
    setFirstName(event.target.value);
  };
  const file = <svg id="Group_21369" data-name="Group 21369" xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 32 30">
  <rect id="Rectangle_16896" data-name="Rectangle 16896" width="32" height="30" fill="#7a7d7c" opacity="0"/>
  <path id="Path_83065" data-name="Path 83065" d="M24.339,6.562H16.288l-.411-1.181a3.842,3.842,0,0,0-3.64-2.365H6.389A3.706,3.706,0,0,0,2.543,6.562V21.93a3.706,3.706,0,0,0,3.846,3.546h17.95a3.706,3.706,0,0,0,3.846-3.546V10.109A3.706,3.706,0,0,0,24.339,6.562ZM25.62,21.93a1.234,1.234,0,0,1-1.281,1.181H6.389A1.234,1.234,0,0,1,5.108,21.93V6.562A1.234,1.234,0,0,1,6.389,5.381h5.847a1.277,1.277,0,0,1,1.217.8l.693,1.937a1.277,1.277,0,0,0,1.217.805h8.975a1.234,1.234,0,0,1,1.281,1.181Z" transform="translate(0.636 0.754)" fill="#7a7d7c"/>
</svg>
const del = (
    <svg
      id="Component_28_48"
      data-name="Component 28 – 48"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={co.delsvg}
    >
      <rect
        id="Rectangle_6197"
        data-name="Rectangle 6197"
        width="24"
        height="24"
        fill="#7a7d7c"
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
const see = <svg id="Component_44_9" className={co.editsvg} data-name="Component 44 – 9" xmlns="http://www.w3.org/2000/svg"  width="23" height="22" viewBox="0 0 23 22">
<defs>
  <clipPath id="clip-path">
    <rect id="Rectangle_2658" data-name="Rectangle 2658" width="23" height="22" fill="#7a7d7c"/>
  </clipPath>
</defs>
<g id="Group_18439" data-name="Group 18439" clipPath="url(#clip-path)">
  <g id="Group_18438" data-name="Group 18438">
    <g id="Group_18437" data-name="Group 18437" clipPath="url(#clip-path)">
      <path id="Path_9429" data-name="Path 9429" d="M20.359,11.424C18.6,7.337,15.288,4.8,11.716,4.8S4.832,7.337,3.073,11.424a.873.873,0,0,0,0,.7c1.76,4.086,5.071,6.621,8.643,6.621s6.884-2.535,8.643-6.621a.873.873,0,0,0,0-.7M11.716,17c-2.762,0-5.376-2-6.884-5.228C6.34,8.54,8.954,6.545,11.716,6.545S17.092,8.54,18.6,11.773C17.092,15,14.478,17,11.716,17m0-8.713A3.485,3.485,0,1,0,15.2,11.773a3.485,3.485,0,0,0-3.485-3.485m0,5.228a1.743,1.743,0,1,1,1.742-1.742,1.742,1.742,0,0,1-1.742,1.742" transform="translate(-0.033 -0.925)" fill="#7a7d7c"/>
    </g>
  </g>
</g>
</svg>

  return (
    <SSRProvider>
      <div className={`row ${co.preview}`}>
      <div className={`row `}>
        <h6 className={`${co.landingCourseTitle}`}>Short Content</h6>
        <h6 className={`${co.landingDes}`}>Here’s where you add course topics</h6>
        
        <div className={co.modal}>
          <div className={`row ${co.upholder}`}>
            <div className={`${co.uploadbox}`}>
              <UploadBox />
            </div>
            <h6 className={`fw-bold mt-5`}>Your Files</h6>
            <Table bordered hover responsive size="xl" className={`my-5`}>
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
            </Table>
        
          </div>
        </div>
      </div>
              <div className={`col-12 d-flex justify-content-end mt-4`}>
                <Link href="/panel/shortcourses">
              <button type="button" className={`${co.conBTN} ${co.nxt}`}>
                Save
              </button>
              </Link>
              </div>
           
      </div>
    </SSRProvider>
  );
};
export default Courses;
