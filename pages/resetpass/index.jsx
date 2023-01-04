import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import reg from "../../styles/Registeration.module.css";
import { SSRProvider, Button, Modal } from "react-bootstrap";
import co from "../../styles/panel/course.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {useRouter} from 'next/router';
import { useEffect } from "react";
import { Resetpass } from "../api/auth/reset-pass.js";
import Loader from "../../src/components/Loader/Loader";
import { useContext } from "react";
import DataContext from "../../src/Context/DataContext";

const ContactSchema = Yup.object().shape({
  password: Yup.string().min(4, "Too Short!").required("Required"),
  repassword: Yup.string().min(4, "Too Short!").required("Required"),
});
const ForgetPass = () => {
    const [show, setShow] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const tik = <svg id="Group_20738" data-name="Group 20738" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54">
  <rect id="Rectangle_6118" data-name="Rectangle 6118" width="54" height="54" transform="translate(0 0)" fill="#3a8944" opacity="0"/>
  <path id="Path_51926" data-name="Path 51926" d="M28.917,16.835,20.176,25.6l-3.362-3.362a2.037,2.037,0,1,0-2.873,2.873l4.788,4.809a2.041,2.041,0,0,0,2.873,0L31.79,19.728a2.038,2.038,0,0,0,.011-2.882l-.011-.011A2.037,2.037,0,0,0,28.917,16.835ZM23.375,3A20.375,20.375,0,1,0,43.75,23.375,20.374,20.374,0,0,0,23.375,3Zm0,36.675a16.3,16.3,0,1,1,16.3-16.3A16.3,16.3,0,0,1,23.375,39.675Z" transform="translate(3.792 3.792)" fill="#3a8944"/>
</svg>

const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const [passwordShownr, setPasswordShownr] = useState(false);
  const togglePasswordr = () => {
    setPasswordShownr(!passwordShownr);
  };
  const router = useRouter();
  
  const urlquery = router.query.token
  useEffect(()=>{
    urlquery
  },[])
  
  const { loading } = useContext(DataContext);
  return !loading ? (
    <SSRProvider>
      <div className={styles.container}>
        <Head>
          <title>Reset Password</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
          <div className={`row ${reg.login} ${reg.res}`}>
            <div className={`col-lg-5 ${reg.reset}`}>
              
            </div>
            <div className={`col-lg-7 ${reg.rese}`}>
              <h6 className={`${reg.resTXT}`}>Reset Password</h6>
              <h6 className={`${reg.worry}`}>
              Don&apos;t Worry! It Happens.<br/>Please Enter the Valid Email Address
              </h6>
              <div className={`col-9 mx-auto my-5`}>

              <Formik
                  initialValues={{
                    password: "",
                    repassword: "",
                  }}
                  validationSchema={ContactSchema}
                  onSubmit={async (values) => {
                    setIsSubmitting(true);

                    const userObj = {
                      password: values.password,
                      token: urlquery,
                    };
                    const user = await Resetpass(userObj);
                    setUser(user);
                    setIsSubmitting(false);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form className={co.form}>
                      <Field
                        name="password"
                        id="password"
                        type={passwordShown ? "text" : "password"}
                        placeholder="New password"
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
                        placeholder="Retype New Password"
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
                        onClick={handleShow}
                      >
                        {isSubmitting ? (
                          <div className={co.loadspn} />
                        ) : (
                          <>Submit</>
                        )}
                      </Button>
                    </Form>
                  )}
                </Formik>
                
                
                <Modal show={show} className={`text-center mx-auto`} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        {tik}<br/>
        <h6 className={`mt-3 ${reg.forgetnormal}`}>Your password successfully<br/> has been changed</h6></Modal.Body>
        <Link href={`/`}><Button variant="warning" className={`${reg.gotoskillma}`}>
                  Go to SkillMa
                </Button></Link>
      </Modal>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SSRProvider>
  ):(<Loader />)
};

export default ForgetPass;
