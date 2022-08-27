import React, { useState } from 'react';
import Axios from 'axios';

export default function Uploader(){

  const [files, setFiles]= useState(null)

  function handleFile(e){
    let file = e.target.files[0]
    setFiles(file)
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData()

    data.append('file', file)

    Axios.post('//localhost:5000/upload', data)
        .then((response)=> {
            alert('Success') // he adds the toast here and below 

        })
        .catch((e) => {
            alert('Error', e)
        })

  }

}

// Also Check: https://surajsharma.net/blog/react-upload-file-using-axios