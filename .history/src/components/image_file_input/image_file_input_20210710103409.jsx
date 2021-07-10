import React, { useEffect, useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({name, imageUploader, onFileChange}) => {

  const [state, setState] = useState(name);



  const inputRef = useRef();

  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  }

  const onChange = async (event) => {
    console.log(event.target.files[0])
    const uploaded = await imageUploader.upload(event.target.files[0]);
    console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    })
    if(name) {
      setState(styles.pink);
    }
  }

  return(
    <div className={state}>
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