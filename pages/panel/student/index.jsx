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
import StuSlider from '../../../src/components/panel/StuSlider/StuSlider.jsx';
import StuSlider2 from '../../../src/components/panel/StuSlider2/StuSlider2.jsx';
const Student = () => {
    const blue = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
    <g id="Group_21833" data-name="Group 21833" transform="translate(-334 -1017)">
      <rect id="Rectangle_16990" data-name="Rectangle 16990" width="48" height="48" rx="24" transform="translate(334 1017)" fill="#2d3ddf"/>
      <g id="Group_21829" data-name="Group 21829" transform="translate(344 1027)">
        <rect id="Rectangle_16988" data-name="Rectangle 16988" width="29" height="29" fill="#fff" opacity="0"/>
        <path id="Path_83091" data-name="Path 83091" d="M16.763,16.05H10.238a1.087,1.087,0,1,0,0,2.175h6.525a1.087,1.087,0,1,0,0-2.175Zm0-4.35h-4.35a1.088,1.088,0,1,0,0,2.175h4.35a1.088,1.088,0,0,0,0-2.175Zm2.175-6.525H17.654A3.262,3.262,0,0,0,14.587,3H12.413A3.262,3.262,0,0,0,9.346,5.175H8.063A3.263,3.263,0,0,0,4.8,8.438v13.05A3.263,3.263,0,0,0,8.063,24.75H18.938A3.263,3.263,0,0,0,22.2,21.487V8.438A3.263,3.263,0,0,0,18.938,5.175ZM11.325,6.262a1.088,1.088,0,0,1,1.088-1.087h2.175a1.088,1.088,0,0,1,1.088,1.087V7.35h-4.35Zm8.7,15.225a1.088,1.088,0,0,1-1.087,1.088H8.063a1.088,1.088,0,0,1-1.087-1.088V8.438A1.088,1.088,0,0,1,8.063,7.35H9.15V8.438a1.088,1.088,0,0,0,1.088,1.087h6.525A1.088,1.088,0,0,0,17.85,8.438V7.35h1.087a1.088,1.088,0,0,1,1.087,1.087Z" transform="translate(1 0.625)" fill="#fff"/>
      </g>
    </g>
  </svg>
  
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
                                    <div className={`row`}>
                                        <div className={`col-12`}>
                                            <h6 className={`${stu.stuTitle}`}>Recent short content</h6>
                                            <StuSlider/></div>
                                        <div className={`col-12`}>
                                        <h6 className={`fw-bold`}>New course</h6>
                                        <h6 className={`${stu.stuDes}`}>Let's learn something new today!</h6>
                                        <StuSlider2/>
                                        </div>
                                        <div className={`col-12`}>
                                        <h6 className={`fw-bold`}>Personality test</h6>
                                        <h6 className={`${stu.stuDes}`}>Be yourself and answer honestly to find out your personality type.</h6>
                                        <div className={`col-12 mb-4 mt-5`}>
                                        <div className={`d-flex ${stu.blue}`}>
                                            <div className={`${stu.first}`}>{blue}</div>
                                            <div className={`text-truncate ${stu.blueTitle}`}>QI test</div>
                                            <div className={`text-truncate ${stu.blueDes}`}>(Lorem Ipsum is simply dummy text)</div>
                                            <div className={`${stu.last}`}>
                                                <button className={`${stu.blueBtn}`}>Complete</button>
                                            </div>
                                        </div>
                                        </div>
                                        <div className={`col-12 mb-4`}>
                                        <div className={`d-flex ${stu.orange}`}>
                                            <div className={` ${stu.first}`}>{blue}</div>
                                            <div className={`text-truncate ${stu.blueTitle}`}>QI test</div>
                                            <div className={`text-truncate ${stu.blueDes}`}>(Lorem Ipsum is simply dummy text)</div>
                                            <div className={` ${stu.last}`}>
                                                <button className={`${stu.orangeBtn}`}>Complete</button>
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                    </div>
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