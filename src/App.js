import logo from "./logo.svg";
import "./App.css";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import React, { useState, useRef } from 'react';
import Layout from "./layout/"

const Styles = {
  Wrap: {
    display: "flex",
  },
};
function App() {
  return (
    // serves ads the main layout
    <main style={Styles.Wrap}>
      {/*main content here*/}
      <Layout/>
    </main>
  );
}

export default App;
