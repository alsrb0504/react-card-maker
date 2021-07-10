import React, { useEffect, useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({imageUploader}) => {

  const inputRef = useRef();

  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  }

  const onChange = async (event) => {
    console.log(event.target.files[0])
    const uploaded = await imageUploader.upload(event.target.files[0]);
    console.log(uploaded.url);
  }

  return(
    <h1>gi</h1>
    // <div className={styles.container}>
    //   <input  
    //     ref={inputRef} 
    //     className={styles.input} 
    //     type="file" 
    //     accept="image/*" 
    //     name="file"
    //     onChange={onChange}
    //   />
    //   <button className={styles.button} onClick={onButtonClick}>{'hi' || 'No file'}</button>
    // </div>

  )
}

export default ImageFileInput;