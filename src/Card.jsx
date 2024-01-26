import React from "react";
import { useAppContext } from "./context";
import { Link } from "react-router-dom";

const App = () => {
  const { data, isError, isLoading } = useAppContext();

  if (isLoading) {
    return <div>Fetching data...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  if (data.length === 0) {
    return <div>No movies found.</div>;
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {data.map((movie) => (
          <div
            key={movie.imdbID}
            className="rounded-lg hidden shadow-md hover:shadow-lg transition duration-300 relative mt-4"
          >
            <Link to={`/${movie.imdbID}`}>
              <div className="relative group">
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "/placeholder-image.jpg"
                  }
                  alt={movie.Title}
                  className=" object-cover object-center w-full h-full rounded-t-md group-hover:opacity-75 transition-opacity"
                />
                {movie.Poster === "N/A" && (
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-300">
                    Image Not Available
                  </div>
                )}
              </div>
              <div className="absolute top-0 left-0 right-0 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-xl font-semibold">{movie.Title}</div>
              </div>
              <div className="p-4">
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
