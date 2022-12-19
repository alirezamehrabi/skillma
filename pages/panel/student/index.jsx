import React, { useState } from 'react'
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import dash from "../../../styles/panel/Dashboard.module.css"
import men from "../../../styles/panel/Menu.module.css"
import stu from "../../../styles/panel/Student.module.css"
import { SSRProvider } from "react-bootstrap";
import Header from "../../../src/components/panel/Header/Header.jsx"
import Menu from "../../../src/components/panel/MenuStu/Menu.jsx"
import Calendar from 'react-calendar';
const Student = () => {
    const courses = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="_Layer_" data-name="&lt;Layer&gt;"><rect className="cls-1" width="24" height="24" /><path d="M19,6.48H17.72l-.32-1a3,3,0,0,0-2.84-2H9.44A3,3,0,0,0,6.6,5.53l-.32,1H5a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-8a3,3,0,0,0-2.95-3Zm1,11a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1v-8a1,1,0,0,1,1-1H7A1,1,0,0,0,8,7.8l.54-1.64a1,1,0,0,1,1-.68h5.12a1,1,0,0,1,1,.68L16.1,7.8a1,1,0,0,0,.9.68h2a1,1,0,0,1,1,1Zm-8-9a4,4,0,1,0,4,4A4,4,0,0,0,12,8.48Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14.48Z" /></g></g></svg>
    const short = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24" /><path d="M20.38,2.93a11.94,11.94,0,0,0-2-.17A11.72,11.72,0,0,0,12,4.63,12,12,0,0,0,3.62,3a.91.91,0,0,0-.76.92v11a.92.92,0,0,0,.9.93l.17,0a9.94,9.94,0,0,1,7.54,1.75l.11.06h.1a.79.79,0,0,0,.64,0h.1l.11-.06a10,10,0,0,1,7.54-1.85.92.92,0,0,0,1.06-.74,1,1,0,0,0,0-.17v-11A.91.91,0,0,0,20.38,2.93ZM11.09,15.08A11.7,11.7,0,0,0,5.6,13.73H4.69V4.58H5.6a9.94,9.94,0,0,1,5.49,1.65Zm8.22-1.32H18.4a12,12,0,0,0-5.49,1.35V6.23A9.94,9.94,0,0,1,18.4,4.58h.91Zm1.07,3.8a11,11,0,0,0-2-.18A11.81,11.81,0,0,0,12,19.26a11.81,11.81,0,0,0-6.4-1.88,11,11,0,0,0-2,.18.9.9,0,0,0-.76,1h0a.92.92,0,0,0,1.07.72,9.94,9.94,0,0,1,7.54,1.75.93.93,0,0,0,1.06,0,9.94,9.94,0,0,1,7.54-1.75.92.92,0,0,0,1.07-.72.91.91,0,0,0-.75-1.05Z" /></g></svg>
    const connection = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="_Layer_" data-name="&lt;Layer&gt;"><rect className="cls-1" width="24" height="24" /><path d="M12.26,12.18a4.1,4.1,0,1,0-5.41,0,6.55,6.55,0,0,0-3.85,6,.82.82,0,0,0,1.64,0,4.92,4.92,0,0,1,9.83,0,.82.82,0,0,0,1.64,0A6.55,6.55,0,0,0,12.26,12.18Zm-2.71-.59A2.46,2.46,0,1,1,12,9.13,2.46,2.46,0,0,1,9.55,11.59Zm8,.26A4.09,4.09,0,0,0,14.47,5a.82.82,0,1,0,0,1.63,2.46,2.46,0,0,1,2.46,2.46,2.43,2.43,0,0,1-1.23,2.12.84.84,0,0,0-.41.69.81.81,0,0,0,.37.71l.32.21.1.06a5.71,5.71,0,0,1,3.28,5.22.82.82,0,0,0,1.64,0A7.39,7.39,0,0,0,17.53,11.85Z" /></g></g></svg>
    const income = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g id="Group_16433" data-name="Group 16433" transform="translate(-1474 -585)"><rect id="Rectangle_1221" data-name="Rectangle 1221" width="32" height="32" transform="translate(1474 585)" fill="#fff" /><path id="money-stack" d="M20.346,15.739H1.921a.921.921,0,1,0,0,1.842H20.346a.921.921,0,1,0,0-1.842Zm0,3.685H1.921a.921.921,0,1,0,0,1.842H20.346a.921.921,0,1,0,0-1.842ZM5.606,6.527a.921.921,0,1,0,.921.921A.921.921,0,0,0,5.606,6.527ZM18.5,1H3.764A2.764,2.764,0,0,0,1,3.764v7.37A2.764,2.764,0,0,0,3.764,13.9H18.5a2.764,2.764,0,0,0,2.764-2.764V3.764A2.764,2.764,0,0,0,18.5,1Zm.921,10.133a.921.921,0,0,1-.921.921H3.764a.921.921,0,0,1-.921-.921V3.764a.921.921,0,0,1,.921-.921H18.5a.921.921,0,0,1,.921.921ZM11.133,4.685A2.764,2.764,0,1,0,13.9,7.449,2.764,2.764,0,0,0,11.133,4.685Zm0,3.685a.921.921,0,1,1,.921-.921A.921.921,0,0,1,11.133,8.37Zm5.527-1.842a.921.921,0,1,0,.921.921A.921.921,0,0,0,16.661,6.527Z" transform="translate(1478.866 589.866)" fill="#2d3ddf" /></g></svg>
    const edit = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24" /><path d="M20.09,12a.91.91,0,0,0-.9.9v5.4a.9.9,0,0,1-.9.9H5.7a.9.9,0,0,1-.9-.9V5.71a.9.9,0,0,1,.9-.9h5.4a.9.9,0,1,0,0-1.8H5.7A2.7,2.7,0,0,0,3,5.71V18.3A2.7,2.7,0,0,0,5.7,21H18.29A2.7,2.7,0,0,0,21,18.3V12.9A.9.9,0,0,0,20.09,12ZM6.6,12.69V16.5a.9.9,0,0,0,.9.9h3.81a.9.9,0,0,0,.64-.26l6.23-6.23h0L20.73,8.4a.9.9,0,0,0,0-1.27h0L16.92,3.27a.9.9,0,0,0-1.27,0h0L13.1,5.81h0L6.86,12.05A.9.9,0,0,0,6.6,12.69Zm9.68-7.51,2.54,2.54L17.55,9,15,6.45ZM8.4,13.05l5.33-5.33,2.55,2.55L11,15.6H8.4Z" /></g></svg>
    const [value, onChange] = useState(new Date());
    const [formstep, setFormstep] = useState(0)
  const completeFormStep = () => {
    setFormstep((formstep) => formstep + 1);
    console.log(formstep + "normal")
  };
  const backFormStep = () => {
    setFormstep((formstep) => formstep - 1);
    console.log(formstep)
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
                        <div className={`col-12`}>
                            <div className={`row justify-content-start`}>
                                <div className={`col-md-8 ${dash.leftitemholder}`}>
                                    
                                </div>
                                <div className={`col-md-4 ${dash.rightitemholder}`}>
                                <div className={`col-12 mb-5 p-2`}>
                                    {formstep === 0 && <div className={`col-12 ${stu.live} mx-auto text-center`}>
                                        <Image src={require(`../../../src/assets/panel/profile/small.png`)} alt="" />
                                        <h6 className={`fw-bold ${stu.liveTitle}`}>Dani Beaumont</h6>
                                        <h6 className={`${stu.liveWork}`}>ui/ux designer</h6>
                                        <div className={``}>
                                            <button className={`${stu.liveBtn}`} onClick={completeFormStep}>join to live</button>
                                        </div>
                                    </div>}
                                    {formstep === 1 && <div className={`col-12 ${stu.live2} mx-auto text-center`} onClick={backFormStep}>
                                    <Image src={require(`../../../src/assets/panel/profile/bell.png`)} alt="" />
                                        <h6 className={`${stu.liveJoin}`}>No live Now</h6>
                                    </div>}
                                    
                                </div>
                                    <div className={`col-12 mb-5`}><Calendar onChange={onChange} value={value} /></div>
                                    <div className={`col-12 mt-5 ${dash.timelinepart}`}>
                                        <h6 className={`col-12 mt-5 ${dash.tltitle}`}>TimeLine</h6>
                                        <div className={`col-12 mb-4 ${dash.timelineitem}`}><h5 className={`${dash.timelinename}`}>Lorem Ipsum is simply dummy text<br />(Task Title)</h5>
                                            <h6 className={`${dash.timelinetitle}`}>course name</h6>
                                            <h6 className={`${dash.timelineclock}`}>10:00 AM</h6>
                                        </div>
                                        <div className={`col-12 mb-4`}>
                                        <h6 className={`${dash.timelineremain}`}>//In next 10 minute</h6>
                                        </div>
                                        <div className={`col-12 mb-4 ${dash.timelineitem}`}><h5 className={`${dash.timelinename}`}>Lorem Ipsum is simply dummy text<br />(Task Title)</h5>
                                            <h6 className={`${dash.timelinetitle}`}>course name</h6>
                                            <h6 className={`${dash.timelineclock}`}>10:00 AM</h6>
                                        </div>
                                        <div className={`col-12 mb-4 ${dash.timelineitem}`}><h5 className={`${dash.timelinename}`}>Lorem Ipsum is simply dummy text<br />(Task Title)</h5>
                                            <h6 className={`${dash.timelinetitle}`}>course name</h6>
                                            <h6 className={`${dash.timelineclock}`}>10:00 AM</h6>
                                        </div>
                                        <div className={`col-12 mb-4 ${dash.timelineitem}`}><h5 className={`${dash.timelinename}`}>Lorem Ipsum is simply dummy text<br />(Task Title)</h5>
                                            <h6 className={`${dash.timelinetitle}`}>course name</h6>
                                            <h6 className={`${dash.timelineclock}`}>10:00 AM</h6>
                                        </div>
                                        <div className={`col-12 mb-4 ${dash.timelineitem}`}><h5 className={`${dash.timelinename}`}>Lorem Ipsum is simply dummy text<br />(Task Title)</h5>
                                            <h6 className={`${dash.timelinetitle}`}>course name</h6>
                                            <h6 className={`${dash.timelineclock}`}>10:00 AM</h6>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SSRProvider>
    )
}
export default Student;