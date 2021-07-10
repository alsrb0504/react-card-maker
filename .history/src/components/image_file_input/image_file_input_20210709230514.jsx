import React, { useEffect, useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({name, imageUploader}) => {

  const inputRef = useRef();

  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  }

  const onChange = async (event) => {
    console.log(event.target.files[0])
    const data = await imageUploader.upload(event.target.files[0]);
    // 비동기가 되내...
    console.log(data);
  }

  // fetch가 promise를 반환해서 이건 동기적을 처리
  // 근데 리턴

  return(
    <div className={styles.container}>
      <input  
        ref={inputRef} 
        className={styles.input} 
        type="file" 
        accept="image/*" 
        name="file"
        onChange={onChange}
      />
      <button className={styles.button} onClick={onButtonClick}>{name || 'No file'}</button>
    </div>

  )
}

export default ImageFileInput;