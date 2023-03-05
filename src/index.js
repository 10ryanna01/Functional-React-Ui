import React from 'react';
import ReactDOM from 'react-dom/client'; 
import "./styles/styles.scss";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DarkModeProvider } from './context/DarkModeContext';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
     <Helmet>
        <title>A Simple React Moive DB UI 🦄</title>
      <meta name="description" content="A Simple React Moive DB UI 🦄" />
      </Helmet>
  <React.StrictMode>
    <DarkModeProvider>
    <App />
    </DarkModeProvider>
  </React.StrictMode>
  </HelmetProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
