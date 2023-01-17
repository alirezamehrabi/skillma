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
          <div className={`col-12`}>
              <div className={`col-sm-8 ${search.titleDefination}`}>Defination</div>
                <TxtSearch />
              </div>
        </section>
          
        <Footer/>
        </main>
      </div>
    </SSRProvider>
  ):(<Loader />)
};

export default Search;
