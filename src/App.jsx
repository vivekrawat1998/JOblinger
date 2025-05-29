import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages

import Hompage from "./pages/Hompage";
import Layout from "./ui/Layout";
// Layout & UI Components

import "aos/dist/aos.css";




function App() {


  return (
    <>
      {/* <Loader /> */}
      {/* <ScrollToTop/> */}
      <div
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hompage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
