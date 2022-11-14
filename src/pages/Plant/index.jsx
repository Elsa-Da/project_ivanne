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
fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/api/plant/${id}`);
      console.log(data);
      setPlants([data]);
      
    } catch (error) {
      console.log(error.response);
    }
  }

 
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