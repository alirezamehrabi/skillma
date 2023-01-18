import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Menu from "./../src/components/Menu/Menu";
import Footer from "./../src/components/Footer/Footer";
import CountUp from "react-countup";
import ShortVideoSlider from "../src/components/ShortVideoSlider/ShortVideoSlider"
import TopCoursesSlider from "../src/components/TopCoursesSlider/TopCoursesSlider"
import Master from "../src/components/Master/Master"
import FreeCourses from './../src/components/FreeCourses/FreeCourses';
import Subscribe from './../src/components/Subscribe/Subscribe';
import { SSRProvider  } from "react-bootstrap";
import Loader from "./../src/components/Loader/Loader";
import { useContext } from "react";
import DataContext from "./../src/Context/DataContext";
import {FreeCourse} from "./api/course/free-course"
import {useEffect,useState} from "react"
import axios from "axios";
export async function getStaticProps() {
  const res = await fetch(
    `${process.env.webURL}/Course/GetTopCourses`
  );
  const data = await res.json();
  const res1 = await fetch(
    `${process.env.webURL}/ShortContent/GetFilteredShortVideo?page=1&pagesize=13&Type=1`
  );
  const shortvideodata = await res1.json();
  return {
    props: {
      ...{ data,shortvideodata },
    },
  };
}

