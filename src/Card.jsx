import React from "react";
import { useAppContext } from "./context";
const App = () => {
  const { data, isError, isLoading } = useAppContext();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="bg-gray-100  p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {data.map((movie) => (
          <div
            key={movie.imdbID}
            className="bg-white rounded overflow-hidden shadow-md hover:shadow-lg transition duration-300"
          >
            <a href={`/${movie.imdbID}`}>
              <div className="p-4">
                <div className="text-xl mb-2">{movie.Title}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
