import React, { useRef, useState } from 'react';

const ImageFileInput = (props) => {

  const [image, setImage] = useState(null);

  const inputRef = useRef();
  const Image = 'No file';

  const handleClick = (event) => {
    // console.log(event);
    console.log(inputRef.value);
  }

  const Show = () => {
    console.log(inputRef.value)
  }

  return(
    <button onClick={handleClick}>
      <input ref={inputRef} type="file" />
      {/* <span>{Image}</span> */}
    </button>
      <div onClick={Show}>show</div>

  )
}

export default ImageFileInput;