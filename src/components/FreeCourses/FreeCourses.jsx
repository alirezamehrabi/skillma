import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../styles/Home.module.css";
import { RiShareForwardLine } from "react-icons/ri";
import { Rating } from "react-simple-star-rating";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {FreeCourse} from "../../../pages/api/course/free-course"
const FreeCourses = () => {
  // useEffect(()=>{
  //   const coursedata = FreeCourse()
  //   console.log(coursedata)
  // })
  // const [datac, setDatac] = useState()
  // useEffect(()=>{
  //   const fetchData = async () => {
  //     const result = await fetch(
  //       `${process.env.webURL}/Course/GetFreeCourses`
  //     );
  //     const json = await result.json();
  //     setDatac(json)
  //     console.log(datac)
  //   }
  //   fetchData().catch(console.error);
  // })
  return (
    <div className={`row mx-auto g-2 `}>
        <div className={`col-lg-4 col-sm-6 ${styles.freeWrap}`}>
            <div className={`row mx-auto `}>
        <div className={`col-4 `}>
        <figure className={`col-12 ${styles.FreeImg}`}>
                <Image
                  src={require(`../../../src/assets/home/FreeImg.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                </figure>
                <figure className={`col-12 ${styles.FreePlay}`}>
                <Image
                  src={require(`../../../src/assets/home/play.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>
        </div>
        <div className={`col-8 `}>
        <figure className={`${styles.teacherBadgeFree}`}>
                <Image
                  src={require(`../../../src/assets/home/teacherMini.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                <h6 className={`text-truncate ${styles.nowrap} ${styles.FreeName}`}>Dani Beaumont</h6>
                <h5 className={`text-truncate ${styles.nowrap}`}>Get Started with Adobe XD</h5>
                <h6 className={`text-truncate ${styles.nowrap} ${styles.FreeDuration}`}>Duration: 12 h</h6>
              </figure>
        </div>
            </div>
        </div>
        <div className={`col-lg-4 col-sm-6 ${styles.freeWrap}`}>
            <div className={`row mx-auto `}>
        <div className={`col-4 `}>
        <figure className={`col-12 ${styles.FreeImg}`}>
                <Image
                  src={require(`../../../src/assets/home/FreeImg.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                </figure>
                <figure className={`col-12 ${styles.FreePlay}`}>
                <Image
                  src={require(`../../../src/assets/home/play.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>
        </div>
        <div className={`col-8 `}>
        <figure className={`${styles.teacherBadgeFree}`}>
                <Image
                  src={require(`../../../src/assets/home/teacherMini.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                <h6 className={`text-truncate ${styles.nowrap} ${styles.FreeName}`}>Dani Beaumont</h6>
                <h5 className={`text-truncate ${styles.nowrap}`}>Get Started with Adobe XD</h5>
                <h6 className={`text-truncate ${styles.nowrap} ${styles.FreeDuration}`}>Duration: 12 h</h6>
              </figure>
        </div>
            </div>
        </div>
        <div className={`col-lg-4 col-sm-6 ${styles.freeWrap}`}>
            <div className={`row mx-auto `}>
        <div className={`col-4 `}>
        <figure className={`col-12 ${styles.FreeImg}`}>
                <Image
                  src={require(`../../../src/assets/home/FreeImg.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                </figure>
                <figure className={`col-12 ${styles.FreePlay}`}>
                <Image
                  src={require(`../../../src/assets/home/play.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>
        </div>
        <div className={`col-8 `}>
        <figure className={`${styles.teacherBadgeFree}`}>
                <Image
                  src={require(`../../../src/assets/home/teacherMini.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                <h6 className={`text-truncate ${styles.nowrap} ${styles.FreeName}`}>Dani Beaumont</h6>
                <h5 className={`text-truncate ${styles.nowrap}`}>Get Started with Adobe XD</h5>
                <h6 className={`text-truncate ${styles.nowrap} ${styles.FreeDuration}`}>Duration: 12 h</h6>
              </figure>
        </div>
            </div>
        </div>
        <div className={`col-lg-4 col-sm-6 ${styles.freeWrap}`}>
            <div className={`row mx-auto `}>
        <div className={`col-4 `}>
        <figure className={`col-12 ${styles.FreeImg}`}>
                <Image
                  src={require(`../../../src/assets/home/FreeImg.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                </figure>
                <figure className={`col-12 ${styles.FreePlay}`}>
                <Image
                  src={require(`../../../src/assets/home/play.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>
        </div>
        <div className={`col-8 `}>
        <figure className={`${styles.teacherBadgeFree}`}>
                <Image
                  src={require(`../../../src/assets/home/teacherMini.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                <h6 className={`text-truncate ${styles.nowrap} ${styles.FreeName}`}>Dani Beaumont</h6>
                <h5 className={`text-truncate ${styles.nowrap}`}>Get Started with Adobe XD</h5>
                <h6 className={`text-truncate ${styles.nowrap} ${styles.FreeDuration}`}>Duration: 12 h</h6>
              </figure>
        </div>
            </div>
        </div>
        <div className={`col-lg-4 col-sm-6 ${styles.freeWrap}`}>
            <div className={`row mx-auto `}>
        <div className={`col-4 `}>
        <figure className={`col-12 ${styles.FreeImg}`}>
                <Image
                  src={require(`../../../src/assets/home/FreeImg.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                </figure>
                <figure className={`col-12 ${styles.FreePlay}`}>
                <Image
                  src={require(`../../../src/assets/home/play.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>
        </div>
        <div className={`col-8 `}>
        <figure className={`${styles.teacherBadgeFree}`}>
                <Image
                  src={require(`../../../src/assets/home/teacherMini.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                <h6 className={`text-truncate ${styles.nowrap} ${styles.FreeName}`}>Dani Beaumont</h6>
                <h5 className={`text-truncate ${styles.nowrap}`}>Get Started with Adobe XD</h5>
                <h6 className={`text-truncate ${styles.nowrap} ${styles.FreeDuration}`}>Duration: 12 h</h6>
              </figure>
        </div>
            </div>
        </div>
        <div className={`col-lg-4 col-sm-6 ${styles.freeWrap}`}>
            <div className={`row mx-auto `}>
        <div className={`col-4 `}>
        <figure className={`col-12 ${styles.FreeImg}`}>
                <Image
                  src={require(`../../../src/assets/home/FreeImg.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                </figure>
                <figure className={`col-12 ${styles.FreePlay}`}>
                <Image
                  src={require(`../../../src/assets/home/play.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>
        </div>
        <div className={`col-8 `}>
        <figure className={`${styles.teacherBadgeFree}`}>
                <Image
                  src={require(`../../../src/assets/home/teacherMini.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                <h6 className={`text-truncate ${styles.nowrap} ${styles.FreeName}`}>Dani Beaumont</h6>
                <h5 className={`text-truncate ${styles.nowrap}`}>Get Started with Adobe XD</h5>
                <h6 className={`text-truncate ${styles.nowrap} ${styles.FreeDuration}`}>Duration: 12 h</h6>
              </figure>
        </div>
            </div>
        </div>
        <div className={`col-lg-4 col-sm-6 ${styles.freeWrap}`}>
            <div className={`row mx-auto `}>
        <div className={`col-4 `}>
        <figure className={`col-12 ${styles.FreeImg}`}>
                <Image
                  src={require(`../../../src/assets/home/FreeImg.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                </figure>
                <figure className={`col-12 ${styles.FreePlay}`}>
                <Image
                  src={require(`../../../src/assets/home/play.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>
        </div>
        <div className={`col-8 `}>
        <figure className={`${styles.teacherBadgeFree}`}>
                <Image
                  src={require(`../../../src/assets/home/teacherMini.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                <h6 className={`text-truncate ${styles.nowrap} ${styles.FreeName}`}>Dani Beaumont</h6>
                <h5 className={`text-truncate ${styles.nowrap}`}>Get Started with Adobe XD</h5>
                <h6 className={`text-truncate ${styles.nowrap} ${styles.FreeDuration}`}>Duration: 12 h</h6>
              </figure>
        </div>
            </div>
        </div>
        <div className={`col-lg-4 col-sm-6 ${styles.freeWrap}`}>
            <div className={`row mx-auto `}>
        <div className={`col-4 `}>
        <figure className={`col-12 ${styles.FreeImg}`}>
                <Image
                  src={require(`../../../src/assets/home/FreeImg.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                </figure>
                <figure className={`col-12 ${styles.FreePlay}`}>
                <Image
                  src={require(`../../../src/assets/home/play.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>
        </div>
        <div className={`col-8 `}>
        <figure className={`${styles.teacherBadgeFree}`}>
                <Image
                  src={require(`../../../src/assets/home/teacherMini.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                <h6 className={`text-truncate ${styles.nowrap} ${styles.FreeName}`}>Dani Beaumont</h6>
                <h5 className={`text-truncate ${styles.nowrap}`}>Get Started with Adobe XD</h5>
                <h6 className={`text-truncate ${styles.nowrap} ${styles.FreeDuration}`}>Duration: 12 h</h6>
              </figure>
        </div>
            </div>
        </div>
        <div className={`col-lg-4 col-sm-6 ${styles.freeWrap}`}>
            <div className={`row mx-auto `}>
        <div className={`col-4 `}>
        <figure className={`col-12 ${styles.FreeImg}`}>
                <Image
                  src={require(`../../../src/assets/home/FreeImg.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                </figure>
                <figure className={`col-12 ${styles.FreePlay}`}>
                <Image
                  src={require(`../../../src/assets/home/play.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
              </figure>
        </div>
        <div className={`col-8 `}>
        <figure className={`${styles.teacherBadgeFree}`}>
                <Image
                  src={require(`../../../src/assets/home/teacherMini.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                <h6 className={`text-truncate ${styles.nowrap} ${styles.FreeName}`}>Dani Beaumont</h6>
                <h5 className={`text-truncate ${styles.nowrap}`}>Get Started with Adobe XD</h5>
                <h6 className={`text-truncate ${styles.nowrap} ${styles.FreeDuration}`}>Duration: 12 h</h6>
              </figure>
        </div>
            </div>
        </div>
    </div>
  );
};

export default FreeCourses;
