import React, { useEffect, useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({name, imageUploader, onFileChange}) => {

  const [state, setState] = useState(null);

  const inputRef = useRef();

  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  }

  const onChange = async (event) => {
    const uploaded = await imageUploader.upload(event.target.files[0]);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    })
    setState(`styles.pink`)
    .then(() => console.log(state);
  }

  return(
    <div className={`${styles.container} ${state}`}>
      <input  
        ref={inputRef} 
        className={styles.input} 
        type="file" 
        accept="image/*" 
        name="file"
        onChange={onChange}
      />
      <button className={styles.button} onClick={onButtonClick}>{name || 'No file'}</button>
    </div>

  )
}

export default ImageFileInput;