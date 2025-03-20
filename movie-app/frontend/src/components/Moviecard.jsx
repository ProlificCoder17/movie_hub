import React from "react";

function Moviecard({ movie }) {
  function onFavoriteClick() {
    console.log("Button Clicked!!");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <p>{movie.title}</p>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default Moviecard;
