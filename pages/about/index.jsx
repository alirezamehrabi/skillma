import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import detail from "../../styles/DetailCourse.module.css";
import about from "../../styles/About.module.css";
import online from "../../styles/Onlinecourse.module.css";
import Menu from "./../../src/components/Menu/Menu";
import Footer from "./../../src/components/Footer/Footer";
import TeamSlider from "./../../src/components/TeamSlider/TeamSlider";
import { SSRProvider } from "react-bootstrap";
import CountUp from "react-countup";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";


const ContactSchema = Yup.object().shape({
  subject: Yup.string()

    .min(2, "Too Short!")
    .required("Required"),

  email: Yup.string()

    .email("Invalid email")
    .required("Required"),
  message: Yup.string()

    .min(4, "Too Short!")
    .required("Required"),
});

// export async function getStaticProps() {
//   const res = await fetch(
//     `${process.env.webURL}/AboutUs/InsertAboutUs`
//   );
//   const data = await res.json();
//   return {
//     props: {
//       ...{ data },
//     },
//   };
// }

const detailcourse = () => {
  const meeting = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs>
        <style>{`.cls-1{fill:blue;opacity:0;}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="keylines">
          <rect className="cls-1" width="25" height="25" />
          <path d="M7.45,10.18H9.27a.91.91,0,0,0,0-1.82H7.45a.91.91,0,1,0,0,1.82ZM20.19,4.72H12.91V3.81a.91.91,0,0,0-1.82,0v.91H3.81a.91.91,0,0,0-.91.91v9.1a2.73,2.73,0,0,0,2.73,2.73H9.81L7.72,19.54a.91.91,0,0,0,0,1.29h0a.9.9,0,0,0,1.28,0H9l2.08-2.09v1.44a.91.91,0,0,0,1.82,0V18.74L15,20.83a.91.91,0,0,0,1.29,0h0a.91.91,0,0,0,0-1.29h0l-2.09-2.08h4.18a2.73,2.73,0,0,0,2.73-2.73V5.63A.91.91,0,0,0,20.19,4.72Zm-.91,10a.91.91,0,0,1-.91.91H5.63a.91.91,0,0,1-.91-.91V6.54H19.28ZM7.45,13.82h5.46a.91.91,0,0,0,0-1.82H7.45a.91.91,0,1,0,0,1.82Z" />
        </g>
      </g>
    </svg>
  );
  const phone = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={about.icon}><defs><style>{`.cls-1{opacity:0}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24"/><path d="M18.79,12.93a2.61,2.61,0,0,1-.61-.11A9.43,9.43,0,0,1,17,12.47a1.81,1.81,0,0,0-2.25.9l-.2.41A11.18,11.18,0,0,1,12.14,12a11.18,11.18,0,0,1-1.81-2.41l.38-.25a1.81,1.81,0,0,0,.9-2.25,10.11,10.11,0,0,1-.35-1.19c0-.2-.08-.41-.11-.61A2.72,2.72,0,0,0,8.43,3H5.72A2.73,2.73,0,0,0,3,5.69a2.6,2.6,0,0,0,0,.4A17.2,17.2,0,0,0,18,21h.35a2.69,2.69,0,0,0,1.81-.69,2.74,2.74,0,0,0,.91-2V15.56A2.73,2.73,0,0,0,18.79,12.93Zm.45,5.43a.89.89,0,0,1-.31.68,1,1,0,0,1-.74.23A15.4,15.4,0,0,1,4.87,5.88a1,1,0,0,1,.22-.74.89.89,0,0,1,.68-.31H8.49a.9.9,0,0,1,.9.72c0,.24.09.49.14.73A9.43,9.43,0,0,0,10,7.68l-1.27.59a.9.9,0,0,0-.45,1.2h0a13.11,13.11,0,0,0,6.34,6.34,1,1,0,0,0,1.2-.47l.56-1.27a12.27,12.27,0,0,0,1.43.42c.25.05.49.1.74.13a.91.91,0,0,1,.71.91Z"/></g></svg>
 const txt = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={about.icon}><defs><style>{`.cls-1{opacity:0}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24"/><path d="M18.4,4.69H5.6A2.74,2.74,0,0,0,2.86,7.43v9.14A2.74,2.74,0,0,0,5.6,19.31H18.4a2.74,2.74,0,0,0,2.74-2.74V7.43A2.74,2.74,0,0,0,18.4,4.69ZM5.6,6.52H18.4a.91.91,0,0,1,.91.91L12,11.89,4.69,7.43A.91.91,0,0,1,5.6,6.52ZM19.31,16.57a.91.91,0,0,1-.91.91H5.6a.91.91,0,0,1-.91-.91V9.51l6.83,4.18a.94.94,0,0,0,.92,0l6.87-4.18Z"/></g></svg>
 const twitter = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={about.socialicon}><defs><style>{`.cls-1{opacity:0}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24"/><path d="M21,5.41a.81.81,0,0,0-.81-.81.88.88,0,0,0-.42.11,6.23,6.23,0,0,1-1.53.65,4.24,4.24,0,0,0-2.76-1,4.3,4.3,0,0,0-4.28,4.15A9.08,9.08,0,0,1,5.62,5.28a.82.82,0,0,0-.7-.3.79.79,0,0,0-.64.41,4.3,4.3,0,0,0-.2,3.9h0a.86.86,0,0,0-.41.73,2,2,0,0,0,0,.35A4.17,4.17,0,0,0,5,13.08a.86.86,0,0,0-.06.63A4.26,4.26,0,0,0,6.86,16.1a6.16,6.16,0,0,1-2.94.37A.82.82,0,0,0,3.38,18a10.6,10.6,0,0,0,5.73,1.69A10.46,10.46,0,0,0,19.3,12a10.46,10.46,0,0,0,.44-3V8.85A4.7,4.7,0,0,0,21,5.41ZM18.29,8a.81.81,0,0,0-.19.58c0,.13,0,.27,0,.39a8.89,8.89,0,0,1-.38,2.52A8.72,8.72,0,0,1,9.11,18,8.72,8.72,0,0,1,7,17.77a7.66,7.66,0,0,0,2.41-1.28.81.81,0,0,0,.14-1.14A.85.85,0,0,0,8.94,15a2.61,2.61,0,0,1-1.81-.76,2.37,2.37,0,0,0,.36-.09.8.8,0,0,0,.56-1,.81.81,0,0,0-.62-.58,2.61,2.61,0,0,1-1.85-1.41l.45,0a.85.85,0,0,0,.81-.57.83.83,0,0,0-.33-.93A2.64,2.64,0,0,1,5.34,7.53a.92.92,0,0,1,0-.16,10.64,10.64,0,0,0,6.71,2.85.83.83,0,0,0,.67-.3.79.79,0,0,0,.17-.71,2.32,2.32,0,0,1-.07-.59A2.64,2.64,0,0,1,15.47,6a2.61,2.61,0,0,1,1.91.83.84.84,0,0,0,.76.25,8.52,8.52,0,0,0,1-.27A5.08,5.08,0,0,1,18.29,8Z"/></g></svg>
 const youtube = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={about.socialicon}><defs><style>{`.cls-1{opacity:0}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24"/><path d="M21,10.13a6.91,6.91,0,0,0-.75-3.37,2.38,2.38,0,0,0-1.4-.82A62.64,62.64,0,0,0,12,5.69a64.77,64.77,0,0,0-6.82.24A2.27,2.27,0,0,0,4,6.54a4.17,4.17,0,0,0-.9,2.82,39.06,39.06,0,0,0,0,5.3,7.46,7.46,0,0,0,.24,1.63,2.58,2.58,0,0,0,.58,1.11A2.41,2.41,0,0,0,5.13,18a36.4,36.4,0,0,0,5.32.27c2.86,0,5.37,0,8.34-.23A2.32,2.32,0,0,0,20,17.44a2.08,2.08,0,0,0,.5-.81A8.76,8.76,0,0,0,21,13.85C21,13.39,21,10.62,21,10.13ZM10.15,14.34V9.27L15,11.82C13.64,12.57,11.85,13.42,10.15,14.34Z"/></g></svg>
 const insta = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={about.socialicon}><defs><style>{`.cls-1{opacity:0}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24"/><path d="M16.77,6.16h0a1.07,1.07,0,1,0,1.07,1.07,1.07,1.07,0,0,0-1.07-1.07Zm4.11,2.16a6.68,6.68,0,0,0-.41-2.17,4.31,4.31,0,0,0-1-1.58,4.17,4.17,0,0,0-1.58-1,6.44,6.44,0,0,0-2.17-.42c-.95-.05-1.25-.05-3.68-.05s-2.73,0-3.68.05a6.44,6.44,0,0,0-2.17.42,4.17,4.17,0,0,0-1.58,1,4.17,4.17,0,0,0-1,1.58,6.44,6.44,0,0,0-.42,2.17c-.05.95-.05,1.25-.05,3.68s0,2.73.05,3.68a6.44,6.44,0,0,0,.42,2.17,4.17,4.17,0,0,0,1,1.58,4.17,4.17,0,0,0,1.58,1,6.44,6.44,0,0,0,2.17.42c.95.05,1.25.05,3.68.05s2.73,0,3.68-.05a6.44,6.44,0,0,0,2.17-.42,4.63,4.63,0,0,0,2.62-2.61,6.68,6.68,0,0,0,.41-2.17c0-.95.05-1.25.05-3.68S20.93,9.27,20.88,8.32Zm-1.61,7.25a5,5,0,0,1-.3,1.67,2.67,2.67,0,0,1-.67,1,2.7,2.7,0,0,1-1,.67,4.93,4.93,0,0,1-1.66.31c-.89,0-1.22.05-3.57.05s-2.68,0-3.58-.05A5.09,5.09,0,0,1,6.73,19a2.76,2.76,0,0,1-1-.67,2.7,2.7,0,0,1-.67-1,5.16,5.16,0,0,1-.35-1.7c0-.89-.06-1.22-.06-3.57s0-2.68.06-3.57A4.92,4.92,0,0,1,5,6.73a2.66,2.66,0,0,1,.71-1,2.68,2.68,0,0,1,1-.72,4.91,4.91,0,0,1,1.7-.3c.89,0,1.22-.06,3.57-.06s2.68,0,3.57.06a5,5,0,0,1,1.67.3,2.74,2.74,0,0,1,1.06.72,2.76,2.76,0,0,1,.67,1,4.91,4.91,0,0,1,.3,1.7c.05.89.06,1.22.06,3.57S19.32,14.68,19.27,15.57ZM12,7.42A4.58,4.58,0,1,0,16.59,12,4.57,4.57,0,0,0,12,7.42ZM12,15a3,3,0,1,1,3-3h0A3,3,0,0,1,12,15Z"/></g></svg>
 const facebook = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={about.socialicon}><defs><style>{`.cls-1{opacity:0}`}</style></defs><g id="Layer_2" data-name="Layer 2"><rect className="cls-1" width="24" height="24"/><path d="M20.17,2.82H3.83a1,1,0,0,0-1,1V20.17a1,1,0,0,0,1,1h8.79V14.07H10.24V11.31h2.38V9.24a3.35,3.35,0,0,1,3-3.66,3.75,3.75,0,0,1,.58,0,19.17,19.17,0,0,1,2.14.11V8.16H16.87c-1.16,0-1.38.55-1.38,1.35v1.77h2.76L17.89,14h-2.4v7.14h4.68a1,1,0,0,0,1-1h0V3.83a1,1,0,0,0-1-1Z"/></g></svg>
 
 
 
 return (
    <SSRProvider>
      <div className={styles.container}>
        <Head>
          <title>About Us</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
          <Menu />
          <section className={`row container mx-auto`}>
            <div className={`${about.title}`}>About us</div>
            <div className={`${about.des}`}>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Ciceros book. It usually
              begins with:
              <br />
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web scrambled parts of
              Ciceros book. It usually begins with.
            </div>

            <div className={`col-md-6 mx-auto text-center`}>
              <div className={`row`}>
                <div className={`col-4`}>
                  <h2>
                    <div
                      className="google_font my-2"
                      style={{
                        fontFamily:
                          "'Zen Kaku Gothic New',Arial,Tahoma,sans-serif",
                        fontSize: "35px",
                        lineHeight: "50px",
                        fontWeight: "600",
                        letterSpacing: "0px",
                        color: "#333",
                      }}
                    >
                      {" "}
                      <CountUp end={4} duration={4} />
                      <span className="shopassistant-plus">m+</span>{" "}
                    </div>
                  </h2>
                  <h6>Student Learning</h6>
                </div>
                <div className={`col-4`}>
                  <h2>
                    <div
                      className="google_font my-2"
                      style={{
                        fontFamily:
                          "'Zen Kaku Gothic New',Arial,Tahoma,sans-serif",
                        fontSize: "35px",
                        lineHeight: "50px",
                        fontWeight: "600",
                        letterSpacing: "0px",
                        color: "#333",
                      }}
                    >
                      {" "}
                      <CountUp end={4} duration={4} />
                      <span className="shopassistant-plus">k+</span>{" "}
                    </div>
                  </h2>
                  <h6>Active Courses</h6>
                </div>
                <div className={`col-4`}>
                  <h2>
                    <div
                      className="google_font my-2"
                      style={{
                        fontFamily:
                          "'Zen Kaku Gothic New',Arial,Tahoma,sans-serif",
                        fontSize: "35px",
                        lineHeight: "50px",
                        fontWeight: "600",
                        letterSpacing: "0px",
                        color: "#333",
                      }}
                    >
                      {" "}
                      <CountUp end={100} duration={4} />
                    </div>
                  </h2>
                  <h6>Free Courses</h6>
                </div>
              </div>
            </div>
            <div className={`row g-4`}>
              <div className={`col-4 g-4 ${about.img}`}>
                <Image
                  src={require(`./../../src/assets/about/1.png`)}
                  alt=""
                  width=""
                  height=""
                />
              </div>
              <div className={`col-4 g-4`}>
                <div className={`row g-4`}>
                  <div className={`col-12 g-4 ${about.img}`}>
                    <Image
                      src={require(`./../../src/assets/about/2.png`)}
                      alt=""
                      width=""
                      height=""
                    />
                  </div>
                  <div className={`col-12 g-4 ${about.img}`}>
                    <Image
                      src={require(`./../../src/assets/about/3.png`)}
                      alt=""
                      width=""
                      height=""
                    />
                  </div>
                </div>
              </div>
              <div className={`col-4 g-4 ${about.img}`}>
                <Image
                  src={require(`./../../src/assets/about/4.png`)}
                  alt=""
                  width=""
                  height=""
                />
              </div>
            </div>
          </section>
          <section className={`row container mx-auto ${about.team}`}>
            <div className={`col-12 text-center ${about.teamTitle}`}>Team</div>
            <div className={`col-12 text-center`}>
              <TeamSlider />
            </div>
          </section>
          <section className={`row container-fluid mx-auto ${about.join}`}>
            <div className={`col-12 text-center my-3 ${about.joinTitle}`}>
              Join us
            </div>
            <div className={`col-12 text-center ${about.joinDes}`}>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Ciceros book. It usually begins
              with:
            </div>
            <div className={`col-12 text-center`}>
              <button
                type="button"
                className={`btn btn-warning ${about.joinBTN}`}
              >
                Join
              </button>
            </div>
          </section>
          <section className={`row container-fluid mx-auto ${about.contact}`}>
            <div className={`col-12 text-center my-3 ${about.contactTitle}`}>
              Contact us
            </div>
            <div className={`col-12 mx-auto`}>
              <div className={`row mx-auto container g-5`}>
                <div className={`col-md-6 g-5`}>
                  <div className={`col-12 ${about.leftContact}`}>
                    <Formik
                      initialValues={{
                        subject: "",

                        email: "",

                        message: "",
                      }}
                      validationSchema={ContactSchema}
                      onSubmit={(values) => {
                        // same shape as initial values

                        console.log(values);
                      }}
                    >
                      {({ errors, touched }) => (
                        <Form className={about.form}>
                          <Field
                            name="email"
                            type="email"
                            placeholder="abcd@gmail.com"
                            className={`col-12 mx-auto ${about.field}`}
                          />

                          {errors.email && touched.email ? (
                            <div className={about.err}>{errors.email}</div>
                          ) : null}
                          <Field
                            name="subject"
                            placeholder="Subject"
                            className={`col-12 mx-auto ${about.field}`}
                          />

                          {errors.subject && touched.subject ? (
                            <div className={about.err}>{errors.subject}</div>
                          ) : null}

                          <Field
                            name="message"
                            placeholder="message"
                            as="textarea"
                            className={`col-12 mx-auto ${about.field}`}
                          />

                          {errors.message && touched.message ? (
                            <div className={about.err}>{errors.message}</div>
                          ) : null}

                          <button type="submit" className={about.conBTN}>
                            Submit
                          </button>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
                <div className={`col-md-6 g-5`}>
                  <div className={`col-12 p-5 ${about.rightContact}`}>
                    {phone} 123456 <br/>
                    {txt} abcd@gmail.com
                    <div className={`col-xl-6 ${about.Social}`}>
                    <div className={`col-12 mx-auto text-center ${about.Socialtxt}`}>Social Media</div>
                    <div className={`col-12 `}>
                          <Link href="#">{twitter}</Link>
                          <Link href="#">{insta}</Link>
                          <Link href="#">{facebook}</Link>
                          <Link href="#">{youtube}</Link>
                    </div>
                  
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </SSRProvider>
  );
};

export default detailcourse;
