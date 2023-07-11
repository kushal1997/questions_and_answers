import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './mona.css'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ScrollToTop } from './components/others/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
        <App />

    </Router>
  </React.StrictMode>
);