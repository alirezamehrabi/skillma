import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import detail from "../../styles/DetailCourse.module.css";
import main from "../../styles/MainCourse.module.css";
import search from "../../styles/Search.module.css";
import Menu from "./../../src/components/Menu/Menu";
import ShortVideoSlider from "./../../src/components/ShortVideoSlider/ShortVideoSlider";
import TxtSearch from "./../../src/components/TxtSearch/TxtSearch";
import SoundList from "../../src/components/SoundList/SoundList"
import TopCoursesSlider from "./../../src/components/TopCoursesSlider/TopCoursesSlider";
import Footer from "./../../src/components/Footer/Footer";
import { Tab, Tabs, SSRProvider } from "react-bootstrap";
import Loader from "../../src/components/Loader/Loader";
import { useContext, useState, useEffect } from "react";
import DataContext from "../../src/Context/DataContext";
import { useRouter } from 'next/router';
import { RiShareForwardLine } from 'react-icons/ri';
import { Moment } from 'react-moment';

const Search = () => {
  const router = useRouter()
  const [data, setData] = useState()
  const [dataTXT, setDataTXT] = useState()
  const [dataSound, setDataSound] = useState()
  const [dataVerify, setDataVerify] = useState()
  const [dataFree, setDataFree] = useState()
  const [dataNFree, setNDataFree] = useState()
  const fetchData = async (p) => {
    try {
      const result = await fetch(
        `${process.env.webURL}/ShortContent/GetFilteredShortVideo?SearchKey=${router.query.search}`
      );
      const json = await result.json();
      setData(json.data.pageData)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData0 = async (p) => {
    try {
      const result = await fetch(
        `${process.env.webURL}/ShortContent/GetFilteredTexes?SearchKey=${router.query.search}`
      );
      const json = await result.json();
      setDataTXT(json.data.pageData)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData0();
  }, [])

  const fetchData1 = async (p) => {
    try {
      const result = await fetch(
        `${process.env.webURL}/ShortContent/GetFilteredSounds?SearchKey=${router.query.search}`
      );
      const json = await result.json();
      setDataSound(json.data.pageData)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData1();
  }, [])

  const fetchData2 = async (p) => {
    try {
      const result = await fetch(
        `${process.env.webURL}/Course/GetVerifiedFilterCourses?SearchKey=${router.query.search}`
      );
      const json = await result.json();
      setDataVerify(json.data.pageData)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData2();
  }, [])
  const fetchData3 = async (p) => {
    try {
      const result = await fetch(
        `${process.env.webURL}/Course/GetFilterCourses?SearchKey=${router.query.search}`
      );
      const json = await result.json();
      setDataFree(json.data.pageData)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData3();
  }, [])
  const fetchData4 = async (p) => {
    try {
      const result = await fetch(
        `${process.env.webURL}/Course/GetFilterCoursesNotFree?SearchKey=${router.query.search}`
      );
      const json = await result.json();
      setNDataFree(json.data.pageData)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData4();
  }, [])
  const { loading } = useContext(DataContext);

const ndt = () =>{
  if(dataTXT === undefined){
    <Loader/>
 }
else if(dataTXT.length === 0){
 return <h3 className={styles.nodata}>There is no data to show</h3>
}
}
const nds = () =>{
  if(dataSound === undefined){
    <Loader/>
 }
 else if(dataSound.length === 0){
  return <h3 className={styles.nodata}>There is no data to show</h3>
 }
}


  

  return !loading ? (
    <SSRProvider>
      <div className={styles.container}>
        <Head>
          <title>Search Result</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <main>
          <Menu />
          <section className={`row container mx-auto mb-5 `}>
            <Tabs
              defaultActiveKey="pop"
              id="uncontrolled-tab-example"
              className={`mb-5 ${search.tabs} changeTab`}
            >
              <Tab eventKey="pop" title="Video" className={``}>
                <div className={`col-12`}>
                  <section className={`row container mx-auto mb-5`}>
                    <div className={`col-md-8 ${styles.titleShort}`}>Short Videos</div>
                    <div className={`col-md-4 mx-auto ${styles.but} ${styles.but2}`}>
                    </div>
                    <div className={`col-12`}><ShortVideoSlider data={data} /></div>
                  </section>
                  <section className={`row container mx-auto mb-5 `}>
                    <div className={`col-sm-12 ${styles.titleFree}`}>Free Courses</div>
                    <TopCoursesSlider data={dataFree}/>
                  </section>
                  <section className={`row container mx-auto mb-5 `}>
                    <div className={`col-sm-12 ${styles.titleFree}`}>Not Free Courses</div>
                    <TopCoursesSlider data={dataNFree}/>
                  </section>
                  <section className={`row container mx-auto mb-5 `}>
                    <div className={`col-md-8 ${main.titleVerified}`}>Verified Courses</div>
                    
                    <div className={`col-12`}>
                      <TopCoursesSlider data={dataVerify}/>
                    </div>
                  </section>
                </div>
              </Tab>
              <Tab eventKey="new" title="Text">
                <div className={`col-12`}>
                  <div className={`col-sm-8 ${search.titleDefination}`}>Defination</div>
                  {ndt()}
                  {dataTXT !== undefined ? dataTXT.map((i, index) => {
                    return (
                      <div className={`col-12`} key={i.id}>
                        <div className={`row ${search.textHolder}`} >
                          <div className={`col-2`}>
                            <figure className={`${search.textimg}`}>
                              <Image src={i.picName} alt="text image" height="150" width="150" />
                            </figure>
                          </div>
                          <div className={`col-10`}>
                            <div className={`col-12 p-5`}>
                              <h6 className={`d-block ${search.searchTitle}`}>{i.title}</h6>
                              <h6 className={`d-block ${search.searchDate}`}>
                                {/* <Moment fromNow> */}
                                {i.createdAt}
                                {/* </Moment> */}
                              </h6>
                            </div>
                            <div className={`col-12 ${search.searchTXT}`}>
                              <h6>{i.description}<Link href={`txt/${i.id}`}>See More</Link></h6>
                            </div>
                            <div className={`col-3 ${search.iconFloat}`}>
                              <div className={`row ${detail.bot}`}>
                                <div className={`col-4`}>
                                  <RiShareForwardLine style={{ color: "blue" }} />{i.shareCount}
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
                                  {i.commentsCount}
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
                                  {parseFloat(i.rate).toFixed(2)}/5
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }) : <Loader />}
                </div>
              </Tab>
              <Tab eventKey="trend" title="Sound">
                <div className={`col-12`}>
                  <div className={`col-sm-8 ${search.titleSound}`}>Sounds</div>
                  {nds()}
                  {dataSound !== undefined ? dataSound.map((i, index) => {
                    return (
                      <div className={`row ${search.sound}`}  key={i.id}>
                        <Link href={`/sounddetail/${i.id}`}>
                    <div className={`col-xl-4 col-md-6 ${search.soundItem}`}>
                        <figure className={`${search.soundImgHolder}`}>
                            <Image src={i.picName} height="100" width="100" alt="background" className={`${search.soundImg}`}/>
                            <figure className={`${styles.teacherBadge}`}  >
                            <Image
                              src={i.teacherPic}
                              alt="person picture"
                              width="44"
                              height="44"
                            />
                            <h5 className={``}>{i.teacherName}</h5>
                            <h6 className={``}>{i.year}</h6>
                          </figure>
                          <figure className={`${search.soundContent}`} >
                            <Image
                              src={require(`../../src/assets/home/sound2.png`)}
                              alt="sound"
                              width=""
                              height=""
                            />
                            <h6 className={``}>{i.title}</h6>
                          </figure>
                        </figure>
                        <div className={`col-9 mx-auto`}>
                              <div className={`row ${styles.bot} ${search.bot}`}>
                                <div className={`col-4`}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="blue"
                                    className="bi bi-eye"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                  </svg>
                                  {i.views}
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
                                  {i.commentCount}
                                </div>
                                <div className={`col-4`}>
                                  <RiShareForwardLine style={{ color: "blue" }} />{i.shareCount}
                                </div>
                              </div>
                              </div>
                    </div>
                    </Link>
                    </div>
                  )
                    }) : <Loader />}
                </div>
              </Tab>
            </Tabs>
          </section>

          <Footer />
        </main>
      </div>
    </SSRProvider>
  ) : (<Loader />)
};

export default Search;
