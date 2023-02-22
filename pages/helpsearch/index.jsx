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
export async function getServerSideProps(context) {
  const res = await fetch(
    `${process.env.webURL}/Help/SearchFAQ?Key=${context.query.Key}`
  );
  const data = await res.json();
  return {
    props: {
      ...{ data },
    },
  };
}
const Help = (props) => {
  console.log(props.data)
  const { loading } = useContext(DataContext);
  return !loading ? (
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
          <h5 className={`${help.searchDes}`}>You searched `&quot;` {props.data.data[0].searchedKey} `&quot;`</h5>
          {props.data.data.map((i)=>{
            return(
              <>
                <span className={`${help.bullet}`}></span>
            <span className={`fw-bold mb-4 ${help.item}`}>
            {i.title}
            </span>
            <br />
            <span className={`lh-lg ${help.item}`}>
{i.summery}            </span>
            <div className={`fw-bold ${help.moreBTN}`}>
            <Link href={`/helpdetail/${i.id}`}>See more</Link>
            </div><div className={`my-4`}/>
              </>
            )
          })}
          </section>
          <Footer />
        </main>
      </div>
    </SSRProvider>
  ):(<Loader />)
};

export default Help;
