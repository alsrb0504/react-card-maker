import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Auth from './services/auth';
import ImageUploader from './services/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import CardRepository from './services/card_repository';

const auth = new Auth();
const imageUploader = new ImageUploader();
const cardRepository = new CardRepository();
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