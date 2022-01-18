import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ImageList from "./components/ImageList";
import "./App.css";

function App() {
  const data = ImageList();
  console.log(data)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/images" element={<ImageList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
