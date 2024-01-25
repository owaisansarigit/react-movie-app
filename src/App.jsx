import React from "react";
import Card from "./Card";
import Search from "./Search";
const App = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-4">
        <Search />
        <Card />
      </div>
    </>
  );
};

export default App;
