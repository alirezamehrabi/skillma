import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import reg from "../../styles/Registeration.module.css";
import { SSRProvider, Button } from "react-bootstrap";
import Loader from "../../src/components/Loader/Loader";
import { useContext } from "react";
import DataContext from "../../src/Context/DataContext";
import { register } from "../api/auth/register";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import co from "../../styles/panel/course.module.css";
import { ToastContainer, toast } from "react-toastify";

const ContactSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(4, "Too Short!").required("Required"),
  repassword: Yup.string().when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    )
  })
});

const Register = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const [passwordShownr, setPasswordShownr] = useState(false);
  const togglePasswordr = () => {
    setPasswordShownr(!passwordShownr);
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { loading } = useContext(DataContext);
  return !loading ? (
    <SSRProvider>
      <div className={styles.container}>
        <Head>
          <title>Register To SkillMa</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
          <div className={`row ${reg.login}`}>
            <div className={`col-lg-5 ${reg.log}`}>
              <h6 className={reg.logTitle}>
                Start your
                <br />
                Journey with us.
              </h6>
            </div>
            <div className={`col-lg-7 ${reg.logi}`}>
              <h6 className={`${reg.regTxt}`}>Sign Up</h6>
              <h6 className={`${reg.haventaccount}`}>
                Already have an account? <Link href={`/login`}>Login</Link>
              </h6>
              
              <Formik
                  initialValues={{
                    email: "",
                    password: "",
                    repassword: "",
                  }}
                  validationSchema={ContactSchema}
                  onSubmit={async (values) => {
                    setIsSubmitting(true);

                    const userObj = {
                      email: values.email,
                      password: values.password,
                      rePassword: values.repassword,
                      roleId: values.picked
                    };
                    const user = await register(userObj);
                    setUser(user);
                    // console.log(user)
                    // if (
                    //   user !== "undefined" &&
                    //   user !== "false" &&
                    //   user !== null
                    // ) {
                    //   router.push({ pathname: "/" });
                    // }
                    setIsSubmitting(false);

                    // console.log(values);
                  }}
                  
                >
                  {({ errors, touched }) => (
                    <Form className={co.form}>
                      <div className={`col-9 ${reg.radio}`}>
                <h6 className={`${reg.loginAs}`}>Login as:</h6>
                <div className={`row`}>
                <div className={`col-6`}>
                <label>
                <Field type="radio" name="picked" value="1" />Teacher</label>
                </div>
                <div className={`col-6`}>
                <label><Field type="radio" name="picked" value="2" />Student</label>
                </div>
                </div>
              </div>
                      <Field
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Email address"
                        className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                      />

                      {errors.email && touched.email ? (
                        <div className={co.err}>{errors.email}</div>
                      ) : null}
                      <Field
                        name="password"
                        id="password"
                        type={passwordShown ? "text" : "password"}
                        placeholder="password"
                        className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                      />
                      <Button className={`${reg.eye}`} onClick={togglePassword}>
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
                      </Button>
                      {errors.password && touched.password ? (
                        <div className={co.err}>{errors.password}</div>
                      ) : null}
                      <Field
                        name="repassword"
                        id="repassword"
                        type={passwordShownr ? "text" : "password"}
                        placeholder="re-type your password"
                        className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                      />
                      <Button className={`${reg.eye}`} onClick={togglePasswordr}>
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
                      </Button>
                      {errors.repassword && touched.repassword ? (
                        <div className={co.err}>{errors.repassword}</div>
                      ) : null}
                      <Link href={`/forgetpass`}>Forget Password?</Link>
                      <Button
                        variant="warning"
                        type="submit"
                        className={`${reg.logBTN}`}
                      >
                        {isSubmitting ? (
                          <div className={co.loadspn} />
                        ) : (
                          <>Register</>
                        )}
                      </Button>
                      <ToastContainer/>
                    </Form>
                  )}
                </Formik>
            </div>
          </div>
        </main>
      </div>
    </SSRProvider>
  ):(<Loader />)
};

export default Register;
