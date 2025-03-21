import React from "react";
import Moviecard from "../components/Moviecard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Friday", release_date: "1998" },
    { id: 2, title: "Next Friday", release_date: "2000" },
    { id: 3, title: "Friday After Next", release_date: "2006" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <Moviecard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
};

export default Home;
