import { useParams, Navigate, Link } from 'react-router-dom';
import './plant.scss';
import data from "../../utils/data/data";
import Tag from '../../components/Tags';
import Difficulty from '../../components/Difficulty';

function Plant() {
  const params = useParams();
  const selectedPlant = data.find((plant) => plant.id === params.id);

  if (!selectedPlant) {
    return <Navigate replace to="/error" />;
  }

    let tags = selectedPlant.tags;

  return (
    <div className="plant__container">
    <div className="plant">
      <Link to="/" className="plant__link">Retour à la page d'accueil</Link>
          <div class="plant__banner"><img
            src={selectedPlant.picture}
            alt={`${selectedPlant.name}`}
          /><img
            src={selectedPlant.picture}
            alt={`${selectedPlant.name}`}
          /></div>

      <div className="plant__head">
        <div className="plant__head--info">
          <h1>{selectedPlant.name}</h1>
          <p className="plant__head--difficulty"><Difficulty value={selectedPlant.difficulty} /></p>
          {tags.map((tag, index) => (
            <Tag key={`tag_${index}`}>{tag}</Tag>
          ))}
        </div>

        <div className="plant__head--params">
                      <p>eau</p>
                      <p>soleil</p>
        </div>
      </div>

          <div className="plant__body">
              <div className="plant__body--descri"><p>ARROSAGE //</p>
                  <p>LUMINOSITE //</p>
                  <p>SUBSTRAT //</p></div>
              
<div className="plant__advice"><p></p></div>
      </div>
    </div></div>
  );
}

export default Plant;