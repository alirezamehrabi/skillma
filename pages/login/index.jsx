import Head from "next/head";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import co from "../../styles/panel/course.module.css";
import styles from "../../styles/Home.module.css";
import reg from "../../styles/Registeration.module.css";
import { SSRProvider, Button, FloatingLabel } from "react-bootstrap";
import { useContext } from "react";
import DataContext from "../../src/Context/DataContext";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { loginUser } from "../api/auth/login-user";
import { useRouter } from "next/router";
import { getItem } from "../../src/core/services/storage/storage";
import Loader from "../../src/components/Loader/Loader";

const ContactSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(4, "Too Short!").required("Required"),
});

const Login = () => {
  const router = useRouter();

  let token = getItem("token");
  if (token) {
    router.push({ pathname: "/" });
    return;
  }
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const google = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <g id="Group_20493" data-name="Group 20493" transform="translate(-0.333)">
        <rect
          id="Rectangle_3550"
          data-name="Rectangle 3550"
          width="32"
          height="32"
          rx="0.9"
          transform="translate(0.333)"
          opacity="0"
        />
        <g
          id="Group_20492"
          data-name="Group 20492"
          transform="translate(4.754 4.522)"
        >
          <path
            id="Path_9873"
            data-name="Path 9873"
            d="M23.351,12.806a9.96,9.96,0,0,0-.245-2.381H12.172v4.322H18.59a5.692,5.692,0,0,1-2.381,3.778l-.023.144,3.457,2.678.24.024a11.386,11.386,0,0,0,3.468-8.566"
            transform="translate(-0.527 -0.902)"
            fill="#4285f4"
          />
          <path
            id="Path_9874"
            data-name="Path 9874"
            d="M14.853,23.052a11.094,11.094,0,0,0,7.712-2.821l-3.674-2.847a6.9,6.9,0,0,1-4.038,1.165A7.011,7.011,0,0,1,8.229,13.71l-.136.011L4.5,16.5l-.046.131a11.635,11.635,0,0,0,10.4,6.418"
            transform="translate(-3.208 0.239)"
            fill="#34a853"
          />
          <path
            id="Path_9875"
            data-name="Path 9875"
            d="M8.549,15.666a7.167,7.167,0,0,1-.389-2.3,7.553,7.553,0,0,1,.376-2.3L8.529,10.9,4.89,8.078l-.119.057a11.614,11.614,0,0,0,0,10.454l3.778-2.923"
            transform="translate(-3.528 -1.717)"
            fill="#fbbc05"
          />
          <path
            id="Path_9876"
            data-name="Path 9876"
            d="M14.853,7.86a6.457,6.457,0,0,1,4.5,1.734l3.286-3.209a11.185,11.185,0,0,0-7.79-3.027A11.635,11.635,0,0,0,4.45,9.774L8.215,12.7A7.038,7.038,0,0,1,14.853,7.86"
            transform="translate(-3.209 -3.356)"
            fill="#eb4335"
          />
        </g>
      </g>
    </svg>
  );

  const { setUser,loading } = useContext(DataContext);

  return !loading ? (
    <SSRProvider>
      <div className={styles.container}>
        <Head>
          <title>Login To SkillMa</title>
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
              <h6 className={`${reg.loginTxt}`}>Login</h6>
              <h6 className={`${reg.haventaccount}`}>
                Don&apos;t have an account?{" "}
                <Link href={`/register`}>Register</Link>
              </h6>
              <Button variant="light" className={`${reg.google}`}>
                {google}Sign in with Google
              </Button>
              <div className={`${reg.line}`} />
              <h6 className={`${reg.or}`}>OR</h6>
              <div className={`col-9 mx-auto my-5`}>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={ContactSchema}
                  onSubmit={async (values) => {
                    setIsSubmitting(true);

                    const userObj = {
                      email: values.email,
                      password: values.password,
                    };
                    const user = await loginUser(userObj);
                    setUser(user);
                    // console.log(user)
                    if (
                      user !== "undefined" &&
                      user !== "false" &&
                      user !== null
                    ) {
                      router.push({ pathname: "/" });
                    }
                    setIsSubmitting(false);

                    // console.log(values);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form className={co.form}>
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
                      <Link href={`/forgetpass`}>Forget Password?</Link>
                      <Button
                        variant="warning"
                        type="submit"
                        className={`${reg.logBTN}`}
                      >
                        {isSubmitting ? (
                          <div className={co.loadspn} />
                        ) : (
                          <>Login</>
                        )}
                      </Button>
                      <ToastContainer />
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SSRProvider>
  ):(<Loader />)
};

export default Login;
