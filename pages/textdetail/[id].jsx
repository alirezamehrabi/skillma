import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import detail from "../../styles/DetailCourse.module.css";
import Menu from "../../src/components/Menu/Menu";
import Comment from "../../src/components/Comment/Comment";
import Footer from "../../src/components/Footer/Footer";
import { SSRProvider } from "react-bootstrap";
import { RiShareForwardLine } from "react-icons/ri";
import Loader from "../../src/components/Loader/Loader";
import { useContext } from "react";
import DataContext from "../../src/Context/DataContext";
import Moment from "react-moment";
export async function getStaticPaths() {
  return { paths:[], fallback: 'blocking' };
}
export async function getStaticProps(context) {
  const paths = context.params.id;
  const request = await fetch(
    `${process.env.webURL}/ShortContent/GetTextDetail?id=${paths}`
  );
  const request1 = await fetch(
    `${process.env.webURL}/Comment/GetShortVideoComment?CourseId=${paths}&page=1&pagesize=5`
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
const TxtDetail = (props) => {
  const cd = props.coursedet.data;
  console.log(cd)
  const datafunc = async (p)=>{
    try {
      const result = await fetch(
        `${process.env.webURL}/Comment/GetShortVideoComment?CourseId=${cd.id}&page=${p}&pagesize=5`
        );
        const json = await result.json();
      return json.data.pageData
    } catch (error) {
       console.log(error);
    }
  }
    const clock = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>{`.cls-1{fill:#0092e4;opacity:0;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="keylines"><rect className="cls-1" width="24" height="24"/><path d="M14.79,12.57,12.9,11.48v-4a.9.9,0,0,0-1.8,0V12a.9.9,0,0,0,.45.78l2.34,1.35a.9.9,0,0,0,.9-1.56ZM12,3a9,9,0,1,0,9,9A9,9,0,0,0,12,3Zm0,16.2A7.2,7.2,0,1,1,19.2,12,7.2,7.2,0,0,1,12,19.2Z"/></g></g></svg>
    const { loading } = useContext(DataContext);
    let pageName = 3

    return !loading ? (
    <SSRProvider>
      <div className={styles.container}>
        <Head>
          <title>Text Detail Page</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <main>
          <Menu />
          <section className={`row mx-auto container`}>
            <div className={`col-xl-6 mx-4 ${detail.videoHolder} ${detail.videoHolder2} ${detail.videoHolder3}`}>
              <div className={` ${styles.introHolder}`}>
              <Image src={cd.picName} alt="" width="500" height="500"/>
              <h5 className={`${detail.toptext}`}>{cd.title}</h5>
              
              <div className={`row ${styles.conHolder} ${styles.conHoldertxt}`}>
                <div className={`col-6 ${detail.personHolder}`}>
                  <figure className={`${styles.teacherBadgeModal}`}>
                    <Image
                      src={cd.teacherPic}
                      alt="logo"
                      width="50"
                      height="50"
                    />
                    <h5 className={``}>{cd.teacherName}</h5>
                    <h6 className={``}>{cd.connectionsCount} followers</h6>
                  </figure>
                </div>
                <div className={`col-6 mx-auto`}>
                  <div className={`row ${detail.bot}`}>
                    <div className={`col-4`}>
                      <RiShareForwardLine style={{ color: "blue" }} />{cd.shareCount}
                    </div>
                    <div className={`col-4`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="blue"
                        className="bi bi-chat-dots"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                      </svg>
                      {cd.commentCount}
                    </div>

                    <div className={`col-4`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="yellow"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      {parseFloat(cd.rate).toFixed(2)}/5
                    </div>
                  </div>
                </div>
              </div></div>
              
            </div>
            
            <div className={`col-xl-5 ${detail.session}`}>
              <h5 className={`${detail.sessionName}`}>Related</h5>
              {cd.relatedItems.map((i)=>{
                return(
                  <div className={`col-11 mx-auto ${detail.sounditem}`} key={i.id}>
                <div className={`row`}>
                    <div className={`col-4 ${detail.leftit}`}>
                    <Image
                      src={i.picName}
                      alt="logo"
                      width="120"
                      height="120"
                    />
                    </div>
                    <div className={`col-8 ${detail.rightit}`}>
                        <h5 className={detail.soundname}>{i.title}</h5>
                        <div className={`${detail.speecher}`}>
                    <Image
                      src={i.teacherPic}
                      alt="logo"
                      width="60"
                      height="60"
                    /><span className={`${detail.speechername}`}>{i.teacherName}</span>
                    </div>
                    </div>
              </div>
              
              </div>
                )
              })}

            </div>
          </section>
          <section className={`row mx-auto container ${detail.content}`}>
            <div className={`col-xl-10 mx-4 ${detail.contenttext}`}>
              <div className={`col-xl-6 ${detail.content}`}>
                <h5 className={detail.contentTitle}>
                  {cd.title}
                  <span className={`${detail.year}`}><Moment fromNow>{cd.createdAt}</Moment></span>
                </h5>
                <h6 className={detail.contentDescription}>
                  {cd.description}
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
            shortContentId={cd.id}
            pageName={pageName}
          />
          <Footer />
        </main>
      </div>
    </SSRProvider>
  ):(<Loader />)
};

export default TxtDetail;
