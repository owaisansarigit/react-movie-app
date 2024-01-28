import React from "react";
import Search from "./Search";
import Card from "./Card";
const Home = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-r from-blue-300 to-purple-300">
      <Search />
      <Card />
    </div>
  );
};

export default Home;
