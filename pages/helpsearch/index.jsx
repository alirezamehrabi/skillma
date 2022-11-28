import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import cart from "../../styles/Cart.module.css";
import detail from "../../styles/DetailCourse.module.css";
import about from "../../styles/About.module.css";
import pdf from "../../styles/Pdfproduct.module.css";
import help from "../../styles/help.module.css";
import Menu from "./../../src/components/Menu/Menu";
import Footer from "./../../src/components/Footer/Footer";
import { SSRProvider } from "react-bootstrap";

const Help = () => {
  return (
    <SSRProvider>
      <div className={styles.container}>
        <Head>
          <title>Help Search</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
          <Menu />
          <section className={`row container mx-auto ${help.search}`}>
          <h5 className={`${help.searchDes}`}>Hello, how can we help?</h5>
          <span className={`${help.bullet}`}></span>
            <span className={`fw-bold mb-4 ${help.item}`}>
              Lorem Ipsum is simply dummy text of the printing
            </span>
            <br />
            <span className={`lh-lg ${help.item}`}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with.
            </span>
            <div className={`fw-bold ${help.moreBTN}`}>
            <Link href="#">See more</Link>
            </div><div className={`my-4`}/>
            <span className={`${help.bullet}`}></span>
            <span className={`fw-bold mb-4 ${help.item}`}>
              Lorem Ipsum is simply dummy text of the printing
            </span>
            <br />
            <span className={`lh-lg ${help.item}`}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with.
            </span>
            <div className={`fw-bold ${help.moreBTN}`}>
            <Link href="#">See more</Link>
            </div><div className={`my-4`}/>
            <span className={`${help.bullet}`}></span>
            <span className={`fw-bold mb-4 ${help.item}`}>
              Lorem Ipsum is simply dummy text of the printing
            </span>
            <br />
            <span className={`lh-lg ${help.item}`}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with.
            </span>
            <div className={`fw-bold ${help.moreBTN}`}>
            <Link href="#">See more</Link>
            </div><div className={`my-4`}/>
            <span className={`${help.bullet}`}></span>
            <span className={`fw-bold mb-4 ${help.item}`}>
              Lorem Ipsum is simply dummy text of the printing
            </span>
            <br />
            <span className={`lh-lg ${help.item}`}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with.
            </span>
            <div className={`fw-bold ${help.moreBTN}`}>
            <Link href="#">See more</Link>
            </div><div className={`my-4`}/>
          </section>
          <Footer />
        </main>
      </div>
    </SSRProvider>
  );
};

export default Help;
