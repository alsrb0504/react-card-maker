import React, { useRef } from 'react';

const ImageFileInput = (props) => {

  const inputRef = useRef();
  const Image = 'No file';

  const handleClick = (event) => {
    // console.log(event);
    inputRef.current.value;
  }

  return(
    <button onClick={handleClick}>
      <input ref={inputRef} type="file" />
      {/* <span>{Image}</span> */}
    </button>
  )
}

export default ImageFileInput;