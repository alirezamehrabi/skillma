import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import detail from "../../styles/DetailCourse.module.css";
import teach from "../../styles/Teach.module.css";
import main from "../../styles/MainCourse.module.css";
import search from "../../styles/Search.module.css";
import Menu from "../../src/components/Menu/Menu";
import ShortVideoSlider from "../../src/components/ShortVideoSlider/ShortVideoSlider";
import TxtSearch from "../../src/components/TxtSearch/TxtSearch";
import SoundList from "../../src/components/SoundList/SoundList";
import TopCoursesSlider from "../../src/components/TopCoursesSlider/TopCoursesSlider";
import Footer from "../../src/components/Footer/Footer";
import Comment from "../../src/components/Comment/Comment";
import { Button, SSRProvider } from "react-bootstrap";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineClockCircle,
  AiFillStar,
} from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { FaUserGraduate } from "react-icons/fa";
import { TiArrowForwardOutline } from "react-icons/ti";
import Loader from "../../src/components/Loader/Loader";
import { useContext, useEffect } from "react";
import DataContext from "../../src/Context/DataContext";
import { useDispatch, useSelector } from "react-redux";
import { getLikeFallBack } from "../api/redux/likereducer";
import { teacherprofile } from "../api/redux/profilereducer";
import { useRouter } from "next/router";
import { useState } from "react";
import { connectrequest } from "../api/redux/connectreducer";

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}
export async function getStaticProps(context) {
  const paths = context.params.id;
  const request = await fetch(
    `${process.env.webURL}/TeacherDetail/GetTeacherDetailById?id=${paths}`
  );
  const request1 = await fetch(
    `${process.env.webURL}/Comment/GetTeacherComment?CourseId=${paths}&page=1&pagesize=5`
  );
  try {
    const coursedet = await request.json();
    const comment = await request1.json();
    return {
      props: {
        ...{ coursedet, comment },
      },
    };
  } catch (e) {
    return {
      redirect: {
        destination: "/404",
      },
    };
  }
}

