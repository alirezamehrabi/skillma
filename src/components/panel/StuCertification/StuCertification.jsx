import Image from "next/image";
import Link from "next/link";
import { useState, createRef } from "react";
import { SSRProvider, Button } from "react-bootstrap";
import st from "../../../../styles/panel/Student.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import co from "../../../../styles/panel/course.module.css";


const StuProfile = () => {
  return (
    <SSRProvider>
      <div className={`row ${st.cerContainer}`}>
        <div className={`col-sm-6 col-lg-4 ${st.cer}`}>
            <Image src={require(`../../../assets/panel/profile/cer.png`)} alt="" />
            <h6 className={`text-truncate`}>Lorem Ipsum is simply dummy</h6>
        </div>
        <div className={`col-sm-6 col-lg-4 ${st.cer}`}>
            <Image src={require(`../../../assets/panel/profile/cer.png`)} alt="" />
            <h6 className={`text-truncate`}>Lorem Ipsum is simply dummy</h6>
        </div>
        <div className={`col-sm-6 col-lg-4 ${st.cer}`}>
            <Image src={require(`../../../assets/panel/profile/cer.png`)} alt="" />
            <h6 className={`text-truncate`}>Lorem Ipsum is simply dummy</h6>
        </div>
        <div className={`col-sm-6 col-lg-4 ${st.cer}`}>
            <Image src={require(`../../../assets/panel/profile/cer.png`)} alt="" />
            <h6 className={`text-truncate`}>Lorem Ipsum is simply dummy</h6>
        </div>
        <div className={`col-sm-6 col-lg-4 ${st.cer}`}>
            <Image src={require(`../../../assets/panel/profile/cer.png`)} alt="" />
            <h6 className={`text-truncate`}>Lorem Ipsum is simply dummy</h6>
        </div>
        <div className={`col-sm-6 col-lg-4 ${st.cer}`}>
            <Image src={require(`../../../assets/panel/profile/cer.png`)} alt="" />
            <h6 className={`text-truncate`}>Lorem Ipsum is simply dummy</h6>
        </div>
      </div>
    </SSRProvider>
  );
};
export default StuProfile;
