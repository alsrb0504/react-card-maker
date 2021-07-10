import React, { useEffect, useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({name}) => {

  const inputRef = useRef();

  const onButtonClick = () => {
    inputRef.current.click();
  }

  const onChange = (event) => {
    console.log("hi");
    console.log(inputRef.current.value);
  }

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