import React, { useEffect, useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({name, imageUploader, onFileChange}) => {

  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  }

  const onChange = async (event) => {
    setLoading(true);
    console.log(loading);
    const uploaded = await imageUploader.upload(event.target.files[0])
    .then(() => {setLoading(true);
    console.log(loading);
    })

    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    })
  }

  return(
    <div className={styles.container}>
      <input  
        ref={inputRef} 
        className={styles.input} 
        type="file" 
        accept="image/*" 
        name="file"
        onChange={onChange}
      />
      {!loading &&
        <button className={styles.button} onClick={onButtonClick}>{name || 'No file'}</button>
      }
      { loading && <div className={styles.loading}> hi</div> }
    </div>

  )
}

export default ImageFileInput;