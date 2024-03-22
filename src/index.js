// import "./index.css";
import './style/main.scss';

import React from 'react';

import ReactDOM from 'react-dom/client';

import {
  ChakraProvider,
  ColorModeScript,
} from '@chakra-ui/react';

import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './theme.js';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
