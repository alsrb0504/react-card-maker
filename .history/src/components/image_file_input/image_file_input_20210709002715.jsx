import React, { useRef, useState } from 'react';

const ImageFileInput = (props) => {

  const [image, setImage] = useState(null);

  const formRef = useRef();
  const Image = 'No file';

  const handleClick = (event) => {
    // console.log(event);
    console.log(formRef.value);
  }

  const Show = (event) => {
    event.preventDefault();
    console.log(formRef.current.value)
  }

  return(
    <>
    <form onClick={handleClick}>
      <input ref={formRef} type="file" />
      {/* <span>{Image}</span> */}
    </form>
      <button onClick={Show}>show</button>
    </>

  )
}

export default ImageFileInput;