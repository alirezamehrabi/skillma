import React, {useEffect, useRef, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import Image from "next/image";
import co from "../../../../styles/panel/course.module.css"
import axios from 'axios';
import { getItem } from '../../../core/services/storage/storage';
const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};


function Previews(props) {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    // accept: {
    //   'image/*': []
    // },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file , {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const thumbs = files.map(file => (
    <>
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </div>
    </div>
      {file.path} - {file.size} bytes</>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  const [dt,setDt] = useState()
const datafile = async(e)=>{
  
  console.log(e.target.files[0],"event")
  setDt(e.target.files[0])
  let formData = new FormData();
  console.log(dt)
  formData.append('File', dt);
  const config = {     
    headers: { 'content-type': 'multipart/form-data' }
}
const token = getItem("token")

    try{
        const result = await axios.post(`https://skillma-api.shinypi.net/Course/UploadFile`,formData
        ,{config,
          headers: { Authorization: 'bearer '+  token}
          }).then(response => {
                    console.log(response.data.uploadMessage);
                })
    }
    catch(error){
            console.log(error)
    }
// const token = getItem("token")
// axios.post("https://skillma-api.shinypi.net/Course/UploadFile", formData, {config,
// headers: { Authorization: 'bearer '+  token}
// })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(error => {
//         console.log(error);
//     });
}
// const inpu = document.getElementById("inp").value
const inputRef1 = useRef(null);
function handleClick() {
  console.log(inputRef.current.value);
}

const [file, setFile] = useState();
  const inputRef = useRef(null);

  const handleUploadClick = () => {
    // 👇 We redirect the click event onto the hidden input element
    inputRef.current?.click();
  };

  const handleFileChange = (e) => {
    if (!e.target.files) {
      return;
    }

    setFile(e.target.files[0]);

    // 🚩 do the file upload here normally...
  };



  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        {/* <input {...getInputProps()} onChange={(e)=>datafile(e)}  type="file" ref={inputRef} /> */}
        <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
        
        <div className={`${co.uppic}`}>
        <Image src={require(`../../../assets/panel/course/upload2.gif`)} alt=""/>
        <p>Drag & drop <span>Videos</span></p>
        <h6>or <span>Browse videos</span> on your computer</h6>
        <button className={`${co.upBTN}`} onClick={handleUploadClick}>{file ? `${file.name}` : 'Click to select'}</button>
        
      </div>
      <button >Upload</button>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  );
}
export default Previews;
{/* <Previews /> */}