//libraries and hooks
import React from 'react';
import ReactDOM from 'react-dom';
// context
import { ThemeContextProvider } from './context/ThemeContext';
//assets
import './assets/styles/index.css';
import './assets/styles/Text.css';
import './assets/styles/ScrollBar.css';
//components
import { App } from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);