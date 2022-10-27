import './searchBar.scss';
import searchIco from '../../assets/searchIco.png'

function SearchBar({plants, setSearchResults}) {
    const handleSubmit = (e) => e.preventDefault();
    const handleSearchChange = (e) => {
        // if input empty
        if (!e.target.value) return setSearchResults(plants)
         const resultsArray = plants.filter(plant => plant.name.toLowerCase().includes(e.target.value.toLowerCase()) || plant.sciName.toLowerCase().includes(e.target.value.toLowerCase()))

        setSearchResults(resultsArray)
    }

    return (
        <div><form className="search" onSubmit={handleSubmit}>
            <input className="search__input" type="text" id="search" onChange={handleSearchChange} placeholder="Recherchez votre plante préférée !"/>
            <button className="search__button"><img src={searchIco} alt="recherchez"/></button></form></div>
    
    );
}

export default SearchBar;