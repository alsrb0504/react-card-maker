import React, { useEffect, useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({name}) => {

  // const handleClick = (event) => {
    // const fileName = inputRef.current.value.split('\\')
    // setImage(`/images/${fileName[2]}`);
    // console.log(fileName);
    // console.log(image);
  // }
  const inputRef = useRef();

  const onButtonClick = () => {

  }

  return(
    <div className={styles.container}>
      <input  ref={inputRef} className={styles.input} type="file" accept="image/*" name="file" />
      <button className={styles.button} onClick={onButtonClick}>{name || 'No file'}</button>
    </div>

  )
}

export default ImageFileInput;