const TeacherProfile = (props) => {
  const [res, setRes] = useState();
  const { loading } = useContext(DataContext);

  const data1 = useSelector((like) => like.like.data1);
  const dispatch = useDispatch();
  const id = props.coursedet.data.teacherId;
  const p = 1;
  useEffect(() => {
    dispatch(getLikeFallBack({ id, p }));
  }, []);
  const router = useRouter();
  const td = useSelector((profile) => profile.profile.data1.data);
  useEffect(() => {
    dispatch(teacherprofile(router.query.id));
  }, []);
  const cd = props.coursedet.data;
  const datafunc = async (p) => {
    try {
      const result = await fetch(
        `${process.env.webURL}/Comment/GetTeacherComment?CourseId=${cd.teacherId}&page=${p}&pagesize=5`
      );
      const json = await result.json();
      return json.data.pageData;
    } catch (error) {
      console.log(error);
    }
  };
  const course = (
    <svg
      id="Group_20373"
      data-name="Group 20373"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <rect
        id="Rectangle_3457"
        data-name="Rectangle 3457"
        width="24"
        height="24"
        fill="blue"
        opacity="0"
      />
      <path
        id="Path_9761"
        data-name="Path 9761"
        d="M20.383,2.929A11.991,11.991,0,0,0,18.4,2.755,11.84,11.84,0,0,0,12,4.629,11.835,11.835,0,0,0,5.6,2.8a11.991,11.991,0,0,0-1.984.174.915.915,0,0,0-.759.914v10.97a.914.914,0,0,0,.9.927.869.869,0,0,0,.169-.013,9.965,9.965,0,0,1,7.542,1.746l.109.064h.1a.835.835,0,0,0,.64,0h.1l.109-.064a9.968,9.968,0,0,1,7.542-1.847.913.913,0,0,0,1.056-.745.956.956,0,0,0,.014-.169V3.788A.915.915,0,0,0,20.383,2.929Zm-9.3,12.149A11.764,11.764,0,0,0,5.6,13.725H4.687V4.584a7.742,7.742,0,0,1,.914,0,9.932,9.932,0,0,1,5.485,1.645Zm8.227-1.316H18.4a11.764,11.764,0,0,0-5.485,1.353V6.229A9.932,9.932,0,0,1,18.4,4.584a7.742,7.742,0,0,1,.914,0Zm1.07,3.794a11.991,11.991,0,0,0-1.984-.174A11.832,11.832,0,0,0,12,19.256a11.832,11.832,0,0,0-6.4-1.874,11.991,11.991,0,0,0-1.984.174A.913.913,0,0,0,2.858,18.6v.005a.915.915,0,0,0,1.07.722,9.965,9.965,0,0,1,7.542,1.746.913.913,0,0,0,1.06,0,9.965,9.965,0,0,1,7.542-1.746.9.9,0,1,0,.316-1.773Z"
        fill="#2d3ddf"
      />
    </svg>
  );
  if (td === undefined) {
    return <Loader />;
  }
  let pageName = 4;
  return !loading ? (
    <SSRProvider>
      <div className={styles.container}>
        <Head>
          <title>Teacher Profile</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
          <Menu />
          <section
            className={`row container mx-auto mb-5 ${teach.aboutTeacher}`}
          >
            <div className={`col-12`}>
              <div className={`row`}>
                <div className={`col-7 ${teach.teachHolder}`}>
                  <figure className={`${teach.teacherPic}`}>
                    <Image
                      src={td !== undefined && td.pic}
                      alt="teacher pic"
                      height="100"
                      width="100"
                    />
                  </figure>
                  <h6 className={`${teach.name}`}>
                    {td !== undefined && td.name}{" "}
                    <span className={`${teach.follow}`}>
                      ({td !== undefined && td.connections} followers)
                    </span>
                  </h6>
                  <h6 className={`${teach.role}`}>
                    {td !== undefined && td.feild}
                  </h6>
                  {res !== 200 ? (
                    <Button
                      variant="warning"
                      onClick={() => {
                        dispatch(connectrequest(router.query.id)).then((r) => {
                          setRes(r.payload);
                          dispatch(teacherprofile(router.query.id));
                        });
                      }}
                      className={`${teach.connectbtn} ${teach.btnp}`}
                    >
                      Connect
                    </Button>
                  ) : (
                    <Button
                      disabled
                      className={`${teach.connectbtn} ${teach.btnp}`}
                    >
                      Requested
                    </Button>
                  )}
                </div>
                <div className={`col-4 ${teach.about}`}>
                  <span>About me</span>
                </div>
                <div className={`col-1 ${teach.social}`}>
                  <Link href={`${td.facebook}`}>
                    <AiOutlineFacebook />
                  </Link>
                  <Link href={`${td.twitter}`}>
                    <FiTwitter />
                  </Link>
                  <Link href={`${td.insta}`}>
                    <AiOutlineInstagram />
                  </Link>
                  <Link href={td.shareLink}>
                    <TiArrowForwardOutline />
                  </Link>
                </div>
              </div>
            </div>
            <div className={`col-12 ${teach.teachDes}`}>
              {td !== undefined && td.aboutTeacher}
            </div>
            <div className={`col-xl-8  col-lg-10 col-md-11 col-sm-12`}>
              <div className={`row`}>
                <div className={`col-md-6 ${teach.teacherStatistic}`}>
                  <h6 className={`col-12 ${teach.bold}`}>
                    <AiFillStar />{" "}
                    {parseFloat(td !== undefined && td.rate).toFixed(2)}{" "}
                    <span className={`col-12 ${teach.normal}`}>5.0</span>
                  </h6>
                  <h6 className={`col-12 ${teach.bold}`}>
                    <FaUserGraduate /> {td !== undefined && td.students}{" "}
                    <span className={`col-12 ${teach.normal}`}>students</span>
                  </h6>
                </div>
                <div className={`col-md-6 ${teach.teacherStatistic}`}>
                  <h6 className={`col-12 ${teach.bold}`}>
                    {course} {td !== undefined && td.teachHour}{" "}
                    <span className={`col-12 ${teach.normal}`}>hours</span>
                  </h6>
                  <h6 className={`col-12 ${teach.bold}`}>
                    <TiArrowForwardOutline />
                    {td !== undefined && td.courseCount}{" "}
                    <span className={`col-12 ${teach.normal}`}>Courses</span>
                  </h6>
                </div>
              </div>
            </div>
          </section>
          <section className={`row container mx-auto mb-5`}>
            <div className={`col-sm-8 ${styles.titleShort}`}>Short Videos</div>
            <div
              className={`col-sm-4 mx-auto ${styles.but} ${styles.but2}`}
            ></div>
            <div className={`col-12`}>
              <ShortVideoSlider data={td !== undefined && td.shortVideos} />
            </div>
          </section>
          <section
            className={`row container mx-auto mb-5 ${styles.topCourses}`}
          >
            <div className={`col-sm-8 ${styles.titleCourse}`}>My Courses</div>
            <div className={`col-12`}>
              <TopCoursesSlider data={td !== undefined && td.courses} />
            </div>
          </section>
          <Comment
            teacherId={cd.teacherId}
            commentData={data1}
            totalCount={props.comment.data.totalCount}
            totalPage={props.comment.data.totalPage}
            page={props.comment.data.page}
            pageTitle={props.coursedet.data.title}
            datafunc={datafunc}
            courseId={props.coursedet.data.teacherId}
            pageName={pageName}
          />
          <section className={`row container mx-auto mb-5 ${teach.student}`}>
            <div className={`col-sm-8 ${teach.titleStudents}`}>Students</div>
            <div className={`col-sm-11 mx-auto ${teach.listStudents}`}>
              {td !== undefined &&
                td.studentDetails.map((i, index) => {
                  return (
                    <Image
                      src={i.picName}
                      alt={i.name}
                      height="80"
                      width="80"
                      key={index}
                    />
                  );
                })}
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </SSRProvider>
  ) : (
    <Loader />
  )
  

  
  
  
};

export default TeacherProfile;
