import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import main from "../../../styles/MainCourse.module.css";
import { SSRProvider } from "react-bootstrap";

const PopularTopics = ({data}) => {
  return (
    <SSRProvider>
      <div className={`row g-4`}>
        <div className={`col-lg-3 col-sm-6 g-4 ${main.odd}`}>
          <div className={`col-12 g-4 ${main.itemHolder}`}>
            <div className={`col-3 ${main.topTopc}`}>
              <div className={`col-12 ${main.topTopcHolder}`}>
                <figure className={``}>
                  <Image
                    src={require(`../../../src/assets/maincourse/topicgreen.png`)}
                    alt="logo"
                    width=""
                    height=""
                  />
                  <span className={`${main.boldTopic}`}>{data[0].videoCount}</span>
                  <span className={`${main.normalTopic}`}>Videos</span>
                  <br />
                  <span className={`${main.boldTopic}`}>{data[0].freeCount}</span>
                  <span className={`${main.normalTopic}`}>Free</span>
                  <br />
                  <span className={`${main.boldTopic}`}>{data[0].paiedCount}</span>
                  <span className={`${main.normalTopic}`}>Paid</span>
                </figure>
              </div>
            </div>
            <div className={`col-12 text-center ${main.botTopic}`}>
              {data[0].catName}
            </div>
          </div>
          <div className={`col-12 g-4 ${main.itemHolder}`}>
            <div className={`col-3 ${main.topTopc}`}>
              <div className={`col-12 ${main.topTopcHolder}`}>
                <figure className={``}>
                  <Image
                    src={require(`../../../src/assets/maincourse/topicgreen.png`)}
                    alt="logo"
                    width=""
                    height=""
                  />
                  <span className={`${main.boldTopic}`}>{data[1].videoCount}</span>
                  <span className={`${main.normalTopic}`}>Videos</span>
                  <br />
                  <span className={`${main.boldTopic}`}>{data[1].freeCount}</span>
                  <span className={`${main.normalTopic}`}>Free</span>
                  <br />
                  <span className={`${main.boldTopic}`}>{data[1].paiedCount}</span>
                  <span className={`${main.normalTopic}`}>Paid</span>
                </figure>
              </div>
            </div>
            <div className={`col-12 text-center ${main.botTopic}`}>
            {data[1].catName}
            </div>
          </div>
        </div>
        <div className={`col-lg-3 col-sm-6 g-4`}>
          <div className={`col-12 g-4 ${main.itemHolderPurple}`}>
            <div className={`col-3 ${main.topTopc}`}>
              <div className={`col-12 ${main.topTopcHolder}`}>
                <figure className={``}>
                  <Image
                    src={require(`../../../src/assets/maincourse/topicpurple.png`)}
                    alt="logo"
                    width=""
                    height=""
                  />
                  <span className={`${main.boldTopic}`}>{data[2].videoCount}</span>
                  <span className={`${main.normalTopic}`}>Videos</span>
                  <br />
                  <span className={`${main.boldTopic}`}>{data[2].freeCount}</span>
                  <span className={`${main.normalTopic}`}>Free</span>
                  <br />
                  <span className={`${main.boldTopic}`}>{data[2].paiedCount}</span>
                  <span className={`${main.normalTopic}`}>Paid</span>
                </figure>
              </div>
            </div>
            <div className={`col-12 text-center ${main.botTopicPurple}`}>
            {data[2].catName}
            </div>
          </div>
          <div className={`col-12 g-4 ${main.itemHolderPurple}`}>
            <div className={`col-3 ${main.topTopc}`}>
              <div className={`col-12 ${main.topTopcHolder}`}>
                <figure className={``}>
                  <Image
                    src={require(`../../../src/assets/maincourse/topicpurple.png`)}
                    alt="logo"
                    width=""
                    height=""
                  />
                  <span className={`${main.boldTopic}`}>{data[3].videoCount}</span>
                  <span className={`${main.normalTopic}`}>Videos</span>
                  <br />
                  <span className={`${main.boldTopic}`}>{data[3].freeCount}</span>
                  <span className={`${main.normalTopic}`}>Free</span>
                  <br />
                  <span className={`${main.boldTopic}`}>{data[3].paiedCount}</span>
                  <span className={`${main.normalTopic}`}>Paid</span>
                </figure>
              </div>
            </div>
            <div className={`col-12 text-center ${main.botTopicPurple}`}>
            {data[3].catName}
            </div>
          </div>
        </div>
        <div className={`col-lg-3 col-sm-6 g-4 ${main.odd}`}>
          <div className={`col-12 g-4 ${main.itemHolderBlue}`}>
            <div className={`col-3 ${main.topTopc}`}>
              <div className={`col-12 ${main.topTopcHolder}`}>
                <figure className={``}>
                  <Image
                    src={require(`../../../src/assets/maincourse/topicblue.png`)}
                    alt="logo"
                    width=""
                    height=""
                  />
                  <span className={`${main.boldTopic}`}>{data[4].videoCount}</span>
                  <span className={`${main.normalTopic}`}>Videos</span>
                  <br />
                  <span className={`${main.boldTopic}`}>{data[4].freeCount}</span>
                  <span className={`${main.normalTopic}`}>Free</span>
                  <br />
                  <span className={`${main.boldTopic}`}>{data[4].paiedCount}</span>
                  <span className={`${main.normalTopic}`}>Paid</span>
                </figure>
              </div>
            </div>
            <div className={`col-12 text-center ${main.botTopicBlue}`}>
            {data[4].catName}
            </div>
          </div>
          <div className={`col-12 g-4 ${main.itemHolderBlue}`}>
            <div className={`col-3 ${main.topTopc}`}>
              <div className={`col-12 ${main.topTopcHolder}`}>
                <figure className={``}>
                  <Image
                    src={require(`../../../src/assets/maincourse/topicblue.png`)}
                    alt="logo"
                    width=""
                    height=""
                  />
                  <span className={`${main.boldTopic}`}>{data[5].videoCount}</span>
                  <span className={`${main.normalTopic}`}>Videos</span>
                  <br />
                  <span className={`${main.boldTopic}`}>{data[5].freeCount}</span>
                  <span className={`${main.normalTopic}`}>Free</span>
                  <br />
                  <span className={`${main.boldTopic}`}>{data[5].paiedCount}</span>
                  <span className={`${main.normalTopic}`}>Paid</span>
                </figure>
              </div>
            </div>
            <div className={`col-12 text-center ${main.botTopicBlue}`}>
            {data[5].catName}
            </div>
          </div>
        </div>
        <div className={`col-lg-3 col-sm-6 g-4`}>
          <div className={`col-12 g-4 ${main.itemHolderBrown}`}>
            <div className={`col-3 ${main.topTopc}`}>
              <div className={`col-12 ${main.topTopcHolder}`}>
                <figure className={``}>
                  <Image
                    src={require(`../../../src/assets/maincourse/topicbrown.png`)}
                    alt="logo"
                    width=""
                    height=""
                  />
                  <span className={`${main.boldTopic}`}>{data[6].videoCount}</span>
                  <span className={`${main.normalTopic}`}>Videos</span>
                  <br />
                  <span className={`${main.boldTopic}`}>{data[6].freeCount}</span>
                  <span className={`${main.normalTopic}`}>Free</span>
                  <br />
                  <span className={`${main.boldTopic}`}>{data[6].paiedCount}</span>
                  <span className={`${main.normalTopic}`}>Paid</span>
                </figure>
              </div>
            </div>
            <div className={`col-12 text-center ${main.botTopicBrown}`}>
            {data[6].catName}
            </div>
          </div>
          <div className={`col-12 g-4 ${main.itemHolderBrown}`}>
            <div className={`col-3 ${main.topTopc}`}>
              <div className={`col-12 ${main.topTopcHolder}`}>
                <figure className={``}>
                  <Image
                    src={require(`../../../src/assets/maincourse/topicbrown.png`)}
                    alt="logo"
                    width=""
                    height=""
                  />
                  <span className={`${main.boldTopic}`}>{data[7].videoCount}</span>
                  <span className={`${main.normalTopic}`}>Videos</span>
                  <br />
                  <span className={`${main.boldTopic}`}>{data[7].freeCount}</span>
                  <span className={`${main.normalTopic}`}>Free</span>
                  <br />
                  <span className={`${main.boldTopic}`}>{data[7].paiedCount}</span>
                  <span className={`${main.normalTopic}`}>Paid</span>
                </figure>
              </div>
            </div>
            <div className={`col-12 text-center ${main.botTopicBrown}`}>
            {data[7].catName}
            </div>
          </div>
        </div>
      </div>
    </SSRProvider>
  );
};
export default PopularTopics;
