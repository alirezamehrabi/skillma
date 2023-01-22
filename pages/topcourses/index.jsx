import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Menu from "./../../src/components/Menu/Menu";
import TopCourses from "../../src/components/TopCourses/TopCourses"
import Footer from "./../../src/components/Footer/Footer";
import { SSRProvider  } from "react-bootstrap";
import Loader from "../../src/components/Loader/Loader";
import { useContext, useEffect, useState } from "react";
import DataContext from "../../src/Context/DataContext";

const VC = () => {
  const { loading } = useContext(DataContext);

  const fetchData0 = async ()=>{
    try {
      const result = await fetch(
        `${process.env.webURL}/Course/GetTopCourses`
        );
        const json = await result.json();
        // console.log(json.data.pageData)
      return json.data
    } catch (error) {
       console.log(error);
    }
  }
  useEffect(() => {
    fetchData0();
  },[])


  return !loading ? (
    <SSRProvider>
      <div className={styles.container}>
        <Head>
          <title>Top Course List</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <main>
          <Menu />
          <section className={`row container mx-auto mb-5 `}>
          <div className={`col-12`}>
              <div className={`col-sm-8 fw-bolder my-4`}>Top Course</div>
                <TopCourses fetchData0={fetchData0}/>
              </div>
        </section>
          
        <Footer/>
        </main>
      </div>
    </SSRProvider>
  ):(<Loader />)
};

export default VC;
