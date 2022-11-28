import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import detail from "../../styles/DetailCourse.module.css";
import main from "../../styles/MainCourse.module.css";
import Menu from "./../../src/components/Menu/Menu";
import TopCoursesSlider from "./../../src/components/TopCoursesSlider/TopCoursesSlider";
import Comment from "./../../src/components/Comment/Comment";
import Footer from "./../../src/components/Footer/Footer";
import { SSRProvider } from "react-bootstrap";
import { RiShareForwardLine } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa";
import {
  AiOutlineClockCircle,
  AiOutlineShoppingCart,
  AiOutlineGift,
} from "react-icons/ai";
import { GiLevelEndFlag } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";
import { MdOutlinePriceChange } from "react-icons/md";
const detailcourse = () => {
    const clock = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{fill:#0092e4;opacity:0;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="keylines"><rect className="cls-1" width="24" height="24"/><path d="M14.79,12.57,12.9,11.48v-4a.9.9,0,0,0-1.8,0V12a.9.9,0,0,0,.45.78l2.34,1.35a.9.9,0,0,0,.9-1.56ZM12,3a9,9,0,1,0,9,9A9,9,0,0,0,12,3Zm0,16.2A7.2,7.2,0,1,1,19.2,12,7.2,7.2,0,0,1,12,19.2Z"/></g></g></svg>
  let price = 50;
  return (
    <SSRProvider>
      <div className={styles.container}>
        <Head>
          <title>Detail Course Page</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <main>
          <Menu />
          <section className={`row mx-auto container`}>
            <div className={`col-xl-6 mx-4 ${detail.videoHolder} ${detail.videoHolder2}`}>
              <div className={` ${styles.introHolder}`}>
              <div className={` ${styles.spic}`}>
              <Image
                      src={require(`../../src/assets/detail/sound.png`)}
                      alt="logo"
                      width=""
                      height=""
                    />
                    </div>
                <audio
        controls
        src="/cold.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
              </div>
              <div className={`row mt-5 ${styles.conHolder}`}>
                <div className={`col-6 ${detail.personHolder}`}>
                  <figure className={`${styles.teacherBadgeModal}`}>
                    <Image
                      src={require(`../../src/assets/home/teacherMini.png`)}
                      alt="logo"
                      width=""
                      height=""
                    />
                    <h5 className={``}>Dani Beaumont</h5>
                    <h6 className={``}>12.501 followers</h6>
                  </figure>
                </div>
                <div className={`col-6 mx-auto`}>
                  <div className={`row ${detail.bot}`}>
                    <div className={`col-4`}>
                      <RiShareForwardLine style={{ color: "blue" }} />3
                    </div>
                    <div className={`col-4`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="blue"
                        className="bi bi-chat-dots"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                      </svg>
                      2
                    </div>

                    <div className={`col-4`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="yellow"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      4/5
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-xl-5 ${detail.session} ${detail.soundsession}`}>
              <h5 className={`${detail.sessionName}`}>Related</h5>
              <div className={`col-11 mx-auto ${detail.sounditem}`}>
                <div className={`row`}>
                    <div className={`col-4 ${detail.leftit}`}>
                    <Image
                      src={require(`../../src/assets/detail/1.png`)}
                      alt="logo"
                      width=""
                      height=""
                    />
                    </div>
                    <div className={`col-8 ${detail.rightit}`}>
                        <h5 className={detail.soundname}>Ui Design Introduction</h5>
                        <div className={`${detail.speecher}`}>
                    <Image
                      src={require(`../../src/assets/home/teacherMini.png`)}
                      alt="logo"
                      width=""
                      height=""
                    /><span className={`${detail.speechername}`}>Samira Naseri</span>
                    </div>
                    <div className={`${detail.speechertime}`}>{clock}<span className={``}>3:44</span>
                    </div>
                    </div>
              </div>
              
              </div>

              <div className={`col-11 mx-auto ${detail.sounditem}`}>
                <div className={`row`}>
                    <div className={`col-4 ${detail.leftit}`}>
                    <Image
                      src={require(`../../src/assets/detail/2.png`)}
                      alt="logo"
                      width=""
                      height=""
                    />
                    </div>
                    <div className={`col-8 ${detail.rightit}`}>
                        <h5 className={detail.soundname}>Ui Design Introduction</h5>
                        <div className={`${detail.speecher}`}>
                    <Image
                      src={require(`../../src/assets/home/teacherMini.png`)}
                      alt="logo"
                      width=""
                      height=""
                    /><span className={`${detail.speechername}`}>Samira Naseri</span>
                    </div>
                    <div className={`${detail.speechertime}`}>{clock}<span className={``}>3:44</span>
                    </div>
                    </div>
              </div>
              
              </div>
              <div className={`col-11 mx-auto ${detail.sounditem}`}>
                <div className={`row`}>
                    <div className={`col-4 ${detail.leftit}`}>
                    <Image
                      src={require(`../../src/assets/detail/3.png`)}
                      alt="logo"
                      width=""
                      height=""
                    />
                    </div>
                    <div className={`col-8 ${detail.rightit}`}>
                        <h5 className={detail.soundname}>Ui Design Introduction</h5>
                        <div className={`${detail.speecher}`}>
                    <Image
                      src={require(`../../src/assets/home/teacherMini.png`)}
                      alt="logo"
                      width=""
                      height=""
                    /><span className={`${detail.speechername}`}>Samira Naseri</span>
                    </div>
                    <div className={`${detail.speechertime}`}>{clock}<span className={``}>3:44</span>
                    </div>
                    </div>
              </div>
              
              </div>
              <div className={`col-11 mx-auto ${detail.sounditem}`}>
                <div className={`row`}>
                    <div className={`col-4 ${detail.leftit}`}>
                    <Image
                      src={require(`../../src/assets/detail/4.png`)}
                      alt="logo"
                      width=""
                      height=""
                    />
                    </div>
                    <div className={`col-8 ${detail.rightit}`}>
                        <h5 className={detail.soundname}>Ui Design Introduction</h5>
                        <div className={`${detail.speecher}`}>
                    <Image
                      src={require(`../../src/assets/home/teacherMini.png`)}
                      alt="logo"
                      width=""
                      height=""
                    /><span className={`${detail.speechername}`}>Samira Naseri</span>
                    </div>
                    <div className={`${detail.speechertime}`}>{clock}<span className={``}>3:44</span>
                    </div>
                    </div>
              </div>
              
              </div>
              <div className={`col-11 mx-auto ${detail.sounditem}`}>
                <div className={`row`}>
                    <div className={`col-4 ${detail.leftit}`}>
                    <Image
                      src={require(`../../src/assets/detail/5.png`)}
                      alt="logo"
                      width=""
                      height=""
                    />
                    </div>
                    <div className={`col-8 ${detail.rightit}`}>
                        <h5 className={detail.soundname}>Ui Design Introduction</h5>
                        <div className={`${detail.speecher}`}>
                    <Image
                      src={require(`../../src/assets/home/teacherMini.png`)}
                      alt="logo"
                      width=""
                      height=""
                    /><span className={`${detail.speechername}`}>Samira Naseri</span>
                    </div>
                    <div className={`${detail.speechertime}`}>{clock}<span className={``}>3:44</span>
                    </div>
                    </div>
              </div>
              
              </div>

            </div>
          </section>
          <section className={`row mx-auto container ${detail.content}`}>
            <div className={`col-xl-6 mx-4 ${detail.soundcontent}`}>
              <div className={`col-12 ${detail.content}`}>
                <h5 className={detail.contentTitle}>
                  Lorem Ipsum is simply dummy text
                  <span className={`${detail.year}`}>2 years ago</span>
                </h5>
                <h6 className={detail.contentDescription}>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have scrambled parts of Ciceros book. It usually
                  begins with.
                  <br />
                  <br />
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have scrambled parts of Ciceros book. It usually
                  begins with.
                </h6>
              </div>
              <div className={`col-12 ${detail.content}`}>
                <h5 className={detail.contentTitle}>What you ll learn:</h5>
                <h6
                  className={`${detail.contentDescription} ${detail.contentDescription2}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="blue"
                    className="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                  Lorem Ipsum is simply dummy text of the printing
                </h6>

                <h6
                  className={`${detail.contentDescription} ${detail.contentDescription2}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="blue"
                    className="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                  Lorem Ipsum is simply dummy
                </h6>

                <h6
                  className={`${detail.contentDescription} ${detail.contentDescription2}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="blue"
                    className="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                  Lorem Ipsum is simply dummy
                </h6>

                <h6
                  className={`${detail.contentDescription} ${detail.contentDescription2}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="blue"
                    className="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                  Lorem Ipsum is simply dummy text of the printing
                </h6>
              </div>
              <div className={`col-12 ${detail.content}`}>
                <h5 className={detail.contentTitle}>requirement</h5>
                <div className={detail.circle} />
                <h6
                  className={`${detail.contentDescription} ${detail.contentDescription3}`}
                >
                  Lorem Ipsum is simply dummy text of the printing
                </h6>
                <div className={detail.circle} />
                <h6
                  className={`${detail.contentDescription} ${detail.contentDescription3}`}
                >
                  Lorem Ipsum is simply dummy
                </h6>
                <div className={detail.circle} />
                <h6
                  className={`${detail.contentDescription} ${detail.contentDescription3}`}
                >
                  Lorem Ipsum is simply dummy
                </h6>
              </div>
            </div>
            
          </section>
          <Comment />
          <section className={`row container mx-auto mb-5 `}>
            <div className={`col-sm-12 ${detail.related}`}>Related Courses</div>
            <div className={`col-12`}>
              <TopCoursesSlider />
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </SSRProvider>
  );
};

export default detailcourse;
