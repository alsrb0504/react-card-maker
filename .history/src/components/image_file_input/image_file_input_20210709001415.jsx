import React from 'react';

const ImageFileInput = (props) => {
  
  const Image = 'No file';

  const handleClick = (event) => {
    // event.preventDefault();
    console.log(event);
  }

  return(
    <button onClick={handleClick}>
      <input type="file" />
      {/* <span>{Image}</span> */}
    </button>
  )
}

export default ImageFileInput;