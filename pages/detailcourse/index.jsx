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
import Loader from "../../src/components/Loader/Loader";
import { useContext } from "react";
import DataContext from "../../src/Context/DataContext";
import { GiLevelEndFlag } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";
import { MdOutlinePriceChange } from "react-icons/md";
const detailcourse = () => {
  let price = 50;
  const { loading } = useContext(DataContext);
  return !loading ? (
    <SSRProvider>
      <div className={styles.container}>
        <Head>
          <title>Detail Course Page</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <main>
          <Menu />
          <section className={`row mx-auto container ${detail.secwidth}`}>
            <div className={`col-xl-6 mx-4 ${detail.videoHolder}`}>
              <div className={` ${styles.introHolder}`}>
                <video
                  src={require("../../src/video/intro.mp4")}
                  autoPlay
                  controls
                />
              </div>
              <div className={`row ${styles.conHolder}`}>
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
            <div className={`col-xl-5 ${detail.session}`}>
              <h5 className={`${detail.sessionName}`}>Session</h5>
              <div className={`col-11 ${detail.sessionHolder}`}>
                <span className={`${detail.Num}`}>1</span>
                <h6 className={`text-truncate ${detail.sessionTitle}`}>
                  UI Design Introduction
                </h6>
                <div className={`${detail.border}`}>
                  <span className={`text-truncate ${detail.sessionOption}`}>
                    introduction
                  </span>
                  <span className={`${detail.sessionOption2}`}>03:44</span>
                  <br />
                  <span className={`text-truncate ${detail.sessionOption}`}>
                    organization
                  </span>
                  <span className={`${detail.sessionOption2}`}>03:44</span>
                </div>
              </div>
              <div className={`col-11 ${detail.sessionHolder}`}>
                <span className={`${detail.Num}`}>2</span>
                <h6 className={`text-truncate ${detail.sessionTitle}`}>
                  UI Design Introduction
                </h6>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="blue"
                  className="bi bi-lock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                </svg>
              </div>
              <div className={`col-11 ${detail.sessionHolder}`}>
                <span className={`${detail.Num}`}>3</span>
                <h6 className={`text-truncate ${detail.sessionTitle}`}>
                  UI Design Introduction
                </h6>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="blue"
                  className="bi bi-lock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                </svg>
              </div>
              <div className={`col-11 ${detail.sessionHolder}`}>
                <span className={`${detail.Num}`}>4</span>
                <h6 className={`text-truncate ${detail.sessionTitle}`}>
                  UI Design Introduction
                </h6>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="blue"
                  className="bi bi-lock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                </svg>
              </div>
            </div>
          </section>
          <section className={`row mx-auto container ${detail.content}`}>
            <div className={`col-xl-6 mx-4 `}>
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
            <div className={`col-xl-5 ${detail.content}`}>
              <div className={`col-12 ${detail.addtocart}`}>
                <div className={`row`}>
                  <div className={`col-xl-6 ${detail.cartItem}`}>
                    <MdOutlinePriceChange />
                    <h6 className={`col-12 ${detail.normal}`}>
                      Price:{" "}
                      <span className={`col-12 ${detail.bold}`}>{price}$</span>
                    </h6>
                    <GiLevelEndFlag />
                    <h6 className={`col-12 ${detail.normal}`}>
                      Level:{" "}
                      <span className={`col-12 ${detail.bold}`}>Begginer</span>
                    </h6>
                    <TbCertificate />
                    <h6 className={`col-12 ${detail.normal}`}>
                      Certificate:{" "}
                      <span className={`col-12 ${detail.bold}`}>Lorem</span>
                    </h6>
                  </div>
                  <div className={`col-xl-6 ${detail.cartItem}`}>
                    <AiOutlineClockCircle />
                    <h6 className={`col-12 ${detail.normal}`}>
                      Duration:{" "}
                      <span className={`col-12 ${detail.bold}`}>128 h</span>
                    </h6>
                    <FaUserGraduate />
                    <h6 className={`col-12 ${detail.normal}`}>
                      Student:{" "}
                      <span className={`col-12 ${detail.bold}`}>12450</span>
                    </h6>
                  </div>
                  <div className={`col-11 mx-auto ${detail.cartBut}`}>
                    <Link href="#">
                      {price === 0 ? (
                        <button
                          type="button"
                          className={`btn btn-warning ${styles.logBut} ${detail.cartButton}`}
                        >
                          <AiOutlineGift />
                          Free to Join Course
                        </button>
                      ) : (
                        <button
                          type="button"
                          className={`btn btn-warning ${styles.logBut} ${detail.cartButton}`}
                        >
                          <AiOutlineShoppingCart />
                          Add To Cart
                        </button>
                      )}
                    </Link>
                  </div>
                </div>
              </div>
              <div className={`col-12 ${detail.require}`}>
                <div className={`col-11 mx-auto my-3`}>
                  <div className={`row mx-auto`}>
                    <div className={`col-4 mx-auto`}>
                      <figure className={`${detail.requirePic}`}>
                        <Image
                          src={require(`../../src/assets/maincourse/require1.png`)}
                          alt="logo"
                          width=""
                          height=""
                        />
                      </figure>
                    </div>
                    <div className={`col-8 mx-auto`}>
                      <h6 className={`${detail.requretxt}`}>
                        Wacom DTK1660K0A Cintiq 16 Drawing Tablet with Screen.
                      </h6>
                      <Link href="#">
                        <button
                          type="button"
                          className={`btn btn-outline-warning ${detail.btnRequire}`}
                        >
                          Visit for Buy
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={`col-11 mx-auto my-3`}>
                  <div className={`row mx-auto`}>
                    <div className={`col-4 mx-auto`}>
                      <figure className={`${detail.requirePic}`}>
                        <Image
                          src={require(`../../src/assets/maincourse/require1.png`)}
                          alt="logo"
                          width=""
                          height=""
                        />
                      </figure>
                    </div>
                    <div className={`col-8 mx-auto`}>
                      <h6 className={`${detail.requretxt}`}>
                        Wacom DTK1660K0A Cintiq 16 Drawing Tablet with Screen.
                      </h6>
                      <Link href="#">
                        <button
                          type="button"
                          className={`btn btn-outline-warning ${detail.btnRequire}`}
                        >
                          Visit for Buy
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={`col-11 mx-auto my-3`}>
                  <div className={`row mx-auto`}>
                    <div className={`col-4 mx-auto`}>
                      <figure className={`${detail.requirePic}`}>
                        <Image
                          src={require(`../../src/assets/maincourse/require2.png`)}
                          alt="logo"
                          width=""
                          height=""
                        />
                      </figure>
                    </div>
                    <div className={`col-8 mx-auto`}>
                      <h6 className={`${detail.requretxt}`}>
                        Wacom DTK1660K0A Cintiq 16 Drawing Tablet with Screen.
                      </h6>
                      <Link href="#">
                        <button
                          type="button"
                          className={`btn btn-warning ${detail.btnRequire} ${styles.logBut} ${styles.knowBut}`}
                        >
                          Visit for Buy
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={`col-11 mx-auto my-3`}>
                  <div className={`row mx-auto`}>
                    <div className={`col-4 mx-auto`}>
                      <figure className={`${detail.requirePic}`}>
                        <Image
                          src={require(`../../src/assets/maincourse/require1.png`)}
                          alt="logo"
                          width=""
                          height=""
                        />
                      </figure>
                    </div>
                    <div className={`col-8 mx-auto`}>
                      <h6 className={`${detail.requretxt}`}>
                        Wacom DTK1660K0A Cintiq 16 Drawing Tablet with Screen.
                      </h6>
                      <Link href="#">
                        <button
                          type="button"
                          className={`btn btn-outline-warning ${detail.btnRequire}`}
                        >
                          Visit for Buy
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
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
  ):(<Loader />)
};

export default detailcourse;
