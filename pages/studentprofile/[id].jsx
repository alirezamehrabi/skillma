import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import teach from "../../styles/Teach.module.css";
import stu from "../../styles/Student.module.css";
import Menu from "../../src/components/Menu/Menu";
import Footer from "../../src/components/Footer/Footer";
import { Button, SSRProvider } from "react-bootstrap";
import Loader from "../../src/components/Loader/Loader";
import React, { useContext } from "react";
import DataContext from "../../src/Context/DataContext";
import Moment from "react-moment";
import {connectrequest} from "../api/redux/connectreducer"
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userprofile } from "../api/redux/profilereducer";
export async function getStaticPaths() {
  return { paths:[], fallback: 'blocking' };
}
export async function getStaticProps(context) {
  const paths = context.params.id;
  const request = await fetch(
    `${process.env.webURL}/User/GetUserDetailById?id=${paths}`
  );
 try{
  const studet = await request.json();
  return {
    props: {
      ...{ studet },
      revalidate: 5
    },
  };
 }
 catch(e){
  return {
      redirect: {
        destination: "/404",
      },
    }
 }
}
const StudentProfile = (props) => {
const router = useRouter()
const data1= useSelector((profile)=>profile.profile.data.data)
const dispatch = useDispatch()
useEffect(()=>{
dispatch(userprofile(router.query.id))
},[])

    const course = <svg id="Group_20373" data-name="Group 20373" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <rect id="Rectangle_3457" data-name="Rectangle 3457" width="24" height="24" fill="blue" opacity="0"/>
    <path id="Path_9761" data-name="Path 9761" d="M20.383,2.929A11.991,11.991,0,0,0,18.4,2.755,11.84,11.84,0,0,0,12,4.629,11.835,11.835,0,0,0,5.6,2.8a11.991,11.991,0,0,0-1.984.174.915.915,0,0,0-.759.914v10.97a.914.914,0,0,0,.9.927.869.869,0,0,0,.169-.013,9.965,9.965,0,0,1,7.542,1.746l.109.064h.1a.835.835,0,0,0,.64,0h.1l.109-.064a9.968,9.968,0,0,1,7.542-1.847.913.913,0,0,0,1.056-.745.956.956,0,0,0,.014-.169V3.788A.915.915,0,0,0,20.383,2.929Zm-9.3,12.149A11.764,11.764,0,0,0,5.6,13.725H4.687V4.584a7.742,7.742,0,0,1,.914,0,9.932,9.932,0,0,1,5.485,1.645Zm8.227-1.316H18.4a11.764,11.764,0,0,0-5.485,1.353V6.229A9.932,9.932,0,0,1,18.4,4.584a7.742,7.742,0,0,1,.914,0Zm1.07,3.794a11.991,11.991,0,0,0-1.984-.174A11.832,11.832,0,0,0,12,19.256a11.832,11.832,0,0,0-6.4-1.874,11.991,11.991,0,0,0-1.984.174A.913.913,0,0,0,2.858,18.6v.005a.915.915,0,0,0,1.07.722,9.965,9.965,0,0,1,7.542,1.746.913.913,0,0,0,1.06,0,9.965,9.965,0,0,1,7.542-1.746.9.9,0,1,0,.316-1.773Z" fill="#2d3ddf"/>
  </svg>
  
    const bookmark = <svg  xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><defs><style>{`.cls-1{fill:none}.cls-2,.cls-3{opacity:0}.cls-3,.cls-4{fill:url(#Unnamed_Pattern)}`}</style><pattern id="Unnamed_Pattern" data-name="Unnamed Pattern" width="24" height="24" patternUnits="userSpaceOnUse" viewBox="0 0 24 24"><rect className="cls-1" width="24" height="24"/><rect className="cls-2" width="24" height="24"/><path d="M18.3,5.7V20.1a.9.9,0,0,1-1.35.78L12,18,7.05,20.88A.9.9,0,0,1,5.7,20.1V5.7A2.7,2.7,0,0,1,8.4,3h7.2A2.7,2.7,0,0,1,18.3,5.7Zm-1.8,0a.9.9,0,0,0-.9-.9H8.4a.9.9,0,0,0-.9.9V18.54l4.05-2.34a.9.9,0,0,1,.9,0l4.05,2.34Z"/></pattern></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-3" width="24" height="24"/><path className="cls-4" d="M15.6,3H8.4A2.7,2.7,0,0,0,5.7,5.7V20.1a.9.9,0,0,0,1.35.78L12,18,17,20.88a.9.9,0,0,0,1.35-.78V5.7A2.7,2.7,0,0,0,15.6,3Zm.9,15.54L12.45,16.2a.9.9,0,0,0-.9,0L7.5,18.54V5.7a.9.9,0,0,1,.9-.9h7.2a.9.9,0,0,1,.9.9Z"/></g></svg>
    const cer = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24"/><path d="M13.7,8.13H7.86a1,1,0,0,0,0,1.95H13.7a1,1,0,0,0,0-1.95Z"/><path d="M5.92,17.57a.93.93,0,0,1-1-.88V4.44a.92.92,0,0,1,1-.88h9.72a.93.93,0,0,1,1,.88V10.1a6.93,6.93,0,0,1,1.94.43V4.44a2.79,2.79,0,0,0-2.92-2.63H5.92A2.79,2.79,0,0,0,3,4.44V16.69a2.79,2.79,0,0,0,2.92,2.63H9.78a6.49,6.49,0,0,1-.42-1.75Z"/><path d="M13.7,5.7H7.86a1,1,0,0,0,0,2H13.7a1,1,0,0,0,0-1.95Z"/><path d="M20.92,19.53,19.3,16.74a4,4,0,0,0,.5-2,4.16,4.16,0,1,0-8.32,0,4.09,4.09,0,0,0,.5,2l-1.61,2.79a.59.59,0,0,0,.21.81.67.67,0,0,0,.3.08h1.71l.87,1.46a.45.45,0,0,0,.11.13.57.57,0,0,0,.41.17h.08a.6.6,0,0,0,.43-.29l1.15-2,1.15,2a.57.57,0,0,0,.43.29h.09a.58.58,0,0,0,.41-.17.29.29,0,0,0,.1-.12l.87-1.46H20.4a.62.62,0,0,0,.52-.3A.6.6,0,0,0,20.92,19.53Zm-7,.91-.53-.89a.59.59,0,0,0-.5-.29h-1l.85-1.48a4.1,4.1,0,0,0,2.12,1.1Zm-1.3-5.67a3,3,0,1,1,3,3A3,3,0,0,1,12.67,14.77Zm5.68,4.49a.6.6,0,0,0-.51.29l-.53.89-.9-1.58a4.17,4.17,0,0,0,2.11-1.09l.85,1.47Z"/></g></svg>

    const { loading } = useContext(DataContext);
    const [res, setRes]= useState()
    return !loading ? (
    <SSRProvider>
      <div className={styles.container}>
        <Head>
          <title>Student Profile</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <main>
          <Menu />
          <section className={`row container mx-auto mb-5 ${teach.aboutTeacher}`}>
            <div className={`col-12`}>
                <div className={`row`}>
            <div className={`col-7 ${teach.teachHolder}`}>
                <figure className={`${teach.teacherPic}`}>
                    <Image src={data1 !== undefined && data1.picName} alt="student pic" height="100" width="100" />
                </figure>
                <h6 className={`${teach.name}`}>{data1 !== undefined && data1.fullName} <span className={`${teach.follow}`}>({data1 !== undefined && data1.connectionCount} Followers)</span></h6>
                <h6 className={`${teach.role}`}>{data1 !== undefined && data1.feild}</h6>
                
              {res !== 200 ? <Button variant="warning" onClick={()=>{dispatch(connectrequest(router.query.id)).then((r)=>{setRes(r.payload);dispatch(userprofile(router.query.id))})}} className={`${teach.connectbtn} ${teach.btnp}`}>
              Connect
            </Button>: <Button disabled className={`${teach.connectbtn} ${teach.btnp}`}>
              Requested
            </Button>}
                <Button variant="outline-warning" className={`${stu.work} ${teach.btnp}`}>
                  Open to Work
                </Button>
            </div>
            <div className={`col-4 ${teach.about}`}>About me</div>
                </div>
            </div>
            <div className={`col-12 ${teach.teachDes}`}>{data1 !== undefined && data1.aboutMe}</div>
            <div className={`col-xl-8  col-lg-10 col-md-11 col-sm-12 ${stu.con}`}>
            
            <h6 className={`${stu.contitle}`}>Connection:</h6>
            {data1 !== undefined && data1.connectionPics.map((i,index)=>{
              return(
                <div className={`${stu.conpicholder}`} key={index}>
              <Image src={i.picName} alt="1" height="100" width="100" />
            </div>
              )
            })}
            <div className={`${stu.conpicholder}`}>
              <Image src={require(`../../src/assets/student/6.png`)} alt="1" height="" width="" /><span className={`${stu.connum}`}>+{data1 !== undefined && data1.connectionCount}</span>
            </div>
            </div>
          </section>
          <section className={`row container mx-auto mb-5 ${stu.skill}`}>
            <div className={`${stu.skilltitle}`}>Skills</div>
            <div className={`row ${stu.skillholder}`}>
              {data1 !== undefined && data1.skills.split(",").map((i,index)=>{
                return(
                  <div className={`col-md-4 mx-auto`} key={index}>{bookmark} <span className={``}>{i}</span></div>
                )
              })}
            </div>
          </section>
          <section className={`row container mx-auto mb-5 ${stu.certificate}`}>
          <div className={`${stu.certitle}`}>Certifications</div>
            <div className={`row ${stu.cerholder}`}>
              {data1 !== undefined && data1.certificates.map((i)=>{
                return(
                    <div className={`col-xl-4 col-md-6 col-sm-12 g-4`} key={i.id}>{cer}<h5 className={`${stu.cername}`}>{i.title}</h5><h6 className={`text-truncate ${stu.cerdes}`}>{i.description}</h6>
              <button type="button" className={`${stu.cerbtn}`}>View</button></div>
                )
              })}
            </div>
          </section>
          <section className={`row container mx-auto mb-5 ${stu.certificate}`}>
          <div className={`${stu.segtitle}`}>Recomendation</div>
          {data1 !== undefined && data1.recomendations.map((i,index)=>{
            return(
              <div className={`col-12 mb-4 ${stu.segitem}`} key={index}>
              <div className={`row`}>
                <div className={`col-sm-4 ${stu.leftseg}`}>
                <div className={`${stu.segimg}`}>
              <Image src={require(`../../src/assets/student/r1.png`)} alt="1" height="" width="" />
            </div>
            <h5 className={`${stu.segname}`}>{i.name}</h5>
            <h6 className={`${stu.segrole}`}>{i.feild}</h6>
            <h6 className={`${stu.segdate}`}><Moment format="D MMM YYYY" withTitle>{i.createdAt}</Moment></h6>
                </div>
                <div className={`col-sm-8 ${stu.rightseg}`}><span className={`${stu.recdes}`}>{i.description}</span>
                {/* <Link href="#">See More</Link> */}
                </div>
              </div>
            </div>
            )
          })}
          </section>
          <Footer />
        </main>
      </div>
    </SSRProvider>
  ):(<Loader />)
};

export default StudentProfile;
