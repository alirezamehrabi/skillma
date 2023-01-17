import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {useState,useEffect} from "react"
import ReactPaginate from "react-paginate"
import styles from "../../../styles/Home.module.css";
import detail from "../../../styles/DetailCourse.module.css";
import search from "../../../styles/Search.module.css";
import { Tab, Tabs,SSRProvider  } from "react-bootstrap";
import {RiShareForwardLine} from "react-icons/ri"
import DataContext from "../../Context/DataContext";
import { useContext } from "react";
import Loader from "../Loader/Loader";
import Moment from "react-moment";
const Search = ({fetchData0,fetchData1,fetchData2,fetchData3}) => {
  const { loading } = useContext(DataContext);

  const [mydata1, setMydata1] = useState();
  useEffect(() => {
    const data =async()=>{
    setMydata1(await fetchData1(1))
  }
  data()
  }, [])
  const [pageNum, setPageNum] = useState(0);
  const pageCount = mydata1 !==undefined ? mydata1.totalPage :(<Loader />)
  const changePage = async({ selected }) => {
    setPageNum(selected);
    setMydata1(await fetchData1(selected+1));
  };
  const displayItems = mydata1 !==undefined ? mydata1.pageData.map((i) => {
    return(
      <div className={`col-12`} key={i.id}>
                  <div className={`row ${search.textHolder}`} >
                      <div className={`col-2`}>
                          <figure className={`${search.textimg}`}>
                              <Image src={i.picName} alt="text image" height="150" width="150"/>
                          </figure>
                      </div>
                      <div className={`col-10`}>
                      <div className={`col-12 p-5`}>
                          <h6 className={`d-block ${search.searchTitle}`}>{i.title}</h6>
                          <h6 className={`d-block ${search.searchDate}`}><Moment fromNow>{i.createdAt}</Moment></h6>
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
                        {i.rate}/5
                      </div>
                    </div>
                  </div>
                      </div>
                  </div>
                </div>
    )
    }):(<Loader />);


    const [mydata0, setMydata0] = useState();
    useEffect(() => {
      const data =async()=>{
      setMydata0(await fetchData0(1))
    }
    data()
    }, [])
    const [pageNum0, setPageNum0] = useState(0);
    const pageCount0 = mydata0 !==undefined ? mydata0.totalPage :(<Loader />)
    const changePage0 = async({ selected }) => {
      setPageNum0(selected);
      setMydata0(await fetchData0(selected+1));
    };
    const displayItems0 = mydata0 !==undefined ? mydata0.pageData.map((i) => {
      return(
        <div className={`col-12`} key={i.id}>
                    <div className={`row ${search.textHolder}`} >
                        <div className={`col-2`}>
                            <figure className={`${search.textimg}`}>
                                <Image src={i.picName} alt="text image" height="150" width="150"/>
                            </figure>
                        </div>
                        <div className={`col-10`}>
                        <div className={`col-12 p-5`}>
                            <h6 className={`d-block ${search.searchTitle}`}>{i.title}</h6>
                            <h6 className={`d-block ${search.searchDate}`}><Moment fromNow>{i.createdAt}</Moment></h6>
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
                          {i.rate}/5
                        </div>
                      </div>
                    </div>
                        </div>
                    </div>
                  </div>
      )
      }):(<Loader />);


      const [mydata2, setMydata2] = useState();
      useEffect(() => {
        const data =async()=>{
        setMydata2(await fetchData2(1))
      }
      data()
      }, [])
      const [pageNum2, setPageNum2] = useState(0);
      const pageCount2 = mydata2 !==undefined ? mydata2.totalPage :(<Loader />)
      const changePage2 = async({ selected }) => {
        setPageNum2(selected);
        setMydata2(await fetchData2(selected+1));
      };
      const displayItems2 = mydata2 !==undefined ? mydata2.pageData.map((i) => {
        return(
          <div className={`col-12`} key={i.id}>
                      <div className={`row ${search.textHolder}`} >
                          <div className={`col-2`}>
                              <figure className={`${search.textimg}`}>
                                  <Image src={i.picName} alt="text image" height="150" width="150"/>
                              </figure>
                          </div>
                          <div className={`col-10`}>
                          <div className={`col-12 p-5`}>
                              <h6 className={`d-block ${search.searchTitle}`}>{i.title}</h6>
                              <h6 className={`d-block ${search.searchDate}`}><Moment fromNow>{i.createdAt}</Moment></h6>
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
                            {i.rate}/5
                          </div>
                        </div>
                      </div>
                          </div>
                      </div>
                    </div>
        )
        }):(<Loader />);

        const [mydata3, setMydata3] = useState();
      useEffect(() => {
        const data =async()=>{
        setMydata3(await fetchData3(1))
      }
      data()
      }, [])
      const [pageNum3, setPageNum3] = useState(0);
      const pageCount3 = mydata3 !==undefined ? mydata3.totalPage :(<Loader />)
      const changePage3 = async({ selected }) => {
        setPageNum3(selected);
        setMydata3(await fetchData3(selected+1));
      };
      const displayItems3 = mydata3 !==undefined ? mydata3.pageData.map((i) => {
        return(
          <div className={`col-12`} key={i.id}>
                      <div className={`row ${search.textHolder}`} >
                          <div className={`col-2`}>
                              <figure className={`${search.textimg}`}>
                                  <Image src={i.picName} alt="text image" height="150" width="150"/>
                              </figure>
                          </div>
                          <div className={`col-10`}>
                          <div className={`col-12 p-5`}>
                              <h6 className={`d-block ${search.searchTitle}`}>{i.title}</h6>
                              <h6 className={`d-block ${search.searchDate}`}><Moment fromNow>{i.createdAt}</Moment></h6>
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
                            {i.rate}/5
                          </div>
                        </div>
                      </div>
                          </div>
                      </div>
                    </div>
        )
        }):(<Loader />);
 
  return (
    <SSRProvider>
      <Tabs
        defaultActiveKey="pop"
        id="uncontrolled-tab-example"
        className="mb-4"
      >
        <Tab eventKey="pop" title="Most Popular">
          {displayItems0}
          <ReactPaginate
            perviousLabel={"Pervious"}
            nextLabel={"Next"}
            pageCount={pageCount0}
            onPageChange={changePage0}
            containerClassName={search.paginationBttns}
            previousLinkClassName={search.previousBttn}
            nextLinkClassName={search.nextBttn}
            disabledClassName={search.paginationDisabled}
            activeClassName={search.paginationActive}
          />
        </Tab>
        <Tab eventKey="new" title="Newest">
          <div className={`col-12`}>
            {displayItems}
            <ReactPaginate
              perviousLabel={"Pervious"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={search.paginationBttns}
              previousLinkClassName={search.previousBttn}
              nextLinkClassName={search.nextBttn}
              disabledClassName={search.paginationDisabled}
              activeClassName={search.paginationActive}
            />
          </div>
        </Tab>
        <Tab eventKey="trend" title="Trending">
          <div className={`col-12`}>
            {displayItems2}
            <ReactPaginate
              perviousLabel={"Pervious"}
              nextLabel={"Next"}
              pageCount={pageCount2}
              onPageChange={changePage2}
              containerClassName={search.paginationBttns}
              previousLinkClassName={search.previousBttn}
              nextLinkClassName={search.nextBttn}
              disabledClassName={search.paginationDisabled}
              activeClassName={search.paginationActive}
            />
          </div>
        </Tab>
        <Tab eventKey="rate" title="Highest Rate">
          <div className={`col-12`}>
            {displayItems3}
            <ReactPaginate
              perviousLabel={"Pervious"}
              nextLabel={"Next"}
              pageCount={pageCount3}
              onPageChange={changePage3}
              containerClassName={search.paginationBttns}
              previousLinkClassName={search.previousBttn}
              nextLinkClassName={search.nextBttn}
              disabledClassName={search.paginationDisabled}
              activeClassName={search.paginationActive}
            />
          </div>
        </Tab>
      </Tabs>
    </SSRProvider>
  );
};

export default Search;
