import React, { useEffect } from "react";
import { getItem } from "../../../../src/core/services/storage/storage";
import Moment from "react-moment";
import { useState } from "react";
import up from "../../../../styles/panel/Upldcss.module.css";
import { toast, ToastContainer } from "react-toastify";
import Image from "next/image";
import Link from "next/link";
import { SSRProvider, Button } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import co from "../../../../styles/panel/course.module.css";
import st from "../../../../styles/panel/Teacher.module.css";
import { TagsInput } from "react-tag-input-component";
import axios from "axios";
import Loader from "../../Loader/Loader";

class Thumb extends React.Component {
  state = {
    loading: false,
    thumb: undefined,
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.file) {
      return;
    }

    this.setState({ loading: true }, () => {
      let reader = new FileReader();
      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };
      reader.readAsDataURL(nextProps.file);
    });
  }

  render() {
    const { file } = this.props;
    const { loading, thumb } = this.state;

    if (!file) {
      return null;
    }
    if (loading) {
      return <p>loading...</p>;
    }
    return (
      <img
        src={thumb}
        alt={file.name}
        className="img-thumbnail mt-2"
        height={200}
        width={200}
      />
    );
  }
}
const ContactSchema = Yup.object().shape({
  title: Yup.string().min(2, "Too Short!").required("Required"),
  category: Yup.string().min(2, "Too Short!").required("Required"),
  level: Yup.string().min(4, "Too Short!").required("Required"),
});
const TeacherProfile = ({ handleRandom }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const[pic,setpic] = useState()
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const [filename, setfilename] = useState();
  const [st, setSt] = useState();
  const [dt,setDt]= useState();
 
  const userId = getItem("userId");
  const defaultdt = async()=>{
    const token = getItem("token")
    try{
        const result = await axios.get(`${process.env.webURL}/TeacherDetail/GetTeacherDetailById?id=${userId}`
        ,{ headers: { Authorization: 'bearer '+  token}
    }).then((r)=>{
      setDt(r.data.data)
    })
    }
    catch(error){
            console.log(error)
    }
  }
  useEffect(()=>{
    defaultdt()
  },[])
  const d = dt !== undefined && dt.feild
  console.log(d,"d")
  const [selected, setSelected] = useState(d);
  console.log(selected,"selected")

  // console.log(dt !== undefined && dt.feild)
  // console.log(selected)
  // console.log([ dt !== undefined && dt.feild.map((i)=>{return i}) ])
  if(dt === undefined){
    return <Loader/>
  }
  // if(dt !== undefined){
  //   setSelected(dt.feild)
  // }
  const p = dt.pic === null ? require(`../../../assets/panel/profile/avatar.png`) : dt.pic
  // console.log(dt)
  //   if(dt.pic !== null){
  //   setpic(dt.pic)
  //   console.log(dt.pic)

  // }
  // else{
  //   setpic(require(`../../../assets/panel/profile/avatar.png`))
  // }
  return (
    <SSRProvider>
      <div className={`row p-3`}>
        <div className={``}>
          <Formik
          
            initialValues={{
              
              file: null,
              FullName: dt !== undefined && dt.name,
              message: dt !== undefined && dt.aboutTeacher,
              Field: dt !== undefined && dt.feild,
              Twitter: dt !== undefined && dt.twitter,
              Instagram: dt !== undefined && dt.insta,
              Facebook: dt !== undefined && dt.facebook,
              email: dt !== undefined && dt.email,
            }}
            // validationSchema={ContactSchema}
            onSubmit={(values) => {
              let formData = new FormData();

              const token = getItem("token");
              formData.append("TeacherId", userId);
              formData.append("file", values.file);
              formData.append("AboutMe", values.message);
              formData.append("FullName", values.FullName);
              formData.append("Field", JSON.stringify(selected));
              formData.append("Twiter", values.Twitter);
              formData.append("Instagram", values.Instagram);
              formData.append("FaceBook", values.Facebook);
              formData.append("email", values.Email);

              fetch(
                "https://skillma-api.shinypi.net/TeacherDetail/InsertTeacherDetail",
                {
                  method: "POST",
                  body: formData,
                  headers: {
                    Authorization: "bearer " + token,
                    accept: "application/json",
                  },
                }
              ).then(async (r) => {
                const resD = await r.json();
                const resDt = resD.uploadMessage;
                setSt(resD.isSucces);
                setfilename(resDt);

                if (resD.isSucces === true) {
                  // handleRandom(resDt);
                  return (
                    resDt,
                    toast.success("Done Successfully!", {
                      position: "top-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    })
                  );
                } else if (resD.status !== 200) {
                  return (
                    resDt,
                    toast.error("Some thing went wrong", {
                      position: "top-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    })
                  );
                }
              });
              console.log(values);
            }}
          >
            {({ errors, touched, values, setFieldValue }) => (
              <Form className={co.form}>
                <div className={`form-group ${co.inputimg}`}>
                  <label>
                    <div className={values.file !== null ? `d-none` : ""}>
                      <Image
                        src={p}
                        alt=""
                        width="135"
                        height="135"
                      />
                    </div>
                    <input
                      id="file"
                      name="file"
                      type="file"
                      onChange={(event) => {
                        setFieldValue("file", event.currentTarget.files[0]);
                      }}
                      className="form-control"
                    />
                    <Thumb file={values.file} />
                  </label>
                </div>
                <label htmlFor="FullName" className={`${co.label} ${co.lbl1}`}>
                  Name
                </label>
                <Field
                  name="FullName"
                  type="text"
                  placeholder="Name"
                  className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                />
                {errors.FullName && touched.FullName ? (
                  <div className={co.err}>{errors.FullName}</div>
                ) : null}
                <div>
                  <label htmlFor="Field" className={`${co.label} ${co.lbl1}`}>
                    Field
                  </label>
                  {/* <pre>{JSON.stringify(selected)}</pre> */}
                  <TagsInput
                    value={selected}
                    onChange={setSelected}
                    name="Field"
                    placeHolder="enter Field"
                  />
                  <h6 className="text-secondary">
                    press enter or comma to add new tag
                  </h6>
                </div>
                <label htmlFor="email" className={`${co.label} ${co.lbl1}`}>
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="abcd@gmaill.com"
                  className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                />
                {errors.email && touched.email ? (
                  <div className={co.err}>{errors.email}</div>
                ) : null}
                <label htmlFor="AboutMe" className={`${co.label} ${co.lbl1}`}>
                  bio
                </label>
                <Field
                  placeholder="Description"
                  name="message"
                  as="textarea"
                  className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                />
                {errors.email && touched.email ? (
                  <div className={co.err}>{errors.email}</div>
                ) : null}
                <label className={`${co.label} ${co.lbl1}`}>Facebook</label>
                <Field
                  name="Facebook"
                  type="text"
                  placeholder="Copy Link"
                  className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                />
                {errors.Facebook && touched.Facebook ? (
                  <div className={co.err}>{errors.Facebook}</div>
                ) : null}
                <label className={`${co.label} ${co.lbl1}`}>Twitter</label>
                <Field
                  name="Twitter"
                  type="text"
                  placeholder="Copy Link"
                  className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                />
                {errors.email && touched.email ? (
                  <div className={co.err}>{errors.email}</div>
                ) : null}
                <label className={`${co.label} ${co.lbl1}`}>Instagram</label>
                <Field
                  name="Instagram"
                  type="text"
                  placeholder="Copy Link"
                  className={`col-12 mx-auto ${co.txtfeild} ${co.txtfeild2}`}
                />
                {errors.email && touched.email ? (
                  <div className={co.err}>{errors.email}</div>
                ) : null}
                <div className={`col-12 d-flex justify-content-end mt-4`}>
                  <button type="submit" className={`${co.conBTN} ${co.nxt}`}>
                    Save
                  </button>
                  <ToastContainer/>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </SSRProvider>
  );
};
export default TeacherProfile;
