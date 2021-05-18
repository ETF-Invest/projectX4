import React from 'react';
import ReactDOM from 'react-dom';
import UploadFile from './components/UploadFile';
import {store} from './app/store';
import {Provider} from 'react-redux';
import App from "./App";

ReactDOM.render(
   // <React.StrictMode>
   <Provider store={store}>
      <UploadFile/>
      <App/>
   </Provider>
   // </React.StrictMode>
   , document.getElementById('root')
);
