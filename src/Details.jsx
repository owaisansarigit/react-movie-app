import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Details = () => {
  const apiKey = "bab4b3d6";
  const [singleMovie, setSingleMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        let res = await fetch(
          `http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`
        );
        let data = await res.json();

        if (res.ok) {
          setSingleMovie(data);
        } else {
          console.error("Error fetching movie details:", data.Error);
        }
      } catch (error) {
        console.error("Error fetching movie details:", error.message);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <>
      <div className="h-screen flex w-full justify-center items-center bg-gradient-to-r from-blue-100 to-pink-100">
        {loading ? (
          <p className="font-bold text-3xl">Loading...</p>
        ) : (
          <div className=" flex justify-center item-center ">
            <div className=" mx-auto my-auto rounded-xl overflow-hidden shadow-lg flex p-5">
              <img
                className="  object-cover object-center rounded-xl"
                src={singleMovie.Poster}
                alt={singleMovie.Title}
              />

              <div className="w-1/2 px-6 py-4">
                <h3 className="font-bold text-xl mb-2">{singleMovie.Title}</h3>
                <p className="text-gray-700 text-base">{singleMovie.Plot}</p>

                {/* Other movie details */}
                <div className="mt-4">
                  <p>
                    <strong>Actors:</strong> {singleMovie.Actors}
                  </p>
                  <p>
                    <strong>Awards:</strong> {singleMovie.Awards}
                  </p>
                  <p>
                    <strong>Box Office:</strong> {singleMovie.BoxOffice}
                  </p>
                  <p>
                    <strong>Country:</strong> {singleMovie.Country}
                  </p>
                  <p>
                    <strong>Runtime:</strong> {singleMovie.Runtime}
                  </p>
                  <p>
                    <strong>Rated:</strong> {singleMovie.Rated}
                  </p>
                  <p className="mb-6">
                    <strong>Ratings:</strong>
                    {singleMovie.Ratings.map((rating, index) => (
                      <span key={index} className="ml-2">
                        {rating.Source}: {rating.Value}
                      </span>
                    ))}
                  </p>
                  <Link
                    to="/"
                    className="relative left-4  bg-blue-500 text-white py-2 px-4 rounded-full"
                  >
                    Go Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Details;
