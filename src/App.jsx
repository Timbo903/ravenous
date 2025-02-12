import './App.css'
import BusinessList from './components/BusinessList'
import SearchbarComponent from './components/Searchbar'

function App() {
  return (
    <div>
      <div className="header"><h2>ravenous</h2></div>
      <SearchbarComponent />
      <BusinessList />
    </div>
    
  )
}

export default App
