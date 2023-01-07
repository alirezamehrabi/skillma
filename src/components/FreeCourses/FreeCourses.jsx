import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../styles/Home.module.css";
import { useContext } from "react";
import DataContext from "../../Context/DataContext";
import Loader from "../Loader/Loader";

const FreeCourses = () => {
  const { freeCourse, loading } = useContext(DataContext);
  return !loading ? (
    <div className={`row mx-auto g-2 `}>
      {freeCourse.data.map((i) => {
        return (
          <div className={`col-lg-4 col-sm-6 ${styles.freeWrap}`} key={i.id}>
           
            <div className={`row mx-auto `}>
              <div className={`col-4 `}>
                <Link href={`/detailcourse/${i.id}`}>
                <figure className={`col-12 ${styles.FreeImg}`}>
                  <Image
                    src={i.coursePic}
                    alt="logo"
                    width="150"
                    height="150"
                  />
                </figure>
                  </Link>
                <figure className={`col-12 ${styles.FreePlay}`}>
                <Link href={`/detailcourse/${i.id}`}>
                  <Image
                    src={require(`../../../src/assets/home/play.png`)}
                    alt="logo"
                    width=""
                    height=""
                  />
                  </Link>
                </figure>
              </div>
              <div className={`col-8 `}>
                <figure className={`${styles.teacherBadgeFree}`}>
                  <Image
                    src={i.teacherPicName}
                    alt="logo"
                    width="40"
                    height="40"
                  />
                  <h6
                    className={`text-truncate ${styles.nowrap} ${styles.FreeName}`}
                  >
                    {i.teacherName}
                  </h6>
                  <h5 className={`text-truncate ${styles.nowrap}`}>
                    {i.title}
                  </h5>
                  <h6
                    className={`text-truncate ${styles.nowrap} ${styles.FreeDuration}`}
                  >
                    Duration: {i.duration} h
                  </h6>
                </figure>
              </div>
            </div>
            
          </div>
        );
      })}
    </div>
  ) : (
    <Loader />
  );
};

export default FreeCourses;
