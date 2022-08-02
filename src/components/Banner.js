import React, { useState, useEffect } from "react";
import instance from "../instance";
import requests from "../request";
import "./Banner.css";


function Banner() {
  const [movie, setMovies] = useState([]);
  async function fetchData() {
    const request = await instance.get(requests.fetchNetflixOriginals);
    setMovies(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]
    );
  }
  useEffect(() => {
    fetchData();
  }, []);

  console.log("Banner movie is ", movie);

  return (
    <header
      className="header"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                'https://image.tmdb.org/t/p/original/${movie.backdrop_path}'
              )`,
        backgroundPosition: "center center",
        height: "800px",
      }}
    ></header>
  );
}
export default Banner;
