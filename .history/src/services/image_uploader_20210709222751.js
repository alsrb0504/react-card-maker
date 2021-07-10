class ImageUploader {

  uploade(file) {

    const formData = {
      "file": file,
      "upload_preset": "ju3gxefi",
    }

    fetch(
      'https://api.cloudinary.com/v1_1/dbil9vlga/image/upload',
      {
        method: 'POST',
        formData,
      })
    .then(response => console.log(response.json()))
  }
}

export default ImageUploader;