import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import main from "../../../styles/MainCourse.module.css";
import { SSRProvider } from "react-bootstrap";

const PopularTopics = () => {
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
                  <span className={`${main.boldTopic}`}>245</span>
                  <span className={`${main.normalTopic}`}>Videos</span>
                  <br />
                  <span className={`${main.boldTopic}`}>95</span>
                  <span className={`${main.normalTopic}`}>Free</span>
                  <br />
                  <span className={`${main.boldTopic}`}>150</span>
                  <span className={`${main.normalTopic}`}>Paid</span>
                </figure>
              </div>
            </div>
            <div className={`col-12 text-center ${main.botTopic}`}>
              UI Design
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
                  <span className={`${main.boldTopic}`}>245</span>
                  <span className={`${main.normalTopic}`}>Videos</span>
                  <br />
                  <span className={`${main.boldTopic}`}>95</span>
                  <span className={`${main.normalTopic}`}>Free</span>
                  <br />
                  <span className={`${main.boldTopic}`}>150</span>
                  <span className={`${main.normalTopic}`}>Paid</span>
                </figure>
              </div>
            </div>
            <div className={`col-12 text-center ${main.botTopic}`}>
              UI Design
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
                  <span className={`${main.boldTopic}`}>245</span>
                  <span className={`${main.normalTopic}`}>Videos</span>
                  <br />
                  <span className={`${main.boldTopic}`}>95</span>
                  <span className={`${main.normalTopic}`}>Free</span>
                  <br />
                  <span className={`${main.boldTopic}`}>150</span>
                  <span className={`${main.normalTopic}`}>Paid</span>
                </figure>
              </div>
            </div>
            <div className={`col-12 text-center ${main.botTopicPurple}`}>
              UI Design
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
                  <span className={`${main.boldTopic}`}>245</span>
                  <span className={`${main.normalTopic}`}>Videos</span>
                  <br />
                  <span className={`${main.boldTopic}`}>95</span>
                  <span className={`${main.normalTopic}`}>Free</span>
                  <br />
                  <span className={`${main.boldTopic}`}>150</span>
                  <span className={`${main.normalTopic}`}>Paid</span>
                </figure>
              </div>
            </div>
            <div className={`col-12 text-center ${main.botTopicPurple}`}>
              UI Design
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
                  <span className={`${main.boldTopic}`}>245</span>
                  <span className={`${main.normalTopic}`}>Videos</span>
                  <br />
                  <span className={`${main.boldTopic}`}>95</span>
                  <span className={`${main.normalTopic}`}>Free</span>
                  <br />
                  <span className={`${main.boldTopic}`}>150</span>
                  <span className={`${main.normalTopic}`}>Paid</span>
                </figure>
              </div>
            </div>
            <div className={`col-12 text-center ${main.botTopicBlue}`}>
              UI Design
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
                  <span className={`${main.boldTopic}`}>245</span>
                  <span className={`${main.normalTopic}`}>Videos</span>
                  <br />
                  <span className={`${main.boldTopic}`}>95</span>
                  <span className={`${main.normalTopic}`}>Free</span>
                  <br />
                  <span className={`${main.boldTopic}`}>150</span>
                  <span className={`${main.normalTopic}`}>Paid</span>
                </figure>
              </div>
            </div>
            <div className={`col-12 text-center ${main.botTopicBlue}`}>
              UI Design
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
                  <span className={`${main.boldTopic}`}>245</span>
                  <span className={`${main.normalTopic}`}>Videos</span>
                  <br />
                  <span className={`${main.boldTopic}`}>95</span>
                  <span className={`${main.normalTopic}`}>Free</span>
                  <br />
                  <span className={`${main.boldTopic}`}>150</span>
                  <span className={`${main.normalTopic}`}>Paid</span>
                </figure>
              </div>
            </div>
            <div className={`col-12 text-center ${main.botTopicBrown}`}>
              UI Design
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
                  <span className={`${main.boldTopic}`}>245</span>
                  <span className={`${main.normalTopic}`}>Videos</span>
                  <br />
                  <span className={`${main.boldTopic}`}>95</span>
                  <span className={`${main.normalTopic}`}>Free</span>
                  <br />
                  <span className={`${main.boldTopic}`}>150</span>
                  <span className={`${main.normalTopic}`}>Paid</span>
                </figure>
              </div>
            </div>
            <div className={`col-12 text-center ${main.botTopicBrown}`}>
              UI Design
            </div>
          </div>
        </div>
      </div>
    </SSRProvider>
  );
};
export default PopularTopics;
