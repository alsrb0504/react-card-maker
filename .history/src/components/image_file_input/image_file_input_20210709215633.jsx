import React, { useEffect, useRef, useState } from 'react';

const ImageFileInput = ({fileURL}) => {

  const [image, setImage] = useState(fileURL);

  const inputRef = useRef();

  const handleClick = (event) => {
    // event.preventDefault();
    const fileName = inputRef.current.value.split('\\');
    setImage(`/images/${fileName[2]}`);
    console.log(fileName);
    console.log(image);
  }


  // button component 안에 파일 이름 or no file이 들어가 있는 것.
  return(
    <>
        {
          !image &&
          <input ref={inputRef} type="file" />
        }
        {
          image && 
          <span>{image}</ㄴ>
        }
    </>

  )
}

export default ImageFileInput;