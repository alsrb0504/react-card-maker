class ImageUploader {

  upload(file) {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "ju3gxefi");

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
    })
  }
}

export default ImageUploader;