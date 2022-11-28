import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import reg from "../../styles/Registeration.module.css";
import {
  SSRProvider,
  Button,
  FloatingLabel,
  Form,
  Modal,
} from "react-bootstrap";
const ForgetPass = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const message = (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="56"
      viewBox="0 0 56 56"
    >
      <rect
        id="Rectangle_6265"
        data-name="Rectangle 6265"
        width="56"
        height="56"
        fill="#2d3ddf"
        opacity="0"
      />
      <path
        id="Path_83042"
        data-name="Path 83042"
        d="M38.912,4.8H9.337A6.356,6.356,0,0,0,3,11.175v21.25A6.356,6.356,0,0,0,9.337,38.8H38.912a6.356,6.356,0,0,0,6.338-6.375V11.175A6.356,6.356,0,0,0,38.912,4.8Zm-.868,4.25L25.627,21.54a2.1,2.1,0,0,1-2.981,0h0L10.206,9.05Zm2.981,23.375a2.119,2.119,0,0,1-2.112,2.125H9.337a2.119,2.119,0,0,1-2.112-2.125V12.049l12.417,12.49a6.334,6.334,0,0,0,8.966,0l12.417-12.49Z"
        transform="translate(3.875 6.2)"
        fill="#2d3ddf"
      />
    </svg>
  );

  return (
    <SSRProvider>
      <div className={styles.container}>
        <Head>
          <title>Forget Password</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
          <div className={`row ${reg.login} ${reg.for}`}>
            <div className={`col-lg-5 ${reg.reg}`}></div>
            <div className={`col-lg-7 ${reg.forg}`}>
              <h6 className={`${reg.forgett}`}>Forget Password</h6>
              <h6 className={`${reg.worry}`}>
                Don&apos;t Worry! It Happens.
                <br />
                Please Enter the Valid Email Address
              </h6>
              <div className={`col-9 mx-auto my-5`}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control type="email" placeholder={``} />
                </FloatingLabel>

                <Button
                  variant="warning"
                  className={`${reg.logBTN}`}
                  onClick={handleShow}
                >
                  Submit
                </Button>
                <Modal
                  show={show}
                  className={`text-center mx-auto`}
                  onHide={handleClose}
                >
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body>
                    {message}
                    <br />
                    <h5 className={`${reg.forgetbold}`}>
                      please check your email
                    </h5>
                    <h6 className={`${reg.forgetnormal}`}>
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text used in laying out print, graphic or web designs.
                    </h6>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SSRProvider>
  );
};

export default ForgetPass;
