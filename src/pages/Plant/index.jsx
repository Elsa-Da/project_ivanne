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
          
            <Tag>{selectedPlant.tags}</Tag>
          
          </div>
          <h2>( {selectedPlant.sciName} ) - {selectedPlant.origin}</h2>
      </div>

          <div className="plant__body">
              <div className="plant__body--descri"><p><h3>ARROSAGE //</h3><span> arrosage consignes</span></p>
                  <p><h3>LUMINOSITE //</h3><span> luminosité consignes</span></p>
                  <p><h3>SUBSTRAT //</h3><span> substrat consignes</span></p></div>
              
<div className="plant__advice"><p><h3>Les conseils de Bibou ...</h3> Danish tiramisu halvah tart macaroon cake pudding jelly-o tootsie roll. Sugar plum chupa chups gingerbread gummies cupcake jelly candy canes. Cake jelly sugar plum pastry gummies sesame snaps. Chocolate cake cotton candy gingerbread ice cream gummies bonbon shortbread oat cake. Caramels chupa chups lollipop marzipan bonbon sweet roll. Jelly-o pie bear claw gummi bears lollipop sweet jujubes topping tootsie roll. Tart candy canes sugar plum caramels chocolate bar tiramisu fruitcake. Macaroon croissant gummi bears candy canes sugar plum. Chocolate lollipop donut cheesecake muffin carrot cake. Oat cake sweet apple pie fruitcake marzipan macaroon. Chocolate cake sweet muffin pie lemon drops. Cookie gummies candy canes powder cupcake donut powder chocolate bar powder. Carrot cake pudding cookie pie halvah wafer tiramisu jelly beans jujubes.</p></div>
      </div>
    </div></div>
  );
}

export default Plant;