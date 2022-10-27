import './plantCard.scss';
import Difficulty from '../Difficulty';

function PlantCard({ plant }) {
   
  return (
    <ul>
      <li>
        <img key={plant.id}
          src={plant.picture}
          alt={plant.name}
          plant={plant.plant}
        className="plantCard" />
              <h2 className="plantCard__name">{plant.name}</h2>
              <p className="plantCard__difficulty"><Difficulty value={plant.difficulty} /></p>
      </li>
    </ul>
  );
}

export default PlantCard;
