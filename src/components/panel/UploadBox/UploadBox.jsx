import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import Image from "next/image";
import co from "../../../../styles/panel/course.module.css"
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

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <div className={`${co.uppic}`}>
        <Image src={require(`../../../assets/panel/course/upload2.gif`)} alt=""/>
        <p>Drag & drop <span>Videos</span></p>
        <h6>or <span>Browse videos</span> on your computer</h6>
        <button className={`${co.upBTN}`}>Upload</button>
      </div>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  );
}
export default Previews;
{/* <Previews /> */}