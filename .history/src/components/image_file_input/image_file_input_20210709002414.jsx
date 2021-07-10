import React, { useRef, useState } from 'react';

const ImageFileInput = (props) => {

  const [image, setImage] = useState(null);

  const inputRef = useRef();
  const Image = 'No file';

  const handleClick = (event) => {
    // console.log(event);
    console.log(inputRef.value);
  }

  const Show = (event) => {
    event.preventDefault();
    console.log(inputRef.current)
  }

  return(
    <>
    <button onClick={handleClick}>
      <input ref={inputRef} type="file" />
      {/* <span>{Image}</span> */}
    </button>
      <button onClick={Show}>show</button>
    </>

  )
}

export default ImageFileInput;