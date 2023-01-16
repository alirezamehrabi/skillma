import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import detail from "../../styles/DetailCourse.module.css";
import main from "../../styles/MainCourse.module.css";
import search from "../../styles/Search.module.css";
import Menu from "./../../src/components/Menu/Menu";
import ShortVideoSlider from "./../../src/components/ShortVideoSlider/ShortVideoSlider";
import TxtSearch from "./../../src/components/TxtSearch/TxtSearch";
import SoundList from "../../src/components/SoundList/SoundList"
import TopCoursesSlider from "./../../src/components/TopCoursesSlider/TopCoursesSlider";
import Footer from "./../../src/components/Footer/Footer";
import { Tab, Tabs,SSRProvider  } from "react-bootstrap";
import Loader from "../../src/components/Loader/Loader";
import { useContext } from "react";
import DataContext from "../../src/Context/DataContext";

const Search = () => {
  const { loading } = useContext(DataContext);
  return !loading ? (
    <SSRProvider>
      <div className={styles.container}>
        <Head>
          <title>Search Result</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <main>
          <Menu />
          <section className={`row container mx-auto mb-5 `}>
          <Tabs
            defaultActiveKey="pop"
            id="uncontrolled-tab-example"
            className={`mb-5 ${search.tabs} changeTab`}
          >
            <Tab eventKey="pop" title="Video" className={``}>
              <div className={`col-12`}>
              <section className={`row container mx-auto mb-5`}>
          <div className={`col-md-8 ${styles.titleShort}`}>Short Videos</div>
          <div className={`col-md-4 mx-auto ${styles.but} ${styles.but2}`}>
              <Link href="#">
                <>
                  <button
                    type="button"
                    className={`btn btn-warning px-4 py-0 ${styles.logBut} ${styles.knowBut}`}
                  >
                    ALL SHORT VIDEOS
                  </button>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={styles.rarrow}><defs><style>{`.cls-1{opacity:0}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect class="cls-1" width="24" height="24"/><path d="M20.88,11.43a1.77,1.77,0,0,0-.32-.5L13.07,3.44a1.51,1.51,0,1,0-2.13,2.13l4.94,4.93H4.51a1.5,1.5,0,1,0,0,3H15.88l-4.94,4.93a1.5,1.5,0,0,0,0,2.12h0a1.51,1.51,0,0,0,2.12,0h0l7.49-7.5a1.6,1.6,0,0,0,.32-.49A1.5,1.5,0,0,0,20.88,11.43Z"/></g></svg>
                  </div>
                </>
              </Link>
            </div>
            {/* <div className={`col-12`}><ShortVideoSlider /></div> */}
        </section>
          <section className={`row container mx-auto mb-5 `}>
          <div className={`col-sm-12 ${styles.titleFree}`}>Free Courses</div>
          <Tabs
            defaultActiveKey="pop"
            id="uncontrolled-tab-example"
            className="mb-4"
          >
            <Tab eventKey="pop" title="Most Popular">
              <div className={`col-12`}>
                {/* <TopCoursesSlider /> */}
              </div>
            </Tab>
            <Tab eventKey="new" title="Newest">
              <div className={`col-12`}>
                {/* <TopCoursesSlider /> */}
              </div>
            </Tab>
            <Tab eventKey="trend" title="Trending">
              <div className={`col-12`}>
                {/* <TopCoursesSlider /> */}
              </div>
            </Tab>
            <Tab eventKey="rate" title="Highest Rate">
              <div className={`col-12`}>
                {/* <TopCoursesSlider /> */}
              </div>
            </Tab>
          </Tabs>
        </section>
        <section className={`row container mx-auto mb-5 `}>
        <div className={`col-md-8 ${main.titleVerified}`}>Verified Courses</div>
        <div className={`col-md-4 mx-auto ${styles.but} ${styles.but2}`}>
              <Link href="#">
                <>
                  <button
                    type="button"
                    className={`btn btn-warning px-4 py-0 ${styles.logBut} ${styles.knowBut}`}
                  >
                    See All
                  </button>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={styles.rarrow}><defs><style>{`.cls-1{opacity:0}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect class="cls-1" width="24" height="24"/><path d="M20.88,11.43a1.77,1.77,0,0,0-.32-.5L13.07,3.44a1.51,1.51,0,1,0-2.13,2.13l4.94,4.93H4.51a1.5,1.5,0,1,0,0,3H15.88l-4.94,4.93a1.5,1.5,0,0,0,0,2.12h0a1.51,1.51,0,0,0,2.12,0h0l7.49-7.5a1.6,1.6,0,0,0,.32-.49A1.5,1.5,0,0,0,20.88,11.43Z"/></g></svg>
                  </div>
                </>
              </Link>
            </div>
            <div className={`col-12`}>
                {/* <TopCoursesSlider /> */}
              </div>
        </section>
              </div>
            </Tab>
            <Tab eventKey="new" title="Text">
              <div className={`col-12`}>
              <div className={`col-sm-8 ${search.titleDefination}`}>Defination</div>
                <TxtSearch />
              </div>
            </Tab>
            <Tab eventKey="trend" title="Sound">
              <div className={`col-12`}>
              <div className={`col-sm-8 ${search.titleSound}`}>Sounds</div>
                <SoundList />
              </div>
            </Tab>
          </Tabs>
        </section>
          
        <Footer/>
        </main>
      </div>
    </SSRProvider>
  ):(<Loader />)
};

export default Search;
