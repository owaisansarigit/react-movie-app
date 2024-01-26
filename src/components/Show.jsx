import React, { useEffect, useState } from "react";

const Show = () => {
  const key = "bab4b3d6";
  const [name, setname] = useState(" ");
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    fetchData(name, key);
  }, [name]);

  let fetchData = async (searchName, apiKey) => {
    try {
      setisLoading(true);
      setisError(false);
      let res = await fetch(
        `http://www.omdbapi.com/?s=${searchName}&apikey=${apiKey}`
      );
      let movieData = await res.json();

      if (res.ok) {
        setdata(movieData.Search);
      } else {
        throw new Error(movieData.Error || "Something went wrong");
      }
    } catch (error) {
      setisError(true);
      console.error("Error fetching data:", error.message);
    } finally {
      setisLoading(false);
    }
  };

  let search = async () => {
    await fetchData(name, key);
  };

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <button onClick={search} disabled={isLoading}>
        Search
      </button>

      {isLoading && <div>Loading...</div>}

      {isError && (
        <div style={{ color: "red" }}>Error occurred while fetching data.</div>
      )}

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
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Show;
