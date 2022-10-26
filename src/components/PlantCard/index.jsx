import './plantCard.scss';
import Difficulty from '../Difficulty';

function PlantCard({ id, name, picture, difficulty }) {
   
  return (
    <ul>
      <li>
        <img key={id}
          src={picture}
          alt={name}
        className="plantCard" />
              <h2 className="plantCard__name">{name}</h2>
              <p className="plantCard__difficulty"><Difficulty value={difficulty} /></p>
      </li>
    </ul>
  );
}

export default PlantCard;
