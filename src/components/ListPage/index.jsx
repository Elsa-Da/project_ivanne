import PlantCard from "../PlantCard";
import { Link } from "react-router-dom";
import './listPage.scss';

const ListPage = ({ searchResults }) => {

    const results = searchResults.map(plant =>  <div key={plant.id}>
          <Link to={`/plant/${plant.id}`}>
                   <PlantCard picture={plant.picture} name={plant.name} id={plant.id} difficulty={plant.difficulty} plant={plant} className="plantList__card"/>
          </Link>
        </div>)

    const content = results?.length ? results : <article><p>No Matching Posts</p></article>

    return (
        <div className="plantList">{content}</div>
    )
}
export default ListPage

