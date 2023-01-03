import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SSRProvider } from "react-bootstrap";
import Header from "../../../src/components/panel/Header/Header.jsx";
import CourseChoice from "../../../src/components/panel/CourseChoice/CourseChoice";
import Coursepreview from "../../../src/components/panel/Coursepreview/Coursepreview";
import CourseIntended from "../../../src/components/panel/CourseIntended/CourseIntended";
import CourseSection from "../../../src/components/panel/CourseSection/CourseSection";
import CourseContent from "../../../src/components/panel/CourseContent/CourseContent";
import CourseLanding from "../../../src/components/panel/CourseLanding/CourseLanding";
import CoursePrice from "../../../src/components/panel/CoursePrice/CoursePrice";
import CourseOnlineContent from "../../../src/components/panel/CourseOnlineContent/CourseOnlineContent";
import Menu from "../../../src/components/panel/Menu/Menu.jsx";
import dash from "../../../styles/panel/Dashboard.module.css";
import styles from "../../../styles/Home.module.css";
import co from "../../../styles/panel/course.module.css";
import men from "../../../styles/panel/Menu.module.css";

const Courses = () => {
  const [formstep, setFormstep] = useState(0)
  const completeFormStep = () => {
    setFormstep((formstep) => formstep + 1);
    console.log(formstep + "normal")
  };
  const backFormStep = () => {
    setFormstep((formstep) => formstep - 1);
    console.log(formstep)
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
  const sec = false;
  const data = ()=>{
    if(formstep>=1){
      return(
        <>
        {formstep === 1 && <Coursepreview completeFormStep={completeFormStep} back={backFormStep} />}
          {formstep === 2 && <CourseIntended completeFormStep={completeFormStep}/>}
          {formstep === 3 && <CourseSection completeFormStep={completeFormStep} />}
          {formstep === 4 && <CourseContent completeFormStep={completeFormStep} backFormStep={backFormStep}/>}
          {formstep === 5 && <CourseLanding completeFormStep={completeFormStep}/>}
          {formstep === 6 && <CoursePrice completeFormStep={completeFormStep}/>}
        </>
      )
    }
    else if(formstep1>=1){
      return(
        <>
          {formstep1 === 1 && <Coursepreview completeFormStep={completeFormStep1} back={backFormStep1}/>}
          {formstep1 === 2 && <CourseIntended completeFormStep={completeFormStep1} sec={sec}/>}

          {formstep1 === 3 && <CourseOnlineContent completeFormStep={completeFormStep1} backFormStep={backFormStep1}/>}
          {formstep1 === 4 && <CourseLanding completeFormStep={completeFormStep1} sec={sec}/>}
          {formstep1 === 5 && <CoursePrice completeFormStep={completeFormStep1} sec={sec}/>}
        </>
      )
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
          <div className={`col-lg-10 ${dash.maincontainer}`}>
            <Header />
          {formstep === 0 && formstep1===0  && <CourseChoice completeFormStep={completeFormStep} completeFormStep1={completeFormStep1}/>}
          {data()}
          </div>
        </div>
      </div>
    </SSRProvider>
  );
};
export default Courses;