export default function Home(props) {
  // console.log(props.shortvideodata.data.pageData)
  const topcourse = props.data
  const { loading } = useContext(DataContext);
  return !loading ? (
    <SSRProvider>
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Menu />
        <section className={`row mx-auto text-center ${styles.header}`}>
          <div className={`col-lg-6`}>
            <h5>are you ready to learn</h5>
            <h2>Start learning new thing Daily</h2>
            <h5>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry s standard
            </h5>
            <div className="col-9 mx-auto">
              <div className={`input-group ${styles.inputsearch}`}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search your favorite Course"
                  aria-label="Search your favorite Course"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button
                    className={`btn btn-outline-secondary bg-warning ${styles.searchbutton}`}
                    type="button"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.btnsearch} viewBox="0 0 24 24"><defs><style>{`.cls-1{opacity:0}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24"/><path d="M20.76,19.48l-3.34-3.31a8.1,8.1,0,1,0-1.25,1.25l3.31,3.31a.9.9,0,0,0,1.28,0h0A.93.93,0,0,0,20.76,19.48Zm-9.64-2.06a6.3,6.3,0,1,1,6.3-6.3A6.3,6.3,0,0,1,11.12,17.42Z"/></g></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-lg-6`}>
            <figure className={`${styles.HeaderPic} ${styles.bigImgEffect}`}>
              <Image
                src={require(`../src/assets/home/headerImg.png`)}
                alt="logo"
                width=""
                height=""
              />
            </figure>
          </div>
        </section>
        <section className={`row`}>
          <div className={`col-12 ${styles.title}`}>Why SkillMa</div>
          <div className={`col-lg-6 ${styles.leftWhy}`}>
            <h2>Know about Skillma</h2>
            <h6>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry s standard. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry
            </h6>
            <div className={`col-12 mx-auto text-left`}>
              <div className={`row`}>
                <div className={`col-4`}>
                  <h2>
                    <div
                      className="google_font my-2"
                      style={{
                        fontFamily:
                          "'Zen Kaku Gothic New',Arial,Tahoma,sans-serif",
                        fontSize: "35px",
                        lineHeight: "50px",
                        fontWeight: "600",
                        letterSpacing: "0px",
                        color: "#333",
                      }}
                    >
                      {" "}
                      <CountUp end={4} duration={4} />
                      <span className="shopassistant-plus">m+</span>{" "}
                    </div>
                  </h2>
                  <h6>Student Learning</h6>
                </div>
                <div className={`col-4`}>
                  <h2>
                    <div
                      className="google_font my-2"
                      style={{
                        fontFamily:
                          "'Zen Kaku Gothic New',Arial,Tahoma,sans-serif",
                        fontSize: "35px",
                        lineHeight: "50px",
                        fontWeight: "600",
                        letterSpacing: "0px",
                        color: "#333",
                      }}
                    >
                      {" "}
                      <CountUp end={4} duration={4} />
                      <span className="shopassistant-plus">k+</span>{" "}
                    </div>
                  </h2>
                  <h6>Active Courses</h6>
                </div>
                <div className={`col-4`}>
                  <h2>
                    <div
                      className="google_font my-2"
                      style={{
                        fontFamily:
                          "'Zen Kaku Gothic New',Arial,Tahoma,sans-serif",
                        fontSize: "35px",
                        lineHeight: "50px",
                        fontWeight: "600",
                        letterSpacing: "0px",
                        color: "#333",
                      }}
                    >
                      {" "}
                      <CountUp end={100} duration={4} />
                    </div>
                  </h2>
                  <h6>Free Courses</h6>
                </div>
              </div>
            </div>
            <div className={`col-12 my-5 mx-auto ${styles.but}`}>
              <Link href="#">
                <>
                  <button
                    type="button"
                    className={`btn btn-warning px-4 py-2 ${styles.logBut} ${styles.knowBut}`}
                  >
                    Know More
                  </button>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={styles.rarrow}><defs><style>{`.cls-1{opacity:0}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24"/><path d="M20.88,11.43a1.77,1.77,0,0,0-.32-.5L13.07,3.44a1.51,1.51,0,1,0-2.13,2.13l4.94,4.93H4.51a1.5,1.5,0,1,0,0,3H15.88l-4.94,4.93a1.5,1.5,0,0,0,0,2.12h0a1.51,1.51,0,0,0,2.12,0h0l7.49-7.5a1.6,1.6,0,0,0,.32-.49A1.5,1.5,0,0,0,20.88,11.43Z"/></g></svg>
                  </div>
                </>
              </Link>
            </div>
          </div>
          <div className={`col-lg-6`}>
            <div className={`row mx-auto text-center justify-content-center`}>
              <div className={`col-3 position-relative ${styles.grid}`}>
                <figure className={styles.pic1}>
                  <Image
                    src={require(`../src/assets/home/whypic5.png`)}
                    alt="logo"
                    width=""
                    height=""
                  />
                </figure>
                <figure className={styles.pic2}>
                  <Image
                    src={require(`../src/assets/home/whypic2.png`)}
                    alt="logo"
                    width=""
                    height=""
                  />
                </figure>
                <figure className={styles.pic3}>
                  <Image
                    src={require(`../src/assets/home/whypic4.png`)}
                    alt="logo"
                    width=""
                    height=""
                  />
                </figure>
              </div>
              <div className={`col-6 position-relative ${styles.grid}`}>
                <figure className={styles.pic4}>
                  <Image
                    src={require(`../src/assets/home/whypic6.png`)}
                    alt="logo"
                    width=""
                    height=""
                  />
                </figure>
                <figure className={styles.pic5}>
                  <Image
                    src={require(`../src/assets/home/whypic1.png`)}
                    alt="logo"
                    width=""
                    height=""
                  />
                </figure>
                <figure className={styles.pic6}>
                  <Image
                    src={require(`../src/assets/home/whypic3.png`)}
                    alt="logo"
                    width=""
                    height=""
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className={`row ${styles.varPart}`}>
        <div className={`col-12 ${styles.titleVerified}`}>Verified Courses</div>
        <div className={`col-lg-6 ${styles.leftWhy}`}>
        <figure className={`${styles.varifyPic} ${styles.bigImgEffect}`}>
                  <Image
                    src={require(`../src/assets/home/verifiedpic.png`)}
                    alt="verified"
                    width=""
                    height=""
                  />
                </figure>
        </div>
        <div className={`col-lg-6 ${styles.rightVarify}`}>
          <h2>choose favorite course from verified courses</h2>
          <h6>Lorem Ipsum is simply dummy text of the printing
and typesetting industry. Lorem  Ipsum has been
the industry s standard. Lorem Ipsum is simply
dummy text of the printing and typesetting industry</h6>
        
        <div className={`col-12 mt-5 mx-auto ${styles.but}`}>
              <Link href="#">
                <>
                  <button
                    type="button"
                    className={`btn btn-warning ${styles.logBut} ${styles.knowBut}`}
                  >
                    See More
                  </button>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={styles.rarrow}><defs><style>{`.cls-1{opacity:0}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24"/><path d="M20.88,11.43a1.77,1.77,0,0,0-.32-.5L13.07,3.44a1.51,1.51,0,1,0-2.13,2.13l4.94,4.93H4.51a1.5,1.5,0,1,0,0,3H15.88l-4.94,4.93a1.5,1.5,0,0,0,0,2.12h0a1.51,1.51,0,0,0,2.12,0h0l7.49-7.5a1.6,1.6,0,0,0,.32-.49A1.5,1.5,0,0,0,20.88,11.43Z"/></g></svg>
                  </div>
                </>
              </Link>
            </div>
            </div>
        </section>
        <section className={`row container mx-auto mb-5`}>
          <div className={`col-sm-8 ${styles.titleShort}`}>Short Videos</div>
          <div className={`col-sm-4 mx-auto ${styles.but} ${styles.but2}`}>
              <Link href="#">
                <>
                  <button
                    type="button"
                    className={`btn btn-warning px-4 py-0 ${styles.logBut} ${styles.knowBut}`}
                  >
                    ALL SHORT VIDEOS
                  </button>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={styles.rarrow}><defs><style>{`.cls-1{opacity:0}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24"/><path d="M20.88,11.43a1.77,1.77,0,0,0-.32-.5L13.07,3.44a1.51,1.51,0,1,0-2.13,2.13l4.94,4.93H4.51a1.5,1.5,0,1,0,0,3H15.88l-4.94,4.93a1.5,1.5,0,0,0,0,2.12h0a1.51,1.51,0,0,0,2.12,0h0l7.49-7.5a1.6,1.6,0,0,0,.32-.49A1.5,1.5,0,0,0,20.88,11.43Z"/></g></svg>
                  </div>
                </>
              </Link>
            </div>
            <div className={`col-12`}><ShortVideoSlider data={props.shortvideodata.data.pageData}/></div>
        </section>
        <section className={`row container mx-auto mb-5 ${styles.topCourses}`}>
        <div className={`col-sm-8 ${styles.titleCourse}`}>Top Courses</div>
          <div className={`col-sm-4 mx-auto ${styles.but} ${styles.but2}`}>
              <Link href="#">
                <>
                  <button
                    type="button"
                    className={`btn btn-warning px-4 py-0 ${styles.logBut} ${styles.knowBut}`}
                  >
                    ALL COURSES
                  </button>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={styles.rarrow}><defs><style>{`.cls-1{opacity:0}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24"/><path d="M20.88,11.43a1.77,1.77,0,0,0-.32-.5L13.07,3.44a1.51,1.51,0,1,0-2.13,2.13l4.94,4.93H4.51a1.5,1.5,0,1,0,0,3H15.88l-4.94,4.93a1.5,1.5,0,0,0,0,2.12h0a1.51,1.51,0,0,0,2.12,0h0l7.49-7.5a1.6,1.6,0,0,0,.32-.49A1.5,1.5,0,0,0,20.88,11.43Z"/></g></svg>

                  </div>
                </>
              </Link>
            </div>
            <div className={`col-12`}><TopCoursesSlider data={topcourse.data}/></div>
        </section>
        <section className={`row container mx-auto mb-5`}>
          <div className={`col-sm-8 ${styles.titleFree}`}>Free Courses</div>
          <div className={`col-sm-4 mx-auto ${styles.but} ${styles.but2}`}>
              <Link href="#">
                <>
                  <button
                    type="button"
                    className={`btn btn-warning px-4 py-0 ${styles.logBut} ${styles.knowBut}`}
                  >
                    ALL COURSES
                  </button>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={styles.rarrow}><defs><style>{`.cls-1{opacity:0}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24"/><path d="M20.88,11.43a1.77,1.77,0,0,0-.32-.5L13.07,3.44a1.51,1.51,0,1,0-2.13,2.13l4.94,4.93H4.51a1.5,1.5,0,1,0,0,3H15.88l-4.94,4.93a1.5,1.5,0,0,0,0,2.12h0a1.51,1.51,0,0,0,2.12,0h0l7.49-7.5a1.6,1.6,0,0,0,.32-.49A1.5,1.5,0,0,0,20.88,11.43Z"/></g></svg>

                  </div>
                </>
              </Link>
            </div>
            <div className={`col-12`}><FreeCourses /></div>
        </section>
        <section className={`row container mx-auto mb-5 ${styles.topCourses}`}>
        <div className={`col-sm-12 ${styles.discount}`}>Discount</div>
        <div className={`col-md-6 ${styles.discountDes}`}>
        <h2 className={`${styles.discountTitle}`}>Get 35% Discount For New Member Course</h2>
        <h6 className={`${styles.discounttxt}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem  Ipsum has been the industry s standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry</h6>
        </div>
        <div className={`col-md-6 ${styles.discountImg}`}>
        <figure className={`${styles.varifyPic} ${styles.bigImgEffect}`}>
                  <Image
                    src={require(`../src/assets/home/discountImg.png`)}
                    alt="discount"
                    width=""
                    height=""
                  />
                </figure>
        </div>
        </section>
       
        <Master/>
        <Subscribe/>
      </main>
      <Footer />

      
    </div>
    </SSRProvider>
  ):(<Loader />);
}
