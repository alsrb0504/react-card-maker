class ImageUploader {
  uploade() {
    fetch('
      https://api.cloudinary.com/v1_1/<cloud name>/<resource_type>/upload',
      {
        method: 'POST',
      })
  }
}