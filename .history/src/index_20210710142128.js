import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Auth from './services/auth';
import ImageUploader from './services/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';

const auth = new Auth();
const imageUploader = new ImageUploader();
const FileInput = props => (
  <ImageFileInput {...props} imageUploader={imageUploader}/>
)

ReactDOM.render(
  <React.StrictMode>
    <App 
      FileInput={FileInput} 
      auth={auth} 
      cardRepository={cardRepository
    />
  </React.StrictMode>,
  document.getElementById('root')
);