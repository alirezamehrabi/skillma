import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react"
import ReactPaginate from "react-paginate"
import styles from "../../../styles/Home.module.css";
import detail from "../../../styles/DetailCourse.module.css";
import main from "../../../styles/MainCourse.module.css";
import search from "../../../styles/Search.module.css";
import ShortVideoSlider from "./../../../src/components/ShortVideoSlider/ShortVideoSlider";
import TopCoursesSlider from "./../../../src/components/TopCoursesSlider/TopCoursesSlider";
import { Tab, Tabs,SSRProvider  } from "react-bootstrap";
import {RiShareForwardLine} from "react-icons/ri"
const Search = () => {
  const[txt,setTxt] = useState([
    {id:"1",img:"txtimg.png",year:"2 years ago", title:"Lorem Ipsum is simply dummy text",body:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et have scrambled parts of Ciceros …",forward:"3",comment:"120",star:"4"},
    {id:"2",img:"txtimg.png",year:"2 years ago", title:"Lorem Ipsum is simply dummy text",body:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et have scrambled parts of Ciceros …",forward:"3",comment:"120",star:"4"},
    {id:"3",img:"txtimg.png",year:"2 years ago", title:"Lorem Ipsum is simply dummy text",body:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et have scrambled parts of Ciceros …",forward:"3",comment:"120",star:"4"},
    {id:"4",img:"txtimg.png",year:"2 years ago", title:"Lorem Ipsum is simply dummy text",body:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et have scrambled parts of Ciceros …",forward:"3",comment:"120",star:"4"},
    {id:"5",img:"txtimg.png",year:"2 years ago", title:"Lorem Ipsum is simply dummy text",body:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et have scrambled parts of Ciceros …",forward:"3",comment:"120",star:"4"},
    {id:"6",img:"txtimg.png",year:"2 years ago", title:"Lorem Ipsum is simply dummy text",body:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et have scrambled parts of Ciceros …",forward:"3",comment:"120",star:"4"},
    {id:"7",img:"txtimg.png",year:"2 years ago", title:"Lorem Ipsum is simply dummy text",body:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et have scrambled parts of Ciceros …",forward:"3",comment:"120",star:"4"},
    {id:"8",img:"txtimg.png",year:"2 years ago", title:"Lorem Ipsum is simply dummy text",body:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et have scrambled parts of Ciceros …",forward:"3",comment:"120",star:"4"},
    {id:"9",img:"txtimg.png",year:"2 years ago", title:"Lorem Ipsum is simply dummy text",body:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et have scrambled parts of Ciceros …",forward:"3",comment:"120",star:"4"},
    {id:"10",img:"txtimg.png",year:"2 years ago", title:"Lorem Ipsum is simply dummy text",body:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et have scrambled parts of Ciceros …",forward:"3",comment:"120",star:"4"},
    {id:"11",img:"txtimg.png",year:"2 years ago", title:"Lorem Ipsum is simply dummy text",body:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et have scrambled parts of Ciceros …",forward:"3",comment:"120",star:"4"},
    {id:"12",img:"txtimg.png",year:"2 years ago", title:"Lorem Ipsum is simply dummy text",body:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et have scrambled parts of Ciceros …",forward:"3",comment:"120",star:"4"},
    {id:"13",img:"txtimg.png",year:"2 years ago", title:"Lorem Ipsum is simply dummy text",body:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et have scrambled parts of Ciceros …",forward:"3",comment:"120",star:"4"},
    {id:"14",img:"txtimg.png",year:"2 years ago", title:"Lorem Ipsum is simply dummy text",body:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et have scrambled parts of Ciceros …",forward:"3",comment:"120",star:"4"},
    {id:"15",img:"txtimg.png",year:"2 years ago", title:"Lorem Ipsum is simply dummy text",body:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et have scrambled parts of Ciceros …",forward:"3",comment:"120",star:"4"},
    {id:"16",img:"txtimg.png",year:"2 years ago", title:"Lorem Ipsum is simply dummy text",body:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et have scrambled parts of Ciceros …",forward:"3",comment:"120",star:"4"},
    {id:"17",img:"txtimg.png",year:"2 years ago", title:"Lorem Ipsum is simply dummy text",body:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et have scrambled parts of Ciceros …",forward:"3",comment:"120",star:"4"}
  ])
  const[pageNum, setPageNum]=useState(0)
  const itemPerPage = 4;
const pageVisited= itemPerPage * pageNum
const pageCount = Math.ceil(txt.length / itemPerPage);
const changePage = ({ selected }) => {
  setPageNum(selected);
};
const displayItems = txt.slice(pageVisited, pageVisited + itemPerPage).map((i) =>{
  return(
    <div className={`col-12`} key={i.id}>
                <div className={`row ${search.textHolder}`} >
                    <div className={`col-2`}>
                        <figure className={`${search.textimg}`}>
                            <Image src={require(`../../../src/assets/home/${i.img}`)} alt="text image" height="" width=""/>
                        </figure>
                    </div>
                    <div className={`col-10`}>
                    <div className={`col-12 p-5`}>
                        <h6 className={`d-block ${search.searchTitle}`}>{i.title}</h6>
                        <h6 className={`d-block ${search.searchDate}`}>{i.year}</h6>
                    </div>
                    <div className={`col-12 ${search.searchTXT}`}>
                        <h6>{i.body}<Link href={`txt/${i.id}`}>See More</Link></h6>
                    </div>
                    <div className={`col-3 ${search.iconFloat}`}>
                  <div className={`row ${detail.bot}`}>
                    <div className={`col-4`}>
                      <RiShareForwardLine style={{ color: "blue" }} />{i.forward}
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
                      {i.comment}
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
                      {i.star}/5
                    </div>
                  </div>
                </div>
                    </div>
                </div>
              </div>
  )
})
  return (
    <SSRProvider>
        <Tabs
            defaultActiveKey="pop"
            id="uncontrolled-tab-example"
            className="mb-4"
          >
            <Tab eventKey="pop" title="Most Popular">
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
            <Tab eventKey="rate" title="Highest Rate">
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
          </Tabs>
    </SSRProvider>
  );
};

export default Search;
