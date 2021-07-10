import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

import Auth from './services/auth';
import ImageUploader from './services/image_uploader';
const auth = new Auth();
const imageUploader = new ImageUploader();

ReactDOM.render(
  <React.StrictMode>
    <App auth={auth} />
  </React.StrictMode>,
  document.getElementById('root')
);