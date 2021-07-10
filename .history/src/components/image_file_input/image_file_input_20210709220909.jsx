import React, { useEffect, useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({name}) => {

  const handleClick = (event) => {
    const fileName = inputRef.current.value.split('\\')
    setImage(`/images/${fileName[2]}`);
    console.log(fileName);
    console.log(image);
  }
  

  // button component 안에 파일 이름 or no file이 들어가 있는 것.
  // 

  return(
    <div className={styles.container}>
        {
          !image &&
          <input type="file" accept="image/*" name="file" />
        }
        {
          image && 
        }
    </div>

  )
}

export default ImageFileInput;