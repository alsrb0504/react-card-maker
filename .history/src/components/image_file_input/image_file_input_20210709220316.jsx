import React, { useEffect, useRef, useState } from 'react';

const ImageFileInput = ({fileURL}) => {

  const [image, setImage] = useState(fileURL);

  const inputRef = useRef();

  const handleClick = (event) => {
    const fileName = inputRef.current.value.split('\\')
    setImage(`/images/${fileName[2]}`);
    console.log(fileName);
    console.log(image);
  }


  // button component 안에 파일 이름 or no file이 들어가 있는 것.
  // 

  return(
    <button >
        {
          !image &&
          <input ref={inputRef} type="file" />
        }
        {
          image && 
          <spa onClick={handleClick}>{image}</spa>
        }
    </button>

  )
}

export default ImageFileInput;