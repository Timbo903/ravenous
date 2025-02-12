import React from "react";

function SearchbarComponent() {
    return(
        <div className="searchbar">
            <div className="inputs">
                <input type="text" placeholder="Seach Businesses"/>
                <input type="text" placeholder="Where?"/> 
            </div>
            
            <button className="submitBtn">Let's Go</button>
        </div>
    )
}

export default SearchbarComponent;