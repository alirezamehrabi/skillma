import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import help from "../../styles/help.module.css";
import Menu from "./../../src/components/Menu/Menu";
import Footer from "./../../src/components/Footer/Footer";
import { SSRProvider } from "react-bootstrap";

const Help = () => {
  return (
    <SSRProvider>
      <div className={styles.container}>
        <Head>
          <title>Help Detail</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
          <Menu />
          <section className={`row container mx-auto my-5 ${help.related}`}>
            <div className={`col-12 ${help.detailtitle}`}>Account & Profile</div>
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
            <br/>
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
  );
};

export default Help;
