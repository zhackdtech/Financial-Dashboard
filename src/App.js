import logo from "./logo.svg";
import "./App.css";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import React, { useState, useRef } from 'react';
import Layout from "./layout/"
import "./styles/main.scss";

const Styles = {
  Wrap: {
    display: "flex",
  },
};
function App({ Component, pageProps }) {
  return (
    <PrimeReactProvider>
    <main style={Styles.Wrap}>
      {/*main content here*/}
      <Layout/>
    </main>
        </PrimeReactProvider>
  );
}

export default App;
