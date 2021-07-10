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

  useEffect(()=>{
    console.log('useEffect');
  }, [image])

  const Show = (event) => {
    
  }


  return(
    <>
    <button onClick={handleClick}>
      <input ref={inputRef} type="file" />
      {
        !image &&
        <button>no File</button>
      }
      {image && 
        <img src={image} alt="이미지" />
      }
    </button>
      <button onClick={Show}>show</button>
    </>

  )
}

export default ImageFileInput;