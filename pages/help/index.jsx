import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Loader from "../../src/components/Loader/Loader";
import { useContext } from "react";
import DataContext from "../../src/Context/DataContext";
import help from "../../styles/help.module.css";
import Menu from "./../../src/components/Menu/Menu";
import Footer from "./../../src/components/Footer/Footer";
import { SSRProvider } from "react-bootstrap";
import { useState } from "react";
export async function getStaticProps() {
  const res = await fetch(
    `${process.env.webURL}/Category/GetHelpcategories`
  );
  const data = await res.json();
  const res1 = await fetch(
    `${process.env.webURL}/Help/GetFAQ`
  );
  const data1 = await res1.json();
  return {
    props: {
      ...{ data,data1 },
    },
  };
}

const Help = (props) => {
  const[inputData,setInputData] = useState("")
  // console.log(inputData)
  const helpCat = props.data.data
  const frequently = props.data1.data
  const varify = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs>
        <style>{`.cls-1{opacity:0;}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <rect className="cls-1" width="24" height="24" />
        <path d="M18.9,9.88a.88.88,0,0,0-.78-.49H13.75V4.14a.88.88,0,0,0-1.59-.56l-7,9.63a.87.87,0,0,0-.07.88.88.88,0,0,0,.78.56h4.37V19.9a.87.87,0,0,0,.61.83.86.86,0,0,0,.27.05.88.88,0,0,0,.71-.36l7-9.63A.86.86,0,0,0,18.9,9.88ZM12,17.21V13.77a.87.87,0,0,0-.87-.87H7.62L12,6.84v3.43a.89.89,0,0,0,.88.88h3.5Z" />
      </g>
    </svg>
  );
  const accout = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs>
        <style>{`.cls-1{opacity:0}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <rect className="cls-1" width="24" height="24" />
        <path d="M15.32,12.64a5.4,5.4,0,1,0-7.58-.91,5.6,5.6,0,0,0,.91.91A9,9,0,0,0,3.05,20a.91.91,0,1,0,1.8.2,7.2,7.2,0,0,1,14.31,0,.91.91,0,0,0,.9.8h.1A.9.9,0,0,0,21,20,9,9,0,0,0,15.32,12.64ZM12,12a3.6,3.6,0,1,1,3.6-3.6A3.6,3.6,0,0,1,12,12Z" />
      </g>
    </svg>
  );
  const course = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs>
        <style>{`.cls-1{opacity:0}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <rect className="cls-1" width="24" height="24" />
        <path d="M20.38,2.93a11.94,11.94,0,0,0-2-.17A11.72,11.72,0,0,0,12,4.63,12,12,0,0,0,3.62,3a.91.91,0,0,0-.76.92v11a.92.92,0,0,0,.9.93l.17,0a9.94,9.94,0,0,1,7.54,1.75l.11.06h.1a.79.79,0,0,0,.64,0h.1l.11-.06a10,10,0,0,1,7.54-1.85.92.92,0,0,0,1.06-.74,1,1,0,0,0,0-.17v-11A.91.91,0,0,0,20.38,2.93ZM11.09,15.08A11.7,11.7,0,0,0,5.6,13.73H4.69V4.58H5.6a9.94,9.94,0,0,1,5.49,1.65Zm8.22-1.32H18.4a12,12,0,0,0-5.49,1.35V6.23A9.94,9.94,0,0,1,18.4,4.58h.91Zm1.07,3.8a11,11,0,0,0-2-.18A11.81,11.81,0,0,0,12,19.26a11.81,11.81,0,0,0-6.4-1.88,11,11,0,0,0-2,.18.9.9,0,0,0-.76,1h0a.92.92,0,0,0,1.07.72,9.94,9.94,0,0,1,7.54,1.75.93.93,0,0,0,1.06,0,9.94,9.94,0,0,1,7.54-1.75.92.92,0,0,0,1.07-.72.91.91,0,0,0-.75-1.05Z" />
      </g>
    </svg>
  );
  const pay = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs>
        <style>{`.cls-1{opacity:0;}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <rect className="cls-1" width="24" height="24" />
        <path d="M7.5,14.25h2.7a.9.9,0,0,0,0-1.8H7.5a.9.9,0,0,0,0,1.8Zm10.8-9H5.7A2.7,2.7,0,0,0,3,8v8.1a2.7,2.7,0,0,0,2.7,2.7H18.3a2.7,2.7,0,0,0,2.7-2.7V8A2.7,2.7,0,0,0,18.3,5.25Zm.9,10.8a.9.9,0,0,1-.9.9H5.7a.9.9,0,0,1-.9-.9v-5.4H19.2Zm0-7.2H4.8V8a.9.9,0,0,1,.9-.9H18.3a.9.9,0,0,1,.9.9Z" />
      </g>
    </svg>
  );
  const video = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs>
        <style>{`.cls-1{opacity:0;}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <rect className="cls-1" width="24" height="24" />
        <path d="M10.39,16.76a1,1,0,0,0-1.28,0,1,1,0,0,0-.19.3.89.89,0,0,0,0,.68,1.17,1.17,0,0,0,.19.3.9.9,0,0,0,1.27,0,.87.87,0,0,0,.27-.64.94.94,0,0,0-.07-.34A1.17,1.17,0,0,0,10.39,16.76ZM9.75,9.3a2.71,2.71,0,0,0-2.34,1.35.9.9,0,1,0,1.56.9H9a.9.9,0,1,1,.78,1.35.9.9,0,0,0-.9.9h0v.9a.9.9,0,0,0,1.8,0v-.17a2.69,2.69,0,0,0-.9-5.23ZM20.57,6.73a.9.9,0,0,0-.87,0L16.49,8.3A2.69,2.69,0,0,0,13.8,5.7H5.7A2.7,2.7,0,0,0,3,8.4v5.4a2.7,2.7,0,0,0,2.7,2.7h.9a.9.9,0,0,0,0-1.8H5.7a.9.9,0,0,1-.9-.9V8.4a.9.9,0,0,1,.9-.9h8.1a.9.9,0,0,1,.9.9v5.4a.9.9,0,0,1-.9.9h-.45a.9.9,0,0,0,0,1.8h.45a2.7,2.7,0,0,0,2.69-2.6l3.21,1.6a.91.91,0,0,0,1.21-.4.93.93,0,0,0,.09-.4V7.5A.91.91,0,0,0,20.57,6.73ZM19.2,13.24l-2.7-1.35V10.3L19.2,9Z" />
      </g>
    </svg>
  );
  const maintain = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs>
        <style>{`.cls-1{opacity:0;}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <rect className="cls-1" width="24" height="24" />
        <path d="M20.7,15.21l-4.06-4.05a5.86,5.86,0,0,0,.13-1.26A6.9,6.9,0,0,0,7,3.66a.9.9,0,0,0-.51.67.89.89,0,0,0,.25.79L10.62,9,9,10.63,5.1,6.73A.9.9,0,0,0,3.65,7a6.88,6.88,0,0,0,6.28,9.79,6.64,6.64,0,0,0,1.26-.12l4.05,4.06a.9.9,0,0,0,1.27,0h0a.9.9,0,0,0,0-1.27h0L12.11,15a.88.88,0,0,0-.85-.23A5.92,5.92,0,0,1,9.93,15,5.09,5.09,0,0,1,4.8,9.94v0A4.4,4.4,0,0,1,4.87,9l3.52,3.53a.9.9,0,0,0,1.27,0h0l2.86-2.89a.89.89,0,0,0,0-1.25L9,4.88a6.54,6.54,0,0,1,.89-.07A5.1,5.1,0,0,1,15,9.9a5.92,5.92,0,0,1-.18,1.33.91.91,0,0,0,.23.86l4.4,4.4a.91.91,0,1,0,1.28-1.28Z" />
      </g>
    </svg>
  );
  const { loading } = useContext(DataContext);
  return !loading ? (
    <SSRProvider>
      <div className={styles.container}>
        <Head>
          <title>Help</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
          <Menu />
          <section className={`row container mx-auto ${help.vitrin}`}>
            <div className={`col-7`}>
              <h5 className={`${help.vitrinDes}`}>Hello, how can we help?</h5>
              <div className="col-9 mx-auto">
                <form>
                <div className={`input-group ${help.inputsearch}`}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ask a Question"
                    aria-label="Ask a Question"
                    aria-describedby="basic-addon2"
                    value={inputData}
                    onChange={(e)=>setInputData(e.target.value)}
                  />
                  <div className="input-group-append">
                    <Link href={`/helpsearch?Key=${inputData}`}>
                    <button
                      className={`btn btn-outline-secondary bg-warning ${help.searchbutton}`}
                      type="submit"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={help.btnsearch}
                        viewBox="0 0 24 24"
                      >
                        <defs>
                          <style>{`.cls-1{opacity:0}`}</style>
                        </defs>
                        <g id="Layer_2" data-name="Layer 2">
                          <rect className="cls-1" width="24" height="24" />
                          <path d="M20.76,19.48l-3.34-3.31a8.1,8.1,0,1,0-1.25,1.25l3.31,3.31a.9.9,0,0,0,1.28,0h0A.93.93,0,0,0,20.76,19.48Zm-9.64-2.06a6.3,6.3,0,1,1,6.3-6.3A6.3,6.3,0,0,1,11.12,17.42Z" />
                        </g>
                      </svg>
                    </button>
                    </Link>
                  </div>
                </div>
                </form>
              </div>
            </div>
            <div className={`col-5 ${help.vitrinIMG}`}>
              <Image
                src={require(`./../../src/assets/help/vitrin.png`)}
                alt=""
                width="300"
                height="400"
              />
            </div>
          </section>
          <section className={`row container mx-auto mb-5`}>
            
            <h5 className={`${help.questionTitle}`}>
              Frequently Asked Questions
            </h5>
            {frequently.map((i)=>{
              return(<>
              <span className={`${help.bullet}`}></span>
              
            <span className={`${help.item}`}>
             <Link href={`/helpdetail/${i.id}`}>{i.title}</Link>
            </span>
            <br />
              </>)
            })}
          </section>
          <section className={`row container mx-auto mb-5`}>
            <h5 className={`${help.topictitle}`}>
              Select a Topic to Search for Help
            </h5>
            {helpCat.map((i)=>{
              return(
                <div className={`col-xl-4 col-md-6 col-sm-12 g-4`} key={i.id}>
              <div className={`col-12 ${help.topicItem}`}>
                <div className={`col-12 ${help.topicimg}`}>
                  <Image src={i.catPic} alt="" width="120" height="120"/>
                  </div>
                  
                <h5 className={`col-12 text-truncate`}><Link href={`/helpcat/${i.id}`}>{i.title}</Link></h5>
                <h6 className={`col-12 text-truncate`}>{i.subtitle}</h6>
              </div>
            </div>
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
