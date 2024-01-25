import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
