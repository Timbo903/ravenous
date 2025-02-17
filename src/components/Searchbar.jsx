import React, { useState } from "react";

function SearchbarComponent({ onSearch }) {
  const [business, setBusiness] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      console.log("Business:", business);
      console.log("Location:", location);
      onSearch(business, location);
    }
  };

  return (
    <div className="searchbar">
      <div className="filter">
        <div className="best-mach">
          <h2>
            Best
            <br />
            Mach
          </h2>
        </div>
        <div className="higest-rated">
          <h2>
            Highest
            <br />
            Rated
          </h2>
        </div>
        <div className="most-reviewed">
          <h2>
            Most
            <br />
            Reviewed
          </h2>
        </div>
      </div>
      <div className="inputs">
        <input
          type="text"
          placeholder="Seach Businesses"
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
        />
        <input
          type="text"
          placeholder="Where?"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <button className="submitBtn" onClick={handleSearch}>
        Let's Go
      </button>
    </div>
  );
}

export default SearchbarComponent;
