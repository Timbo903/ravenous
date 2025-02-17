import "./App.css";
import BusinessList from "./components/BusinessList";
import SearchbarComponent from "./components/Searchbar";

function App() {
  const handleSearch = (business, location) => {
    console.log("Search result:", business, location);
  };
  return (
    <div>
      <div className="header">
        <h2>ravenous</h2>
      </div>
      <SearchbarComponent onSearch={handleSearch} />
      <BusinessList />
    </div>
  );
}

export default App;
