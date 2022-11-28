import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import com from "../../../styles/Comment.module.css";
import {Dropdown,Form,Button}  from 'react-bootstrap';
import { Rating } from "react-simple-star-rating";
import { SSRProvider } from "react-bootstrap";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { TbArrowForwardUp } from "react-icons/tb";
const Comment = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (number) => {
    setRating(number);
  };
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
                  Lorem ipsum, or lipsum as it is sometimes known, is text used
                  in laying out print, graphic or web designs. passage is
                  attributed to an unknown typesetter in the 15th century who is
                  thought to have scrambled parts Ciceros De Finibus Bonorum et
                  Malorum for use in a specimen book. It usually begins with.
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
            <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic" className={`${com.drop}`}>
        Course Spended
      </Dropdown.Toggle>

      <Dropdown.Menu className={`${com.dropdown}`}>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" className={`${com.txtArea}`} placeholder="Message" rows={6} />
      </Form.Group>
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
        <Button variant="warning" className={`${com.addBTN}`}>Add Comment</Button>
      </div>
          </div>
        </div>
      </section>
    </SSRProvider>
  );
};

export default Comment;
