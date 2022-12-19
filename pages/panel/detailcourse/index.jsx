import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import detail from "../../../styles/DetailCourse.module.css";
import Menu from "./../../../src/components/Menu/Menu";
import Footer from "./../../../src/components/Footer/Footer";
import { SSRProvider } from "react-bootstrap";
import { RiShareForwardLine } from "react-icons/ri";
const detailcourse = () => {
  return (
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
                  src={require("../../../src/video/intro.mp4")}
                  autoPlay
                  controls
                />
              </div>
              <h6 className={``}>seasons 1- lecture 1- introduction</h6>
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
        </main>
      </div>
    </SSRProvider>
  );
};

export default detailcourse;
