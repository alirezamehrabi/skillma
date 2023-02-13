import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import com from "../../../styles/Comment.module.css";
import { Button } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { SSRProvider } from "react-bootstrap";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { TbArrowForwardUp } from "react-icons/tb";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import co from "../../../styles/panel/course.module.css";
import { comment,AddDissLike,DecreaseDissLike,AddLike,DecreaseLike } from "../../../pages/api/comment";
import Moment from "react-moment";
import axios from "axios";
import pag from "../../../styles/paginate.module.css";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getLike, getLikeFallBack, getLikeFallBackOnline } from "../../../pages/api/redux/likereducer";
import { useRouter } from "next/router";
import Loader from "../Loader/Loader";
const ContactSchema = Yup.object().shape({
  textarea: Yup.string().min(4, "Too Short!").required("Required"),
});

const Comment = ({
  teacherId,
  commentData,
  totalPage,
  page,
  totalCount,
  pageTitle,
  datafunc,
  shortContentId,
  onlineCourseId,
  courseId,
  pageName
}) => {
  const disPatch = useDispatch()
  console.log(courseId,"cid")

const [mydata, setMydata] = useState(commentData);
let comId;
const [ dt1 , setDt1] = useState()
// const mydt = ()=> disPatch(getLikeFallBack(courseId)).then((r)=> setDt1(r.payload))
useEffect(()=>{
  // mydt()
},[]);
const id=courseId;
let p;
console.log(commentData,"commentData")
const dp = (a)=>{
  console.log(pageNum,"a")
  p=pageNum+1;
  disPatch(getLike(a.comId)).then((r)=> disPatch(getLikeFallBack({id,p})))
  disPatch(getLike(a.comId)).then((r)=> disPatch(getLikeFallBackOnline({id,p})))
}
  const [rating, setRating] = useState();
  const handleRating = (number) => {
    if (number !== undefined) {
      setRating(number);
    }
  };
  useEffect(() => {
    handleRating();
  }, [rating]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [replyState, setReplyState] = useState(0);
  const [replyState2, setReplyState2] = useState();
  const funcReply = (id, userName) => {
    setReplyState(id);
    setReplyState2(userName);
  };
  const funcReplyNull = () => {
    setReplyState(null);
    setReplyState2(null);
  };

  const [replynum, setReplynum] = useState(3);
  const moreReplyFunc = () => {
    setReplynum(replynum + 3);
  };
  const [replylength, setReplylength] = useState();

  const [pageNum, setPageNum] = useState(0);
  const dispatch = useDispatch()
  const changePage = async ({ selected }) => {
    setPageNum(selected);

    setMydata(await datafunc(selected+1));
    p=selected+1;
    
    dispatch(getLikeFallBack({id,p}))
    dispatch(getLikeFallBackOnline({id,p}))
  };
const [tcomment , setTcomment] = useState(totalCount)
console.log(mydata)
const pageCount = totalPage;
  const datadisplay = commentData.map((i) => {
    return (
      <div
        className={
          i.replies.length === 0
            ? `row ${com.com}`
            : `row ${com.com} ${com.comleft}`
        }
        key={i.commentId}
      >
        <div className={`col-6`}>
          <figure className={`${com.commentPic}`}>
            <Image
              src={i.userDetail.picName}
              alt="logo"
              width="60"
              height="60"
            />
            {i.isTeacher === true ? <span className={`${com.isTeacher}`}>T</span>: null}
          </figure>
          <span className={`${com.comName}`}>{i.userDetail.fullName}</span>
        </div>
        <div className={`col-3`}>
          <Rating
            onClick={handleRating}
            allowFraction={true}
            initialValue={i.rate}
            className={com.rating}
          />
        </div>
        <div className={`col-3 ${com.date}`}>
          <Moment fromNow>{i.postDate}</Moment>
        </div>
        <div className={`col-12`}>
          <div
            className={
              i.spend === 0
                ? `col-1 ${com.percent0}`
                : i.spend === 25
                ? `col-1 ${com.percent25}`
                : i.spend === 50
                ? `col-1 ${com.percent50}`
                : i.spend === 75
                ? `col-1 ${com.percent75}`
                : i.spend === 100 && `col-1 ${com.percent100}`
            }
          >
            {i.spend}
          </div>
          <span className={`${com.course}`}>Course: {pageTitle}</span>
          <span className={`${com.commentTXT}`}>{i.commentMessage}</span>
          {i.replies.slice(0, replynum).map((j, index) => {
            return (
              <div
                className={`col-9 ${com.answer}`}
                key={index}
                onLoad={() => setReplylength(i.replies.length)}
              >
                <div className={`row ${com.com}`}>
                  <div className={`col-sm-6`}>
                    <figure className={`${com.commentPic}`}>
                      <Image
                        src={j.userPic}
                        alt="user"
                        width="50"
                        height="50"
                      />
                    </figure>
                    <span className={`${com.comName}`}>{j.userName}</span>
            {i.isTeacher === true ? <span className={`${com.isTeacher} ${com.isTeacher2}`}>T</span>: null}
                  </div>
                  <div className={`col-sm-3`}>
                    <Rating
                      onClick={handleRating}
                      allowFraction={true}
                      initialValue={j.rate}
                      className={com.rating}
                    />
                  </div>
                  <div className={`col-sm-3 ${com.date}`}>
                    <Moment fromNow>{j.postDate}</Moment>
                  </div>
                </div>
                <span className={`${com.commentTXT}`}>{j.commentMessage}</span>
              </div>
            );
          })}
          {replynum < i.replies.length ? (
            <button className={com.moreBtn} onClick={moreReplyFunc}>
              Show more
            </button>
          ) : null}
          <div className={`row ${com.commentItem}`}>
            <div className={`col-4 ${com.like}`} onClick={() => {AddLike({comId,courseId})}}>
              <AiOutlineLike /> Like({i.likeCount})
            </div>
            <div
              className={`col-4 ${com.dislike}`}
              onClick={()=>{comId=i.commentId;dp({courseId,comId})}} 
            >
              <AiOutlineDislike /> DisLike({i.dissLikeCount})
            </div>
            <div className={`col-4 ${com.reply}`}>
              <a
                href="#commentPart"
                onClick={() => funcReply(i.commentId, i.userDetail.fullName)}
              >
                <TbArrowForwardUp /> Reply
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <SSRProvider>
      <section className={`container mx-auto`}>
        <div className={`col-sm-12 ${com.comment}`}>Comment</div>
        <div className={`row ${com.com}`}>
          <div className={`col-xl-8 ${com.commentShow}`}>
            <div className={`col-md-12 mb-5 ${com.commentNum}`}>
              Total {tcomment} Comments
            </div>

            {datadisplay}
            {tcomment > 0 ? (
              <ReactPaginate
                perviousLabel={"Pervious"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={pag.paginationBttns}
                previousLinkClassName={pag.previousBttn}
                nextLinkClassName={pag.nextBttn}
                disabledClassName={pag.paginationDisabled}
                activeClassName={pag.paginationActive}
              />
            ) : (
              ""
            )}
          </div>
          <div className={`col-xl-4 ${com.commentPost}`} id="commentPart">
            <h6 className={`${com.comTitle}`}>Add Comments</h6>
            {replyState2 && (
              <>
                <h6 className={`${com.comTitle}`}>Reply to : {replyState2}</h6>
                <div className={`${com.closeBTN}`} onClick={funcReplyNull}>
                  <AiOutlineCloseCircle />
                </div>
              </>
            )}
            <Formik
              initialValues={{
                drop: "",
                textarea: "",
              }}
              validationSchema={ContactSchema}
              onSubmit={async (values) => {
                setIsSubmitting(true);

                const userObj = {
                  rate: rating,
                  commentMessage: values.textarea,
                  spend: values.spend,
                  teacherId: teacherId,
                  courseId:pageName === 1 ? courseId:null,
                  onlineCourseId:pageName === 2 ? courseId:null,
                  shortContentId:pageName === 3 ? shortContentId:null,
                  // teacherId:pageName === 4 ? teacherId:null,
                };
                {
                  replyState !== 0 && (userObj.commentId = replyState);
                }
                const resReply = await comment(userObj);
                setIsSubmitting(false);
                let tc = tcomment+1
                {
                  resReply.isSucces && setMydata(await datafunc(1)), setTcomment(tc) ;
                }
              }}
            >
              {({ errors, touched }) => (
                <Form className={co.form}>
                  <Field
                    as="select"
                    name="spend"
                    placeholder="Course Spended"
                    className={`text-center p-1 ${com.dropdown} ${com.massege}`}
                    defaultValue={"DEFAULT"}
                  >
                    <option value="DEFAULT" disabled hidden>
                      Course Spended
                    </option>
                    <option value="0">0%</option>
                    <option value="25">25%</option>
                    <option value="50">50%</option>
                    <option value="75">75%</option>
                    <option value="100">100%</option>
                  </Field>
                  <Field
                    name="textarea"
                    as="textarea"
                    className={`${com.txtArea} ${com.massege}`}
                    placeholder="Message"
                    rows={6}
                  ></Field>
                  <div className="my-4" />
                  <div className={`row`}>
                    <div className={`col-7`}>Rate:</div>
                    <div className={`col-5`}>
                      <Rating
                        onClick={handleRating}
                        allowFraction={true}
                        initialValue={4.5}
                        className={com.ratingg}
                      />
                    </div>
                    <Button
                      variant="warning"
                      type="submit"
                      className={`${com.addBTN}`}
                    >
                      {isSubmitting ? (
                        <div className={co.loadspn} />
                      ) : (
                        <>Add Comment</>
                      )}
                    </Button>
                    <ToastContainer />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </SSRProvider>
  );
};

export default Comment;
