import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Difficulty from "../Difficulty/index";
import './searchandfilter.scss';

function SearchAndFilter() {
        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState([]);
    
      //     set search query to empty string
        const [q, setQ] = useState("");
        //     set search parameters
        //     we only what to search countries by capital and name
        //     this list can be longer if you want
        //     you can search countries even by their population
        // just add it to this array
    const [searchParam] = useState(["sciName", "name"]);
    
    //     add a default value to be used by our select element
    const [filterParam, setFilterParam] = useState(["All"]);

    useEffect(() => {
axios.get('http://localhost:8080/api/plants')
  .then(function (response) {
      console.log(response.data);
      setIsLoaded(true);
    setItems(response.data);
  })
    .catch(function (error) {
    if (error.response) { // get response with a status code not in range 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) { // no response
      console.log(error.request);
      // instance of XMLHttpRequest in the browser
      // instance ofhttp.ClientRequest in node.js
    } else { // Something wrong in setting up the request
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
}, []);

    function search(items) {
        console.log('item is' + items)
        return items.filter((item) => {
            if (item.category == filterParam) {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            } else if (filterParam == "All") {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            }
        });
    }

        if (error) {
            return <>{error.message}</>;
        } else if (!isLoaded) {
            return <>loading...</>;
        } else {
            
            return (
                /* here we map over the element and display each item as a card  */
                <div className="wrapper">
                     <div className="search">
                        <label htmlFor="search-form">
                            <input
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="search__input"
                                placeholder="Search for..."
                                value={q}
                                /*
                                // set the value of our useState q
                                //  anytime the user types in the search box
                                */
                                onChange={(e) => setQ(e.target.value)}
                            />
                            <span className="sr-only">Search countries here</span>
                        </label>

                         <div className="select">
                        <select
                            /* 
//                         here we create a basic select input
//                     we set the value to the selected value 
//                     and update the setC() state every time onChange is called
                    */
                            onChange={(e) => {
                                setFilterParam(e.target.value);
                            }}
                            className="search__filter"
                            aria-label="Filtrer par catégories"
                        >
                            <option value="All" className="search__filter--focus">Filtrer par catégories</option>
                            <option value="Plein soleil" className="search__filter--focus">Plein soleil</option>
                            <option value="Mi-ombre, mi-soleil" className="search__filter--focus">Mi-ombre, mi-soleil</option>
                        </select>
                        </div>
                    </div>

                    <ul className="plantList">
                        {search(items).map(({id, name, picture, difficulty}) => (
                            <li key={`plant_${id}`}> <Link to={`/plant/${id}`}>
                   <img key={id}
          src={picture}
          alt={name}
        className="plantCard" />
              <h2 className="plantCard__name">{name}</h2>
              <p className="plantCard__difficulty"><Difficulty value={difficulty} /></p>
          </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
}
    
export default SearchAndFilter;