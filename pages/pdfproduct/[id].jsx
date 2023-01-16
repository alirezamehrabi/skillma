import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import cart from "../../styles/Cart.module.css";
import detail from "../../styles/DetailCourse.module.css";
import about from "../../styles/About.module.css";
import pdf from "../../styles/Pdfproduct.module.css";
import online from "../../styles/Onlinecourse.module.css";
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
    `${process.env.webURL}/Product/GetProductDetailById?id=${paths}`
  );
 try{
  const data = await request.json();
  return {
    props: {
      ...{ data },
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
const Pdfproduct = (props) => {
  const pdfData = props.data.data
  const size = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs>
        <style>{`.cls-1{opacity:0}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <rect className="cls-1" width="24" height="24" />
        <path d="M21,14.57h0v0a2.18,2.18,0,0,0-.09-.51L19.43,5.26A2.69,2.69,0,0,0,16.73,3H7.22A2.69,2.69,0,0,0,4.57,5.26L3.11,14a2.28,2.28,0,0,0-.09.51v.05H3a.53.53,0,0,0,0,.14v3.6A2.7,2.7,0,0,0,5.7,21H18.3A2.7,2.7,0,0,0,21,18.3V14.57Zm-14.66-9a.89.89,0,0,1,.9-.75h9.54a.9.9,0,0,1,.9.75l1.08,6.5A2.4,2.4,0,0,0,18.3,12H5.7a2.12,2.12,0,0,0-.44.05ZM19.2,18.3a.9.9,0,0,1-.9.9H5.7a.9.9,0,0,1-.9-.9V14.77l.07-.41a.9.9,0,0,1,.83-.56H18.3a.9.9,0,0,1,.83.56l.07.41Zm-2.7-2.7a.9.9,0,1,0,.9.9A.9.9,0,0,0,16.5,15.6Z" />
      </g>
    </svg>
  );
  const download = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs>
        <style>{`.cls-1{opacity:0}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <rect className="cls-1" width="24" height="24" />
        <path d="M8.66,13.16a.9.9,0,0,0,0,1.27h0l2.7,2.7a.9.9,0,0,0,1.27,0h0l2.7-2.7a.91.91,0,0,0-1.28-1.28L12.9,14.33V3.9a.9.9,0,0,0-1.8,0V14.33L9.94,13.16a.9.9,0,0,0-1.27,0ZM17.4,9.3H15.6a.9.9,0,1,0,0,1.8h1.8a.9.9,0,0,1,.9.9v6.3a.9.9,0,0,1-.9.9H6.6a.9.9,0,0,1-.9-.9V12a.9.9,0,0,1,.9-.9H8.4a.9.9,0,0,0,0-1.8H6.6A2.7,2.7,0,0,0,3.9,12v6.3A2.7,2.7,0,0,0,6.6,21H17.4a2.7,2.7,0,0,0,2.7-2.7V12A2.7,2.7,0,0,0,17.4,9.3Z" />
      </g>
    </svg>
  );
  const format = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs>
        <style>{`.cls-1{opacity:0}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <rect className="cls-1" width="24" height="24" />
        <path d="M18.92,9.25A.7.7,0,0,0,18.87,9V8.92a.85.85,0,0,0-.17-.25h0l-5.4-5.4h0a.85.85,0,0,0-.25-.17H13L12.68,3H7.22a2.7,2.7,0,0,0-2.7,2.7V18.3A2.7,2.7,0,0,0,7.22,21h9a2.7,2.7,0,0,0,2.7-2.7v-9Zm-5.4-3.18L15.86,8.4H13.52Zm3.6,12.23a.9.9,0,0,1-.9.9h-9a.9.9,0,0,1-.9-.9V5.7a.9.9,0,0,1,.9-.9h4.5V9.3a.9.9,0,0,0,.9.9h4.5Z" />
      </g>
    </svg>
  );
  const price = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 20.267 20.267"
    >
      <path
        id="money-stack"
        d="M20.346,15.739H1.921a.921.921,0,1,0,0,1.842H20.346a.921.921,0,1,0,0-1.842Zm0,3.685H1.921a.921.921,0,1,0,0,1.842H20.346a.921.921,0,1,0,0-1.842ZM5.606,6.527a.921.921,0,1,0,.921.921A.921.921,0,0,0,5.606,6.527ZM18.5,1H3.764A2.764,2.764,0,0,0,1,3.764v7.37A2.764,2.764,0,0,0,3.764,13.9H18.5a2.764,2.764,0,0,0,2.764-2.764V3.764A2.764,2.764,0,0,0,18.5,1Zm.921,10.133a.921.921,0,0,1-.921.921H3.764a.921.921,0,0,1-.921-.921V3.764a.921.921,0,0,1,.921-.921H18.5a.921.921,0,0,1,.921.921ZM11.133,4.685A2.764,2.764,0,1,0,13.9,7.449,2.764,2.764,0,0,0,11.133,4.685Zm0,3.685a.921.921,0,1,1,.921-.921A.921.921,0,0,1,11.133,8.37Zm5.527-1.842a.921.921,0,1,0,.921.921A.921.921,0,0,0,16.661,6.527Z"
        transform="translate(-1 -1)"
        fill="#2d3ddf"
      />
    </svg>
  );

  const { loading } = useContext(DataContext);
  return !loading ? (
    <SSRProvider>
      <div className={styles.container}>
        <Head>
          <title>PDF Product</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
          <Menu />
          <section className={`row container mx-auto ${pdf.vitrin}`}>
            <div className={`col-sm-2 ${pdf.imgHolder}`}>
              <Image
                src={pdfData.oldPicture}
                alt=""
                width="400"
                height="400"
              />
            </div>
            <div className={`col-sm-10 ${pdf.rightvitrin}`}>
              <h5 className={``}>
                {pdfData.title}
              </h5>
              <h6 className={``}>
              {pdfData.summery}
              </h6>
              <div className={`row ${pdf.infoholder}`}>
                <div className={`col-6 ${pdf.info}`}>
                  {price} <span className={`${pdf.norm}`}> price: </span>{" "}
                  <span className={`${pdf.bold}`}> {pdfData.price}$</span>
                  <br />
                  <br />
                  {download} <span className={`${pdf.bold}`}>{pdfData.downloadtime} </span>{" "}
                  <span className={`${pdf.norm}`}> Downloads</span>
                  <br />
                  <br />
                  {format} <span className={`${pdf.bold}`}>{pdfData.format} </span>{" "}
                  <span className={`${pdf.norm}`}> Format</span>
                  <br />
                  <br />
                  {size} <span className={`${pdf.bold}`}>{pdfData.fileSize} </span>{" "}
                  <span className={`${pdf.norm}`}> Size</span>
                  <br />
                  <br />
                </div>
                <div className={`col-6 position-relative ${pdf.buy}`}>
                  <button type="button" className={`${pdf.btn}`}>
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className={`row container mx-auto mb-5`}>
            <div className={`col-12 ${pdf.desTitle}`}>Description</div>
            <div className={`col-12 ${pdf.des}`}>
              {pdfData.description}
            </div>
          </section>
          <section className={`row container mx-auto mb-5`}>
            <div className={`col-12 ${pdf.learnTitle}`}>
              What you&apos;ll learn:
            </div>
            <div className={`col-6 ${pdf.des}`}><div dangerouslySetInnerHTML={{ __html: pdfData.whatYouLearn }} /></div>
          </section>
          <Footer />
        </main>
      </div>
    </SSRProvider>
  ):(<Loader />)
};

export default Pdfproduct;
