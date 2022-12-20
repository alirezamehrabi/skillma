import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import detail from "../../../styles/DetailCourse.module.css";
import st from "../../../styles/panel/Student.module.css";
import Menu from "./../../../src/components/panel/MenuStu/Menu";
import dash from "../../../styles/panel/Dashboard.module.css"
import men from "../../../styles/panel/Menu.module.css"
import Header from "../../../src/components/panel/Header/Header.jsx"
import { SSRProvider } from "react-bootstrap";
const detailcourse = () => {
  const play = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <g id="Group_21908" data-name="Group 21908" transform="translate(-0.08 -0.367)">
    <circle id="Ellipse_12" data-name="Ellipse 12" cx="12" cy="12" r="12" transform="translate(0.08 0.367)" fill="#7a7d7c" opacity="0.32"/>
    <path id="Path_5" data-name="Path 5" d="M4.873,4.433H0L2.805,0,5.611,4.433Z" transform="translate(14.772 9.324) rotate(90)" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
  </g>
</svg>
const tik = <svg id="Group_21909" data-name="Group 21909" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
<g id="Group_20563" data-name="Group 20563">
  <rect id="Rectangle_3564" data-name="Rectangle 3564" width="24" height="24" transform="translate(0 0)" fill="#ff9401" opacity="0"/>
</g>
<path id="Path_9884" data-name="Path 9884" d="M20.588,5.833a1.281,1.281,0,0,0-1.812-.007l-.007.007L9.227,15.388,5.218,11.366A1.309,1.309,0,1,0,3.4,13.249l4.918,4.918a1.28,1.28,0,0,0,1.811.007l.007-.007L20.588,7.716a1.281,1.281,0,0,0,.073-1.81C20.637,5.881,20.613,5.856,20.588,5.833Z" fill="#ff9401"/>
</svg>

return (
  <SSRProvider>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${dash.container}`}>
          <div className={`row d-flex justify-content-between`}>
              <div className={`col-2 ${men.menucontainer}`}>
                  <Link href="/panel/dashboard"><div className={`${men.logo}`}></div></Link>

                  <Menu /></div>
              <div className={`col-lg-10 ${dash.maincontainer}`}>
                  <Header />
                  <div className={`col-12`}>
                  <section className={`row mx-auto container ${detail.secwidth}`}>
            <div className={`col-xl-6 mx-4 ${detail.videoHolder}`}>
              <div className={` ${styles.introHolder}`}>
                <video
                  src={require("../../../src/video/intro.mp4")}
                  autoPlay
                  controls
                />
              </div>
              <h6 className={`${st.vidName}`}>seasons 1- lecture 1- introduction</h6>
            </div>
            <div className={`col-xl-5 ${detail.session} ${st.session}`}>
              <h5 className={`${detail.sessionName}`}>Session</h5>
              <div className={`col-11 ${st.sessionHolder}`}>
                <span className={`${st.Num}`}>1</span>
                <h6 className={`text-truncate ${detail.sessionTitle}`}>
                  UI Design Introduction
                </h6>
                <div className={`${st.border}`}>
                {tik}<span className={`text-truncate ${st.sessionOption} ${st.sactive}`}>
                  introduction
                  </span>
                  <span className={`${st.sessionOption2} ${st.sactive}`}>03:44</span>
                  <br />
                  {play}<span className={`text-truncate ${st.sessionOption} ${st.stitle}`}>
                  organization
                  </span>
                  <span className={`${st.sessionOption2} ${st.stitle}`}>03:44</span>
                </div>
              </div>
              <div className={`col-11 ${st.sessionHolder}`}>
                <span className={`${st.Num} ${st.numDisable}`}>2</span>
                <h6 className={`text-truncate ${detail.sessionTitle} ${st.stitle}`}>
                  UI Design Introduction
                </h6>
              </div>
              <div className={`col-11 ${st.sessionHolder}`}>
                <span className={`${st.Num} ${st.numDisable}`}>3</span>
                <h6 className={`text-truncate ${detail.sessionTitle} ${st.stitle}`}>
                  UI Design Introduction
                </h6>
              </div>
              <div className={`col-11 ${st.sessionHolder}`}>
                <span className={`${st.Num} ${st.numDisable}`}>4</span>
                <h6 className={`text-truncate ${detail.sessionTitle} ${st.stitle}`}>
                  UI Design Introduction
                </h6>
              </div>
            </div>
          </section>
                  </div>
              </div>
          </div>
      </div>
  </SSRProvider>
)
};

export default detailcourse;
