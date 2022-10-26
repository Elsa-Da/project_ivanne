import { Link } from 'react-router-dom';
import data from "../../utils/data/data";
import PlantCard from '../PlantCard';
import './plantList.scss';

function PlantList() {
  return (
    <div className="plantList">
      {data.map(({ id, name, picture, difficulty }) => (
        <div key={`location_${id}`}>
          <Link to={`/plant/${id}`}>
                  <PlantCard picture={picture} name={name} id={id} difficulty={difficulty} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PlantList;