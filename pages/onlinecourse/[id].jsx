import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import detail from "../../styles/DetailCourse.module.css";
import online from "../../styles/Onlinecourse.module.css";
import Menu from "../../src/components/Menu/Menu";
import Comment from "../../src/components/Comment/Comment";
import Footer from "../../src/components/Footer/Footer";
import { SSRProvider } from "react-bootstrap";
import { FaUserGraduate } from "react-icons/fa";
import {
  AiOutlineClockCircle
} from "react-icons/ai";
import { GiLevelEndFlag } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";
import { MdOutlinePriceChange } from "react-icons/md";
import Loader from "../../src/components/Loader/Loader";
import { useContext } from "react";
import DataContext from "../../src/Context/DataContext";
export async function getStaticPaths() {
  return { paths:[], fallback: 'blocking' };
}

export async function getStaticProps(context) {
  const paths = context.params.id;
  const request = await fetch(
    `${process.env.webURL}/OnlineCourse/GetOnlineCourseDetail?id=${paths}`
  );
  const request1 = await fetch(
    `${process.env.webURL}/Comment/GetOnlineCourseComment?CourseId=${paths}&page=1&pagesize=5`
  );

 try{
  const coursedet = await request.json();
  const comment = await request1.json();
  return {
    props: {
      ...{ coursedet,comment },
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
const onlinecourse = (props) => {
  const cd = props.coursedet.data;
  console.log(props.coursedet.data)
  const datafunc = async (p)=>{
    try {
      const result = await fetch(
        `${process.env.webURL}/Comment/GetOnlineCourseComment?CourseId=${cd.id}&page=${p}&pagesize=5`
        );
        const json = await result.json();
        // console.log(json)
      return json.data.pageData
    } catch (error) {
       console.log(error);
    }
  }
  const meeting = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{fill:blue;opacity:0;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="keylines"><rect className="cls-1" width="25" height="25"/><path d="M7.45,10.18H9.27a.91.91,0,0,0,0-1.82H7.45a.91.91,0,1,0,0,1.82ZM20.19,4.72H12.91V3.81a.91.91,0,0,0-1.82,0v.91H3.81a.91.91,0,0,0-.91.91v9.1a2.73,2.73,0,0,0,2.73,2.73H9.81L7.72,19.54a.91.91,0,0,0,0,1.29h0a.9.9,0,0,0,1.28,0H9l2.08-2.09v1.44a.91.91,0,0,0,1.82,0V18.74L15,20.83a.91.91,0,0,0,1.29,0h0a.91.91,0,0,0,0-1.29h0l-2.09-2.08h4.18a2.73,2.73,0,0,0,2.73-2.73V5.63A.91.91,0,0,0,20.19,4.72Zm-.91,10a.91.91,0,0,1-.91.91H5.63a.91.91,0,0,1-.91-.91V6.54H19.28ZM7.45,13.82h5.46a.91.91,0,0,0,0-1.82H7.45a.91.91,0,1,0,0,1.82Z"/></g></g></svg>
  const { loading } = useContext(DataContext);
 let pageName = 2
  return !loading ? (
    <SSRProvider>
      <div className={styles.container}>
        <Head>
          <title>Online Course Page</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <main>
          <Menu />
          <section className={`row container mx-auto container`}>
            <div className={`col-12 ${online.cdetail}`}>
            <figure className={`${online.teacherBadge}`}  >
                <Image
                  src={require(`../../src/assets/home/teacherMini.png`)}
                  alt="logo"
                  width=""
                  height=""
                />
                
                <h5 className={`${online.name}`}>Dani Beaumont</h5>
                <h6 className={`${online.rol}`}>User Expeience Design, User Interface</h6>
                </figure>
                <h5 className={`${online.work}`}>User Experience (UX): The Ultimate Guide to Usability and UX</h5>
                <h6 className={`${online.des}`}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed.</h6>
                
                
                
                
                <div className={`col-md-6 ${online.addtocart}`}>
                <div className={`row`}>
                  <div className={`col-xl-6 ${detail.cartItem}`}>
                    <MdOutlinePriceChange />
                    <h6 className={`col-12 ${detail.normal}`}>
                      Price:{" "}
                      <span className={`col-12 ${detail.bold}`}>56$</span>
                    </h6>
                    <GiLevelEndFlag />
                    <h6 className={`col-12 ${detail.normal}`}>
                      Level:{" "}
                      <span className={`col-12 ${detail.bold}`}>Begginer</span>
                    </h6>
                    <TbCertificate />
                    <h6 className={`col-12 ${detail.normal}`}>
                      Certificate:{" "}
                      <span className={`col-12 ${detail.bold}`}>Lorem</span>
                    </h6>
                  </div>
                  <div className={`col-xl-6 ${detail.cartItem}`}>
                    <AiOutlineClockCircle />
                    <h6 className={`col-12 ${detail.normal}`}>
                      Duration:{" "}
                      <span className={`col-12 ${detail.bold}`}>128 h</span>
                    </h6>
                    {meeting} 
                    <h6 className={`col-12 ${detail.normal}`}>
                      Meeting:{" "}
                      <span className={`col-12 ${detail.bold}`}>18</span>
                    </h6>
                    <FaUserGraduate />
                    <h6 className={`col-12 ${detail.normal}`}>
                      Student:{" "}
                      <span className={`col-12 ${detail.bold}`}>12450</span>
                    </h6>
                  </div>
                  <div className={`col-12 mx-auto ${detail.cartBut}`}>
                    <div className={`row`}>
                    <div className={`col-6 g-4`}>
                    <Link href="#">
                        <button
                          type="button"
                          className={`btn btn-warning ${styles.logBut} ${detail.cartButton}`}
                        >
                          register
                        </button>
                    </Link>
                    </div>
                    <div className={`col-6 g-4`}>
                    <Link href="#">
                        <button
                          type="button"
                          className={`btn btn-outline-warning ${styles.logBut} ${detail.cartButton} ${online.cartButton}`}
                        >
                          Download Topics
                        </button>
                    </Link>
                    </div>

                    </div>
                    
                    
                  </div>
                </div>
                </div>
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                </div>
          </section>
          <section className={`row mx-auto container ${detail.content}`}>
            <div className={`col-xl-12 mx-4`}>
              <div className={`col-12 ${detail.content}`}>
                <h5 className={detail.contentTitle}>What you ll learn:</h5>
                <h6
                  className={`${detail.contentDescription} ${detail.contentDescription2}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="blue"
                    className="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                  Lorem Ipsum is simply dummy text of the printing
                </h6>

                <h6
                  className={`${detail.contentDescription} ${detail.contentDescription2}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="blue"
                    className="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                  Lorem Ipsum is simply dummy
                </h6>

                <h6
                  className={`${detail.contentDescription} ${detail.contentDescription2}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="blue"
                    className="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                  Lorem Ipsum is simply dummy
                </h6>

                <h6
                  className={`${detail.contentDescription} ${detail.contentDescription2}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="blue"
                    className="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                  Lorem Ipsum is simply dummy text of the printing
                </h6>
              </div>
              <div className={`col-12 ${detail.content}`}>
                <h5 className={detail.contentTitle}>requirement</h5>
                <div className={detail.circle} />
                <h6
                  className={`${detail.contentDescription} ${detail.contentDescription3}`}
                >
                  Lorem Ipsum is simply dummy text of the printing
                </h6>
                <div className={detail.circle} />
                <h6
                  className={`${detail.contentDescription} ${detail.contentDescription3}`}
                >
                  Lorem Ipsum is simply dummy
                </h6>
                <div className={detail.circle} />
                <h6
                  className={`${detail.contentDescription} ${detail.contentDescription3}`}
                >
                  Lorem Ipsum is simply dummy
                </h6>
              </div>
            </div>
          </section>
          <Comment
            teacherId={cd.teacherId}
            commentData={props.comment.data.pageData}
            totalCount={props.comment.data.totalCount}
            totalPage={props.comment.data.totalPage}
            page={props.comment.data.page}
            pageTitle={props.coursedet.data.title}
            datafunc={datafunc}
            courseId={props.coursedet.data.id}
            pageName={pageName}
          />
          <section className={`row container mx-auto mb-5 `}>
            <div className={`col-sm-12 ${online.related}`}>Certificate</div>
            <div className={`row`}>
              <div className={`col-sm-6 p-3 text-justify`}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros book. It usually begins with.<br/> The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts </div>
              <div className={`col-sm-6`}>
                <figure className={`d-flex justify-content-center`}>
                <Image src={require(`./../../src/assets/onlinecourse/cer.png`)} alt="" width="300" height="300"/>
                </figure>
              </div>
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </SSRProvider>
  ):(<Loader />)
};

export default onlinecourse;
