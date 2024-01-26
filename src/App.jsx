import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
