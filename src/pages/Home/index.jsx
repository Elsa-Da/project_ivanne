import './home.scss';
import { useState, useEffect } from 'react';
import data from '../../utils/data/data';
import SearchBar from '../../components/SearchBar';
import ListPage from '../../components/ListPage';

function Home() {
  const [plants, setPlants] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setPlants(data)
    setSearchResults(data)
    
  }, [])

  return (<div>
    <div className="homePage">
      <SearchBar plants={plants} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />
    </div></div>
  );
}

export default Home;