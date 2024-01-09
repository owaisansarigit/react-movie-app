import React, { useEffect, useState } from "react";

const App = () => {
  let key = "bab4b3d6";
  const [name, setname] = useState("");
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetchData(name, key);
  }, []);

  let fetchData = async (name, key) => {
    let res = await fetch(`http://www.omdbapi.com/?s=${name}&apikey=${key}`);
    let movieData = await res.json();
    setdata(movieData.Search);
  };

  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          fetchData(name, key);
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <button>Search</button>
      </form>
      {data.map((movie) => (
        <div key={movie.imdbID}>
          <div>Name: {movie.Title}</div>
          <div>Year: {movie.Year}</div>
          <div>ID: {movie.imdbID}</div>
          <div>
            Poster:{" "}
            <a href={movie.Poster} target="_blank" rel="noopener noreferrer">
              Link
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default App;
