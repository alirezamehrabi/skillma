import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import help from "../../styles/help.module.css";
import Menu from "../../src/components/Menu/Menu";
import Footer from "../../src/components/Footer/Footer";
import { SSRProvider } from "react-bootstrap";
import Loader from "../../src/components/Loader/Loader";
import { useContext } from "react";
import DataContext from "../../src/Context/DataContext";

export async function getStaticPaths() {
  return { paths:[], fallback: 'blocking' };
}

export async function getStaticProps(context) {
  const paths = context.params.id;
  const request = await fetch(
    `${process.env.webURL}/Help/GetFAQByCatId?id=${paths}`
  );
 
 try{
  const helpcateg = await request.json();
  return {
    props: {
      ...{ helpcateg },
    },
  };
 }
 catch(e){
  return {
      redirect: {
        destination: "/404",
      },
    }
 }
}


const Help = (props) => {
  console.log(props.helpcateg.data)
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
          <section className={`row container mx-auto my-5 ${help.related}`}>
            <div className={`col-12 ${help.detailtitle}`}>{props.helpcateg.data[0].catName}</div>
            {props.helpcateg.data.map((i)=>{
              return(
                <>
                <span className={`${help.bullet}`}></span>
            <span className={`${help.item}`}>
              <Link href={`/helpdetail/${i.id}`}>{i.title}</Link>
            </span>
            <br />
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
