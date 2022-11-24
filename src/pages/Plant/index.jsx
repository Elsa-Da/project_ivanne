import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './plant.scss';
import Tag from '../../components/Tags';
import Difficulty from '../../components/Difficulty';

function Plant() {
  let {id} = useParams();
  
  const [plants, setPlants] = useState([]);

    useEffect(() => {
axios.get(`http://localhost:8080/api/plants/${id}`)
  .then(function (response) {
    console.log(response.data);
    setPlants([response.data]);
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

    return (
      <div className="plant__container">
        <div className="plant">
          <Link to="/" className="plant__link">Retour à la page d'accueil</Link>
          {plants.map(plant => (<div key={plant.name}><div className="plant__banner"><img
            src={plant.picture}
            alt={plant.name}
          /><img
              src={plant.picture}
              alt={plant.name}
            /></div>

          <div className="plant__head">
            <div className="plant__head--info">
              <h1>{plant.name}</h1>
              <p className="plant__head--difficulty"><Difficulty value={plant.difficulty} /></p>
          
              <Tag>{plant.category}</Tag>
          
            </div>
            <h2>{plant.sciName} - {plant.origin}</h2>
          </div>
          

          <div className="plant__body">
            <div className="plant__body--descri"><h3>ARROSAGE //</h3><span> {plant.watering}</span><br />
              <h3>LUMINOSITE //</h3><span> {plant.sunshine}</span><br />
              <h3>SUBSTRAT //</h3><span> {plant.substrate}</span><br /></div>
              
            <div className="plant__advice"><h3>Les conseils de Bibou ...</h3> <p>{plant.advice}</p></div>
          </div>
        </div>))}</div></div>
    );
  }


export default Plant;