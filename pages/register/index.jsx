import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import reg from "../../styles/Registeration.module.css";
import { SSRProvider, Button, FloatingLabel, Form } from "react-bootstrap";
const Register = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const [passwordShownr, setPasswordShownr] = useState(false);
  const togglePasswordr = () => {
    setPasswordShownr(!passwordShownr);
  };

  return (
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
              <div className={`col-9 ${reg.radio}`}>
                <h6 className={`${reg.loginAs}`}>Login as:</h6>
                <div className={`row`}>
                <div className={`col-6`}>
                <Form.Check
                  type="radio"
                  aria-label="Student"
                  label="Student"
                  name="radio"
                  id="Student"
                />
                </div>
                <div className={`col-6`}>
                <Form.Check
                  type="radio"
                  aria-label="Teacher"
                  label="Teacher"
                  name="radio"
                  id="Teacher"
                />
                </div>
                </div>
              </div>
              <div className={`col-9 mx-auto my-5`}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control type="email" placeholder={``} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  {
                    <Form.Control
                      type={passwordShown ? "text" : "password"}
                      placeholder=""
                    />
                  }
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
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingPassword"
                  label="Repeat Password"
                >
                  {
                    <Form.Control
                      type={passwordShownr ? "text" : "password"}
                      placeholder=""
                    />
                  }
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
                </FloatingLabel>
                <Button variant="warning" className={`${reg.logBTN}`}>
                  Create Account
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SSRProvider>
  );
};

export default Register;
