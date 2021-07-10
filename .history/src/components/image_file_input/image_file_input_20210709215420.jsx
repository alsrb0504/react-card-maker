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

  return(
    <>
        {
          !image &&
          <input onChange={handleClick} ref={inputRef} type="file" />
        }
        {
          image && 
          <button>{image}</button>
        }
    </>

  )
}

export default ImageFileInput;