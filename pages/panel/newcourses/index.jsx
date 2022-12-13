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
import Menu from "../../../src/components/panel/Menu/Menu.jsx";
import dash from "../../../styles/panel/Dashboard.module.css";
import styles from "../../../styles/Home.module.css";
import co from "../../../styles/panel/course.module.css";
import men from "../../../styles/panel/Menu.module.css";

const Courses = () => {
  const [formstep, setFormstep] = useState(4)
  const completeFormStep = () => {
    setFormstep((formstep) => formstep + 1);
    console.log(formstep)
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
            <Link href="/panel/dashboard">
              <div className={`${men.logo}`}></div>
            </Link>

            <Menu />
          </div>
          <div className={`col-lg-10 ${dash.maincontainer}`}>
            <Header />
             {formstep === 0 && <CourseChoice completeFormStep={completeFormStep} />}
            {formstep === 1 && <Coursepreview completeFormStep={completeFormStep} back={backFormStep}/>}
          {formstep === 2 && <CourseIntended completeFormStep={completeFormStep}/>}
          {formstep === 3 && <CourseSection completeFormStep={completeFormStep}/>}
          {formstep === 4 && <CourseContent completeFormStep={CourseContent}/>}
          </div>
        </div>
      </div>
    </SSRProvider>
  );
};
export default Courses;
