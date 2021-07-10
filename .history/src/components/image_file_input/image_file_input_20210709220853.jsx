import React, { useEffect, useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({name}) => {

  const [image, setImage] = useState(fileURL);

  const inputRef = useRef();

  const handleClick = (event) => {
    const fileName = inputRef.current.value.split('\\')
    setImage(`/images/${fileName[2]}`);
    console.log(fileName);
    console.log(image);
  }
  
  console.log(inputRef);

  // button component 안에 파일 이름 or no file이 들어가 있는 것.
  // 

  return(
    <div className={styles.container}>
        {
          !image &&
          <input ref={inputRef} type="file" accept="image/*" name="file" />
        }
        {
          image && 
        }
    </div>

  )
}

export default ImageFileInput;