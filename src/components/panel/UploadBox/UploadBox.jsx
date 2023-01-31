import Dropzone from 'react-dropzone-uploader'
import { getItem } from '../../../core/services/storage/storage'
import Image from "next/image";
import co from "../../../../styles/panel/course.module.css"
import React, {useEffect, useRef, useState} from 'react';
const Preview = ({ meta }) => {
  const { name, percent, status } = meta
  return (
    <span style={{ alignSelf: 'flex-start', margin: '10px 3%', fontFamily: 'Helvetica' }}>
      {name}, {Math.round(percent)}%, {status}
    </span>
  )
}

const CustomPreview = () => {
  const getUploadParams = ({ file, meta }) => {
    const token = getItem("token")
    const body = new FormData()
    body.append('fileField', file)
    return { url: 'https://skillma-api.shinypi.net/Course/UploadFile', body, headers : {
      'Accept' : 'application/json',
       'Authorization': 'bearer '+  token
    } }
  }

  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onSubmit={handleSubmit}
      PreviewComponent={Preview}
      inputContent="Drop Files (Custom Preview)"
      disabled={files => files.some(f => ['preparing', 'getting_upload_params', 'uploading'].includes(f.meta.status))}
    />
  )
}
<Preview/>
export default CustomPreview