import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import help from "../../styles/help.module.css";
import Menu from "./../../src/components/Menu/Menu";
import Footer from "./../../src/components/Footer/Footer";
import { SSRProvider } from "react-bootstrap";
import Loader from "../../src/components/Loader/Loader";
import { useContext } from "react";
import DataContext from "../../src/Context/DataContext";

const Help = () => {
  const { loading } = useContext(DataContext);
  return !loading ? (
    <SSRProvider>
      <div className={styles.container}>
        <Head>
          <title>Help Detail</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
          <Menu />
          <section className={`row container mx-auto mb-5 ${help.detail}`}>
            <div className={`col-12 ${help.detailtitle}`}>Creating and Editing Your Profile</div>
            <div className={`col-12 ${help.detaildes}`}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. 
The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of 
Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. 
The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of 
Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.</div>
          </section>
          <section className={`row container mx-auto mb-5 ${help.related}`}>
            <div className={`col-12 ${help.detailtitle}`}>Related Support Links</div>
            <span className={`${help.bullet}`}></span>
            <span className={`${help.item}`}>
              Lorem Ipsum is simply dummy text of the printing
            </span>
            <br />
            <span className={`${help.bullet}`}></span>
            <span className={`${help.item}`}>
              Lorem Ipsum is simply dummy text of the printing
            </span>
            <br />
            <span className={`${help.bullet}`}></span>
            <span className={`${help.item}`}>
              Lorem Ipsum is simply dummy text of the printing
            </span>
          </section>
          <Footer />
        </main>
      </div>
    </SSRProvider>
  ):(<Loader />)
};

export default Help;
