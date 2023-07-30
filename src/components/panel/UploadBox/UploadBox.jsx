import React from "react";
import { Formik } from "formik";
import { getItem } from "../../../../src/core/services/storage/storage";
import Moment from "react-moment";
import { useState } from "react";
import up from "../../../../styles/panel/Upldcss.module.css"
import { toast,ToastContainer } from "react-toastify";

class Thumb extends React.Component {
  state = {
    loading: false,
    thumb: undefined,
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
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

const App =({handleRandom})=> {
  const file = (
    <svg
      id="Group_21369"
      data-name="Group 21369"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="30"
      viewBox="0 0 32 30"
    >
      <rect
        id="Rectangle_16896"
        data-name="Rectangle 16896"
        width="32"
        height="30"
        fill="#7a7d7c"
        opacity="0"
      />
      <path
        id="Path_83065"
        data-name="Path 83065"
        d="M24.339,6.562H16.288l-.411-1.181a3.842,3.842,0,0,0-3.64-2.365H6.389A3.706,3.706,0,0,0,2.543,6.562V21.93a3.706,3.706,0,0,0,3.846,3.546h17.95a3.706,3.706,0,0,0,3.846-3.546V10.109A3.706,3.706,0,0,0,24.339,6.562ZM25.62,21.93a1.234,1.234,0,0,1-1.281,1.181H6.389A1.234,1.234,0,0,1,5.108,21.93V6.562A1.234,1.234,0,0,1,6.389,5.381h5.847a1.277,1.277,0,0,1,1.217.8l.693,1.937a1.277,1.277,0,0,0,1.217.805h8.975a1.234,1.234,0,0,1,1.281,1.181Z"
        transform="translate(0.636 0.754)"
        fill="#7a7d7c"
      />
    </svg>
  );
const [filename,setfilename] = useState()
const[st,setSt]= useState()
const now = new Date()

    return (
      <React.Fragment>
      <div className="container">
      <Formik
          initialValues={{ file: null }}
          onSubmit={ (values) => {
            // console.log("form submited");
            let formData = new FormData();

            const token = getItem("token");
            formData.append("File", values.file);
            console.log(formData,",mm,m");

            fetch(
              "https://skillma-api.shinypi.net/Course/UploadFile",
              {
                method: "POST",
                body: formData,
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  'Authorization': "bearer " + token,
                  "accept": "application/json",
        
                },
              }
            ).then(async(r)=>{
              const resD = await r.json();
              const resDt = resD.uploadMessage
              setSt(resD.isSucces)
              setfilename(resDt)
              
              
            if(resD.isSucces === true){
              handleRandom(resDt)
              return resDt,
              toast.success('File Uploaded Successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                })
            }
        else if(resD.status !== 200){
          return resDt,
          toast.error('Some thing went wrong', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            })}
            })
          }}>
          {({ values,handleSubmit, setFieldValue }) => (
            <div>
            <div className="form-group">
              <label htmlFor="file">File upload</label>
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
            </div>
            <button type="button" onClick={() => {handleSubmit()}} className="btn btn-primary">
              submit
            </button>
            <ToastContainer />
           </div>
              )}
          </Formik>
      </div>
      
      {st === true ? <>
      <div className={`row ${up.holder}`}>
      <h6 className={up.name}> Your Files</h6>
      <div className={`col-6`}>{file}{filename}</div>
      <div className={`col-6`}><Moment format="MM/DD/YYYY">{now}</Moment></div>
    </div></>: null}
    </React.Fragment>
    );
}
export default App;
