import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SSRProvider } from "react-bootstrap";
import co from "../../../../styles/panel/course.module.css";;
import * as Yup from "yup";
import {Button,Modal,Table} from 'react-bootstrap';
import { Formik, Form, Field } from "formik";
import UploadBox from "../UploadBox/UploadBox"
const ContactSchema = Yup.object().shape({
  title: Yup.string().min(2, "Too Short!").required("Required")
});

const CourseIntended = ({ completeFormStep, sec}) => {

  const delet = <svg id="Component_28_1" data-name="Component 28 – 1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect id="Rectangle_6197" data-name="Rectangle 6197" width="24" height="24" fill="red" opacity="0"/><path id="Path_82778" data-name="Path 82778" d="M19.2,6.6H15.6V5.7A2.7,2.7,0,0,0,12.9,3H11.1A2.7,2.7,0,0,0,8.4,5.7v.9H4.8a.9.9,0,1,0,0,1.8h.9v9.9A2.7,2.7,0,0,0,8.4,21h7.2a2.7,2.7,0,0,0,2.7-2.7V8.4h.9a.9.9,0,0,0,0-1.8Zm-9-.9a.9.9,0,0,1,.9-.9h1.8a.9.9,0,0,1,.9.9v.9H10.2Zm6.3,12.6a.9.9,0,0,1-.9.9H8.4a.9.9,0,0,1-.9-.9V8.4h9Z" fill="#7a7d7c"/></svg>

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
  const file = <svg id="Group_21369" data-name="Group 21369" xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 32 30">
  <rect id="Rectangle_16896" data-name="Rectangle 16896" width="32" height="30" fill="#7a7d7c" opacity="0"/>
  <path id="Path_83065" data-name="Path 83065" d="M24.339,6.562H16.288l-.411-1.181a3.842,3.842,0,0,0-3.64-2.365H6.389A3.706,3.706,0,0,0,2.543,6.562V21.93a3.706,3.706,0,0,0,3.846,3.546h17.95a3.706,3.706,0,0,0,3.846-3.546V10.109A3.706,3.706,0,0,0,24.339,6.562ZM25.62,21.93a1.234,1.234,0,0,1-1.281,1.181H6.389A1.234,1.234,0,0,1,5.108,21.93V6.562A1.234,1.234,0,0,1,6.389,5.381h5.847a1.277,1.277,0,0,1,1.217.8l.693,1.937a1.277,1.277,0,0,0,1.217.805h8.975a1.234,1.234,0,0,1,1.281,1.181Z" transform="translate(0.636 0.754)" fill="#7a7d7c"/>
</svg>
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

    const notice = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
    <g id="Group_21226" data-name="Group 21226" transform="translate(1)">
      <rect id="Rectangle_6293" data-name="Rectangle 6293" width="40" height="40" transform="translate(-1)" fill="#de2f2f" opacity="0"/>
      <path id="Path_83053" data-name="Path 83053" d="M18.125,3A15.125,15.125,0,1,0,33.25,18.125,15.124,15.124,0,0,0,18.125,3Zm0,27.225a12.1,12.1,0,1,1,12.1-12.1A12.1,12.1,0,0,1,18.125,30.225Zm0-12.856a1.513,1.513,0,0,0-1.512,1.512v4.538a1.512,1.512,0,1,0,3.025,0V18.881A1.513,1.513,0,0,0,18.125,17.369Zm0-6.05a1.891,1.891,0,1,0,1.891,1.891A1.891,1.891,0,0,0,18.125,11.319Z" transform="translate(1.875 1.875)" fill="#de2f2f"/>
    </g>
  </svg>
  

  const ContactSchema = Yup.object().shape({
    title: Yup.string().min(2, "Too Short!").required("Required"),
    category: Yup.string().min(2, "Too Short!").required("Required"),
    level: Yup.string().min(4, "Too Short!").required("Required"),
  });
  return (
    <SSRProvider>
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
          {sec === false ? null : <div className={`col-2 ${co.passed}`}>
            <div className={`col-12`}>
              <div className={`${co.firstDiv}`}>
                <div className={`${co.secDiv}`} />
              </div>
            </div>
            <div className={`${co.border}`} />
            <div className={`col-12 ${co.navName}`}>Course Section</div>
          </div>}
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
        
        {sec === false ? null :<> <h6 className={`${co.landingDes}`}>default cover</h6>
        <div className={`row ${co.landingBg}`}>
            <div className={`col-2`}>
                <div className={`col-11`}>
                <div className="form-check">
                  <input
                    className={`form-check-input ${co.input}`}
                    type="checkbox"
                    value="1"
                    id="e1"
                  />
                  <label className="form-check-label" htmlFor="e1">
                    <figure className={`${co.catImg}`}>
                      <Image
                        src={require(`../../../assets/panel/course/1p.png`)}
                        alt="logo"
                        width=""
                        height=""
                      />
                    </figure>
                  </label>
            </div>
                </div>
            </div>
            <div className={`col-2`}>
                <div className={`col-11`}>
                <div className="form-check">
                  <input
                    className={`form-check-input ${co.input}`}
                    type="checkbox"
                    value="1"
                    id="e2"
                  />
                  <label className="form-check-label" htmlFor="e2">
                    <figure className={`${co.catImg}`}>
                      <Image
                        src={require(`../../../assets/panel/course/2p.png`)}
                        alt="logo"
                        width=""
                        height=""
                      />
                    </figure>
                  </label>
            </div>
                </div>
            </div>
            <div className={`col-2`}>
                <div className={`col-11`}>
                <div className="form-check">
                  <input
                    className={`form-check-input ${co.input}`}
                    type="checkbox"
                    value="1"
                    id="e3"
                  />
                  <label className="form-check-label" htmlFor="e3">
                    <figure className={`${co.catImg}`}>
                      <Image
                        src={require(`../../../assets/panel/course/3p.png`)}
                        alt="logo"
                        width=""
                        height=""
                      />
                    </figure>
                  </label>
            </div>
                    
                </div>
            </div>
            <div className={`col-2`}>
                <div className={`col-11`}>
                <div className="form-check">
                  <input
                    className={`form-check-input ${co.input}`}
                    type="checkbox"
                    value="1"
                    id="e4"
                  />
                  <label className="form-check-label" htmlFor="e4">
                    <figure className={`${co.catImg}`}>
                      <Image
                        src={require(`../../../assets/panel/course/4p.png`)}
                        alt="logo"
                        width=""
                        height=""
                      />
                    </figure>
                  </label>
            </div>
                    
                </div>
            </div>
            <div className={`col-2`}>
                <div className={`col-11`}>
                <div className="form-check">
                  <input
                    className={`form-check-input ${co.input}`}
                    type="checkbox"
                    value="1"
                    id="e5"
                  />
                  <label className="form-check-label" htmlFor="e5">
                    <figure className={`${co.catImg}`}>
                      <Image
                        src={require(`../../../assets/panel/course/5p.png`)}
                        alt="logo"
                        width=""
                        height=""
                      />
                    </figure>
                  </label>
            </div>
                    
                </div>
            </div>
            <div className={`col-2`}>
                <div className={`col-11`}>
                <div className="form-check">
                  <input
                    className={`form-check-input ${co.input}`}
                    type="checkbox"
                    value="1"
                    id="e6"
                  />
                  <label className="form-check-label" htmlFor="e6">
                    <figure className={`${co.catImg}`}>
                      <Image
                        src={require(`../../../assets/panel/course/6p.png`)}
                        alt="logo"
                        width=""
                        height=""
                      />
                    </figure>
                  </label>
            </div>
                    
                </div>
            </div>
            
        </div>
        <h6 className={`${co.landingDes}`}>or</h6> </>}
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
            <h5 className={`${co.landingCourseTitle}`}>Promotional video</h5>
            <h6 className={`mb-5 ${co.landingDes}`}>Students who watch a well-made promo video are 5X more likely to enroll in your course. <Link href="#">Learn how to make yours awesome!</Link></h6>
            <div className={`${co.uploadbox}`}>
              <UploadBox />
            </div>
          </div>
        </div>
        <div className={`d-flex justify-content-end ${co.corsebtn}`}>
        <button type="button" className={`${co.conBTN} ${co.nxt}`} onClick={completeFormStep}>
                Continue
              </button>
      </div>
      </div>
      </div>
      
    </SSRProvider>
  );
};
export default CourseIntended;
