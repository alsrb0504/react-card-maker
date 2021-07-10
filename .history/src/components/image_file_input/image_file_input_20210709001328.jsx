import React from 'react';

const ImageFileInput = (props) => {
  
  const Image = 'No file';

  const handleClick = (event) => {
    event.preventDefault();
    console.log(event);
  }

  return(
    <button onClick={handleClick}>{Image}</button>
  )
}

export default ImageFileInput;