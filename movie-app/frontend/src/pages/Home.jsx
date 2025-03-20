import React from "react";
import Moviecard from "../components/Moviecard";

const Home = () => {
  const movies = [
    { id: 1, title: "Friday", release_date: "1998" },
    { id: 2, title: "Next Friday", release_date: "2000" },
    { id: 3, title: "Friday After Next", release_date: "2006" },
  ];

  const handleSearch = () => {
    console.log("Searching for movies....");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <Moviecard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
