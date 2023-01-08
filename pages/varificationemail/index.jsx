import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import varify from "../../styles/varificationemail.module.css";
import { SSRProvider, Button } from "react-bootstrap";
import Loader from "../../src/components/Loader/Loader";
import { useContext } from "react";
import DataContext from "../../src/Context/DataContext";
import * as Yup from "yup";

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
  const { loading } = useContext(DataContext);
  return !loading ? (
    <SSRProvider>
      <div className={styles.container}>
        <Head>
          <title>Varification Email</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
            <div className={`row`}>
                <div className={`col-10 ${varify.varifyContainer}`}>
                    <h3 className="mb-4">Please Check your Email to Verify your Account</h3>
                    <h6>If you Did not recieve Email , press <Link href="#">Resend Email</Link></h6>
                </div>
            </div>
        </main>
      </div>
    </SSRProvider>
  ):(<Loader />)
};

export default Register;
