import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import com from "../../../styles/Comment.module.css";
import { Button } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { SSRProvider } from "react-bootstrap";
import { AiOutlineLike, AiOutlineDislike,AiOutlineCloseCircle } from "react-icons/ai";
import { TbArrowForwardUp } from "react-icons/tb";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import co from "../../../styles/panel/course.module.css";
import { comment,AddDissLike } from "../../../pages/api/comment";
import Moment from "react-moment";
import axios from "axios";
const ContactSchema = Yup.object().shape({
  textarea: Yup.string().min(4, "Too Short!").required("Required"),
});

const Comment = ({teacherId,commentData,totalPage,page,totalCount,pageTitle,datafunc}) => {
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
  const router = useRouter();
 const courseId =router.query.id;

const [replyState ,setReplyState] = useState(0);
const [replyState2 ,setReplyState2] = useState();
const funcReply = (id,userName)=>{
  setReplyState(id)
  setReplyState2(userName)
}
const funcReplyNull = ()=>{
  setReplyState(null)
  setReplyState2(null)
}
const [mydata,setMydata] = useState(commentData)


// console.log(replyState)

const [replynum, setReplynum] = useState(3)
const moreReplyFunc=()=>{
  setReplynum(replynum+3)
}
console.log(replynum)
const [replylength , setReplylength] = useState()
console.log(replylength)
  return (
    <SSRProvider>
      <section className={`container mx-auto`}>
        <div className={`col-sm-12 ${com.comment}`}>Comment</div>
        <div className={`row ${com.com}`}>
          <div className={`col-xl-8 ${com.commentShow}`}>
            <div className={`col-md-12 mb-5 ${com.commentNum}`}>
              Total {totalCount} Comments
            </div>
            
{mydata.map((i)=>{
  return(
    <div className={i.replies.length === 0 ?`row ${com.com}`: `row ${com.com} ${com.comleft}`} key={i.commentId}>
  <div className={`col-6`}>
    <figure className={`${com.commentPic}`}>
      <Image
        src={i.userDetail.picName}
        alt="logo"
        width="60"
        height="60"
      />
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
  <div className={`col-3 ${com.date}`}><Moment fromNow>{i.postDate}</Moment></div>
  <div className={`col-12`}>
    <div className={i.spend === 0 ? `col-1 ${com.percent0}`:i.spend === 25 ? `col-1 ${com.percent25}`: i.spend === 50 ? `col-1 ${com.percent50}` : i.spend === 75 ? `col-1 ${com.percent75}` : i.spend === 100 && `col-1 ${com.percent100}`}>{i.spend}</div>
    <span className={`${com.course}`}>Course: {pageTitle}</span>

    <span className={`${com.commentTXT}`}>
      {i.commentMessage}
    </span>
    {i.replies.slice(0, replynum).map((j,index)=>{
    return(
    <div className={`col-9 ${com.answer}`} key={index} onLoad={()=>setReplylength(i.replies.length)}>
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
      </div>
      <div className={`col-sm-3`}>
        <Rating
          onClick={handleRating}
          allowFraction={true}
          initialValue={j.rate}
          className={com.rating}
        />
      </div>
      <div className={`col-sm-3 ${com.date}`}><Moment fromNow>{j.postDate}</Moment></div></div>
      <span className={`${com.commentTXT}`}>
        {j.commentMessage}
      </span>
    </div>
    )
  })}
  {replynum < i.replies.length ? <button className={com.moreBtn} onClick={moreReplyFunc}>Show more</button>: null}
    <div className={`row ${com.commentItem}`}>
      <div className={`col-4 ${com.like}`}>
        <AiOutlineLike /> Like({i.likeCount})
      </div>
      <div className={`col-4 ${com.dislike}`} onClick={()=>AddDissLike(i.commentId)}>
        <AiOutlineDislike /> DisLike({i.dissLikeCount})
      </div>
      <div className={`col-4 ${com.reply}`} >
       <a href="#commentPart" onClick={()=>funcReply(i.commentId,i.userDetail.fullName)}><TbArrowForwardUp /> Reply</a> 
      </div>
    </div>
  </div>
</div>
  )
})}

          </div>
          <div className={`col-xl-4 ${com.commentPost}`} id="commentPart">
            <h6 className={`${com.comTitle}`}>Add Comments</h6>
            {replyState2 && <><h6 className={`${com.comTitle}`}>Reply to : {replyState2}</h6>
            <div className={`${com.closeBTN}`} onClick={funcReplyNull}><AiOutlineCloseCircle/></div></>}

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
                  courseId : courseId,
                  teacherId:teacherId
                };
                {replyState !== 0 && (userObj.commentId = replyState) } 
                const resReply = await comment(userObj);
                setIsSubmitting(false);
                // console.log(await datafunc(1))
                {resReply.isSucces && setMydata(await datafunc(1)) }
              }}
            >
              {({ errors, touched }) => (
                <Form className={co.form}>
                  <Field as="select" name="spend" placeholder="Course Spended" className={`text-center p-1 ${com.dropdown} ${com.massege}`} defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled  hidden>
                      Course Spended
                    </option>
                    <option value="0">0%</option>
                    <option value="25">25%</option>
                    <option value="50">20%</option>
                    <option value="75">75%</option>
                    <option value="100">100%</option>
                  </Field>
                  <Field name="textarea" as="textarea" className={`${com.txtArea} ${com.massege}`} placeholder="Message" rows={6}>
                  </Field>
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
