// import SplashCursor from "./components/SplashCursor"; 
// import Home from "./components/Home";

// function App() {
//   return (
//     <>
//       <SplashCursor /> 
//        <Home />
//     </>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";

import SplashCursor from "./components/SplashCursor";
import Home from "./components/Home";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <>
      <SplashCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
    </>
  );
}

export default App;
