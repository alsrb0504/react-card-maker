class ImageUploader {

  upload(file) {


    fetch(
      'https://api.cloudinary.com/v1_1/dbil9vlga/image/upload',
      {
        method: 'POST',
        body: {
          file,
          upload_preset: "ju3gxefi",
        }
      })
    .then(response => console.log(response.json()))
  }
}

export default ImageUploader;