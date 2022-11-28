import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import main from "../../styles/MainCourse.module.css";
import Menu from "./../../src/components/Menu/Menu";
import TopCoursesSlider from "./../../src/components/TopCoursesSlider/TopCoursesSlider";
import PopularInstructor from "./../../src/components/PopularInstructorSlider/PopularInstructor"
import PopularTopics from "./../../src/components/PopularTopics/PopularTopics"
import Footer from "./../../src/components/Footer/Footer";
import { Tab, Tabs,SSRProvider  } from "react-bootstrap";

const Maincourse = () => {
  return ( <SSRProvider> 
    <div className={styles.container}>
      <Head>
        <title>Main Course</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Menu />
        <div className={`col-12 container ${styles.navigation}`}>
          <Link passHref href={`/`}>
            Home
          </Link>{" "}
          / Main Course
        </div>
        <section className={`row container mx-auto mb-5 `}>
          <div className={`col-sm-12 ${styles.titleFree}`}>Free Courses</div>
          <Tabs
            defaultActiveKey="pop"
            id="uncontrolled-tab-example"
            className="mb-4"
          >
            <Tab eventKey="pop" title="Most Popular">
              <div className={`col-12`}>
                <TopCoursesSlider />
              </div>
            </Tab>
            <Tab eventKey="new" title="Newest">
              <div className={`col-12`}>
                <TopCoursesSlider />
              </div>
            </Tab>
            <Tab eventKey="trend" title="Trending">
              <div className={`col-12`}>
                <TopCoursesSlider />
              </div>
            </Tab>
            <Tab eventKey="rate" title="Highest Rate">
              <div className={`col-12`}>
                <TopCoursesSlider />
              </div>
            </Tab>
          </Tabs>
        </section>
        <section className={`row container mx-auto mb-5 `}>
        <div className={`col-sm-8 ${main.titleVerified}`}>Verified Courses</div>
        <div className={`col-sm-4 mx-auto ${styles.but} ${styles.but2}`}>
              <Link href="#">
                <>
                  <button
                    type="button"
                    className={`btn btn-warning px-4 py-0 ${styles.logBut} ${styles.knowBut}`}
                  >
                    See All
                  </button>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="41"
                      fill="#fff"
                      className={`bi bi-arrow-right ${styles.arrow}`}
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </div>
                </>
              </Link>
            </div>
            <div className={`col-12`}>
                <TopCoursesSlider />
              </div>
        </section>
        <section className={`row container mx-auto mb-5 `}>
          <div className={`col-sm-12 ${main.titleInstructors}`}>Popular Instructors</div>
          <div className={`col-12`}><PopularInstructor /></div>
        </section>
        <section className={`row container mx-auto mb-5 `}>
          <div className={`col-sm-12 ${main.titleTopic}`}>Popular Topics</div>
          <div className={`col-12`}><PopularTopics /></div>
        </section>
        <section className={`row container mx-auto mb-5 ${styles.topCourses}`}>
        <div className={`col-sm-8 ${styles.titleCourse}`}>Online Courses</div>
          <div className={`col-sm-4 mx-auto ${styles.but} ${styles.but2}`}>
              <Link href="#">
                <>
                  <button
                    type="button"
                    className={`btn btn-warning px-4 py-0 ${styles.logBut} ${styles.knowBut}`}
                  >
                    See All
                  </button>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="41"
                      fill="#fff"
                      className={`bi bi-arrow-right ${styles.arrow}`}
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </div>
                </>
              </Link>
            </div>
            <div className={`col-12`}><TopCoursesSlider /></div>
        </section>
        

      </main>
      <Footer />
    </div> </SSRProvider> 
  );
};

export default Maincourse;
