import React from "react";
import { useAppContext } from "./context";
import { Link } from "react-router-dom";

const App = () => {
  const { data, isError, loading, name } = useAppContext();

  if (loading) {
    return (
      <div className="text-center mt-4">
        <div
          className="spinner-border flex justify-center items-center "
          role="status"
        >
          <span className="visually-hidden text-4xl font-bold text-black">
            Loading.....
          </span>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center mt-4 text-4xl text-red">
        <div>Error loading data. Please try again later.</div>
      </div>
    );
  }

  if (data.length === 0) {
    return <div className="text-center mt-4">No movies found.</div>;
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {data.map((movie) => (
          <div
            key={movie.imdbID}
            className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 relative mt-4"
          >
            <Link to={`/${movie.imdbID}`}>
              <div className="group">
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "/placeholder-image.jpg"
                  }
                  alt={movie.Title}
                  className="object-center rounded-xl w-full rounded-t-md group-hover:opacity-75 transition-opacity"
                  style={{ maxHeight: "28rem" }}
                />
                {movie.Poster === "N/A" && (
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white">
                    Image Not Available
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="text-xl font-semibold mb-2">{movie.Title}</div>
                <p className="text-gray-700">{movie.Plot}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
