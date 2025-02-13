import React from "react";

function SearchbarComponent() {
    return(
        <div className="searchbar">
            <div className="filter">
                <div className="best-mach">
                    <h2>Best<br />Mach</h2>
                </div>
                <div className="higest-rated">
                    <h2>Highest<br />Rated</h2>
                </div>
                <div className="most-reviewed">
                    <h2>Most<br />Reviewed</h2>
                </div>
            </div>
            <div className="inputs">
                <input type="text" placeholder="Seach Businesses"/>
                <input type="text" placeholder="Where?"/> 
            </div>
            
            <button className="submitBtn">Let's Go</button>
        </div>
    )
}

export default SearchbarComponent;