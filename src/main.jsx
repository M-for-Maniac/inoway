import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './i18n';
import './styles/output.css';
import axe from '@axe-core/react';

if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/inoway/' : '/'}>
    <App />
  </BrowserRouter>
);