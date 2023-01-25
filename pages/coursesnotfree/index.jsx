import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import search from "../../styles/Search.module.css";
import Menu from "./../../src/components/Menu/Menu";
import CoursesNotFree from "../../src/components/CoursesNotFree/CoursesNotFree"
import Footer from "./../../src/components/Footer/Footer";
import { SSRProvider  } from "react-bootstrap";
import Loader from "../../src/components/Loader/Loader";
import { useContext, useEffect, useState } from "react";
import DataContext from "../../src/Context/DataContext";

const CNF = () => {
  const { loading } = useContext(DataContext);

  const fetchData0 = async (p)=>{
    try {
      const result = await fetch(
        `${process.env.webURL}/Course/GetFilterCoursesNotFree?page=${p}&pageSize=6&Types=0`
        );
        const json = await result.json();
        // console.log(json.data.pageData)
      return json.data
    } catch (error) {
       console.log(error);
    }
  }
  useEffect(() => {
    fetchData0(1);
  },[])

  const fetchData1 = async (p)=>{
    try {
      const result = await fetch(
        `${process.env.webURL}/Course/GetFilterCoursesNotFree?page=${p}&pageSize=6&Types=1`
        );
        const json = await result.json();
        // console.log(json.data.pageData)
      return json.data
    } catch (error) {
       console.log(error);
    }
  }
  useEffect(() => {
    fetchData1(1);
  },[])

  const fetchData2 = async (p)=>{
    try {
      const result = await fetch(
        `${process.env.webURL}/Course/GetFilterCoursesNotFree?page=${p}&pageSize=6&Types=2`
        );
        const json = await result.json();
        // console.log(json.data.pageData)
      return json.data
    } catch (error) {
       console.log(error);
    }
  }
  useEffect(() => {
    fetchData2(1);
  },[])

  const fetchData3 = async (p)=>{
    try {
      const result = await fetch(
        `${process.env.webURL}/Course/GetFilterCoursesNotFree?page=${p}&pageSize=6&Types=3`
        );
        const json = await result.json();
      return json.data
    } catch (error) {
       console.log(error);
    }
  }
  useEffect(() => {
    fetchData3(1);
  },[])




  return !loading ? (
    <SSRProvider>
      <div className={styles.container}>
        <Head>
          <title>Course Not Free List</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <main>
          <Menu />
          <section className={`row container mx-auto mb-5 `}>
          <div className={`col-12`}>
              <div className={`col-sm-8 fw-bolder my-4`}>Course Not Free</div>
                <CoursesNotFree fetchData0={fetchData0} fetchData1={fetchData1} fetchData2={fetchData2} fetchData3={fetchData3}/>
              </div>
        </section>
          
        <Footer/>
        </main>
      </div>
    </SSRProvider>
  ):(<Loader />)
};

export default CNF;