import React, { useRef, useState } from 'react';

const ImageFileInput = (props) => {

  const [image, setImage] = useState(null);

  const inputRef = useRef();

  const handleClick = (event) => {
    // console.log(event);
    console.log(inputRef.value);
  }

  const Show = (event) => {
    event.preventDefault();
    const fileName = inputRef.current.value.split('\\');
    setImage(`/images/${fileName[2]}`);
  }

  return(
    <>
    <button onClick={handleClick}>
      <input ref={inputRef} type="file" />
      {/* <span>{Image}</span> */}
      {image && 
        <img src={image} alt="이미지" />
      }
    </button>
      <button onClick={Show}>show</button>
    </>

  )
}

export default ImageFileInput;