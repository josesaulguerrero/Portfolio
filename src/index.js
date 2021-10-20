//libraries and hooks
import React from 'react';
import ReactDOM from 'react-dom';
//assets
import './assets/styles/index.css';
//components
import { App } from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);