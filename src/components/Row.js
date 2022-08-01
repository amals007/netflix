import React, { useState, useEffect } from "react";
import instance from "../instance";
import "./Row.css";

const imageUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  async function fetchData() {
    const request = await instance.get(fetchUrl);
    setMovies(request.data.results);
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log(movies);

  return (
    <div>
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className="row__poster"
            src={`${imageUrl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
