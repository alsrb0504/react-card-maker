class ImageUploader {

  upload(file) {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "ju3gxefi");

    const result = null;
    fetch(
      'https://api.cloudinary.com/v1_1/dbil9vlga/image/upload',
      {
        method: 'POST',
        body: formData,
      })
    .then(response => {
      console.log(response);
      return (response.json());
    })
    .then(data => {
      console.log(JSON.stringify(data));
      
      console.log(data.url);
    })

    return 
  }
}

export default ImageUploader;