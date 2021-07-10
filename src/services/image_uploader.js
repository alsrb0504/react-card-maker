class ImageUploader {

  async upload(file) {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "ju3gxefi");

    const response = await fetch(
      'https://api.cloudinary.com/v1_1/dbil9vlga/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    );
    return await response.json();
  }
}

export default ImageUploader;