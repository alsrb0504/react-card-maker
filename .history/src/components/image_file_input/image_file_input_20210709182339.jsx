import React, { useRef, useState } from 'react';

const ImageFileInput = (props) => {

  const [image, setImage] = useState(null);

  const formRef = useRef();

  const handleClick = (event) => {
    // console.log(event);
    console.log(formRef.value);
  }

  const Show = (event) => {
    event.preventDefault();
    console.log(formRef.current.value)
    setImage(formRef.current.value);
    console.log(formRef.current)
    console.log(image);
    // C:\fakepath\1.jpg 에서
    // '/images/1.jpg'
  }

  return(
    <>
    <button onClick={handleClick}>
      <input ref={formRef} type="file" />
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