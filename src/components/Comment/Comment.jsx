import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import com from "../../../styles/Comment.module.css";
import { Button, Dropdown } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { SSRProvider } from "react-bootstrap";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { TbArrowForwardUp } from "react-icons/tb";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import co from "../../../styles/panel/course.module.css";
import { comment } from "../../../pages/api/comment";
const ContactSchema = Yup.object().shape({
  textarea: Yup.string().min(4, "Too Short!").required("Required"),
});

const Comment = () => {
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
 const courseId =router.query.id
  
  return (
    <SSRProvider>
      <section className={`container mx-auto`}>
        <div className={`col-sm-12 ${com.comment}`}>Comment</div>
        <div className={`row ${com.com}`}>
          <div className={`col-xl-8 ${com.commentShow}`}>
            <div className={`col-md-12 mb-5 ${com.commentNum}`}>
              Total 18 Comments
            </div>
            <div className={`row ${com.com}`}>
              <div className={`col-6`}>
                <figure className={`${com.commentPic}`}>
                  <Image
                    src={require(`../../../src/assets/maincourse/per1.png`)}
                    alt=""
                    width=""
                    height=""
                  />
                </figure>
                <span className={`${com.comName}`}>Lorem Ipsum</span>
              </div>
              <div className={`col-3`}>
                <Rating
                  onClick={handleRating}
                  allowFraction={true}
                  initialValue={4.5}
                  className={com.rating}
                />
              </div>
              <div className={`col-3 ${com.date}`}>21 june 2022</div>
              <div className={`col-12`}>
                <div className={`col-1 ${com.percent}`}>80%</div>
                <span className={`${com.course}`}>Course: UI/UX Design</span>

                <span className={`${com.commentTXT}`}>
                  Lorem ipsum, or lipsum as it is sometimes known, is text used
                  in laying out print, graphic or web designs. passage is
                  attributed to an unknown typesetter in the 15th century who is
                  thought to have scrambled parts Ciceros De Finibus Bonorum et
                  Malorum for use in a specimen book. It usually begins with.
                </span>
                <div className={`row ${com.commentItem}`}>
                  <div className={`col-4 ${com.like}`}>
                    <AiOutlineLike /> Like(15)
                  </div>
                  <div className={`col-4 ${com.dislike}`}>
                    <AiOutlineDislike /> DisLike(15)
                  </div>
                  <div className={`col-4 ${com.reply}`}>
                    <TbArrowForwardUp /> Reply
                  </div>
                </div>
              </div>
            </div>
            <div className={`row ${com.com}`}>
              <div className={`col-6`}>
                <figure className={`${com.commentPic}`}>
                  <Image
                    src={require(`../../../src/assets/maincourse/per2.png`)}
                    alt=""
                    width=""
                    height=""
                  />
                </figure>
                <span className={`${com.comName}`}>Lorem Ipsum</span>
              </div>
              <div className={`col-3`}>
                <Rating
                  onClick={handleRating}
                  allowFraction={true}
                  initialValue={4.5}
                  className={com.rating}
                />
              </div>
              <div className={`col-3 ${com.date}`}>21 june 2022</div>
              <div className={`col-12`}>
                <div className={`col-1 ${com.percent}`}>80%</div>
                <span className={`${com.course}`}>Course: UI/UX Design</span>

                <span className={`${com.commentTXT}`}>
                  Lorem ipsum, or lipsum as it is sometimes known, is text used
                  in laying out print, graphic or web designs. passage is
                  attributed to an unknown typesetter in the 15th century who is
                  thought to have scrambled parts Ciceros De Finibus Bonorum et
                  Malorum for use in a specimen book. It usually begins with.
                </span>
                <div className={`col-9 ${com.answer}`}>
                  <div className={`row ${com.com}`}>
                    <div className={`col-sm-6`}>
                      <figure className={`${com.commentPic}`}>
                        <Image
                          src={require(`../../../src/assets/maincourse/per1.png`)}
                          alt=""
                          width=""
                          height=""
                        />
                      </figure>
                      <span className={`${com.comName}`}>Lorem Ipsum</span>
                    </div>
                    <div className={`col-sm-3`}>
                      <Rating
                        onClick={handleRating}
                        allowFraction={true}
                        initialValue={4.5}
                        className={com.rating}
                      />
                    </div>
                    <div className={`col-sm-3 ${com.date}`}>21 june 2022</div>
                    <span className={`${com.commentTXT}`}>
                      Lorem ipsum, or lipsum as it is sometimes known, is text
                      used in laying out print, graphic or web designs. passage
                      is attributed to an unknown typesetter in the 15th century
                      who is thought to have scrambled parts Ciceros De Finibus
                      Bonorum et Malorum for use in a specimen book. It usually
                      begins with.
                    </span>
                  </div>
                </div>
                <div className={`row ${com.commentItem}`}>
                  <div className={`col-4 ${com.like}`}>
                    <AiOutlineLike /> Like(15)
                  </div>
                  <div className={`col-4 ${com.dislike}`}>
                    <AiOutlineDislike /> DisLike(15)
                  </div>
                  <div className={`col-4 ${com.reply}`}>
                    <TbArrowForwardUp /> Reply
                  </div>
                </div>
              </div>
            </div>
            <div className={`row ${com.com}`}>
              <div className={`col-6`}>
                <figure className={`${com.commentPic}`}>
                  <Image
                    src={require(`../../../src/assets/maincourse/per3.png`)}
                    alt=""
                    width=""
                    height=""
                  />
                </figure>
                <span className={`${com.comName}`}>Lorem Ipsum</span>
              </div>
              <div className={`col-3`}>
                <Rating
                  onClick={handleRating}
                  allowFraction={true}
                  initialValue={4.5}
                  className={com.rating}
                />
              </div>
              <div className={`col-3 ${com.date}`}>21 june 2022</div>
              <div className={`col-12`}>
                <div className={`col-1 ${com.percent}`}>80%</div>
                <span className={`${com.course}`}>Course: UI/UX Design</span>

                <span className={`${com.commentTXT}`}>
                  Lorem ipsum, or lipsum as it is sometimes known, is text used
                  in laying out print, graphic or web designs. passage is
                  attributed to an unknown typesetter in the 15th century who is
                  thought to have scrambled parts Ciceros De Finibus Bonorum et
                  Malorum for use in a specimen book. It usually begins with.
                </span>
                <div className={`row ${com.commentItem}`}>
                  <div className={`col-4 ${com.like}`}>
                    <AiOutlineLike /> Like(15)
                  </div>
                  <div className={`col-4 ${com.dislike}`}>
                    <AiOutlineDislike /> DisLike(15)
                  </div>
                  <div className={`col-4 ${com.reply}`}>
                    <TbArrowForwardUp /> Reply
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-xl-4 ${com.commentPost}`}>
            <h6 className={`${com.comTitle}`}>Add Comments</h6>

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
                };
                const user = await comment(userObj);
                setUser(user);
                
                setIsSubmitting(false);
              }}
            >
              {({ errors, touched }) => (
                <Form className={co.form}>
                  <Field as="select" name="spend" placeholder="Course Spended" className={`text-center p-1 ${com.dropdown} ${com.massege}`}>
                    <option value="" disabled defaultValue hidden selected>
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
