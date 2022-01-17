import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Photo from "./components/Photo";
import "./App.css";

function App() {
  const data = Photo();
  console.log(data)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photo" element={<Photo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
