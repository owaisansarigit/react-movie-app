import React from "react";
import { useAppContext } from "./context";
import { Link } from "react-router-dom";

const App = () => {
  const { data, isError, isLoading } = useAppContext();

  if (isLoading) {
    return (
      <div className="text-center mt-4">
        Fetching data...{" "}
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center mt-4">
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
                  className="object-cover object-center w-full h-48 md:h-64 rounded-t-md group-hover:opacity-75 transition-opacity"
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
