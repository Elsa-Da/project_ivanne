import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './plant.scss';
import Tag from '../../components/Tags';
import Difficulty from '../../components/Difficulty';

function Plant() {
  const params = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/plant/${params}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {

    return (
      <div className="plant__container">
        <div className="plant">
          <Link to="/" className="plant__link">Retour à la page d'accueil</Link>
          {/* <div className="plant__banner"><img
            src={picture}
            alt={name}
          /><img
              src={picture}
              alt={name}
            /></div>

          <div className="plant__head">
            <div className="plant__head--info">
              <h1>{name}</h1>
              <p className="plant__head--difficulty"><Difficulty value={difficulty} /></p>
          
              <Tag>{tags}</Tag>
          
            </div>
            <h2>{sciName} - {origin}</h2>
          </div> */}

          <div className="plant__body">
            <div className="plant__body--descri"><p><h3>ARROSAGE //</h3><span> arrosage consignes</span></p>
              <h3>LUMINOSITE //</h3><span> luminosité consignes</span>
              <h3>SUBSTRAT //</h3><span> substrat consignes</span></div>
              
            <div className="plant__advice"><p><h3>Les conseils de Bibou ...</h3> Danish tiramisu halvah tart macaroon cake pudding jelly-o tootsie roll. Sugar plum chupa chups gingerbread gummies cupcake jelly candy canes. Cake jelly sugar plum pastry gummies sesame snaps. Chocolate cake cotton candy gingerbread ice cream gummies bonbon shortbread oat cake. Caramels chupa chups lollipop marzipan bonbon sweet roll. Jelly-o pie bear claw gummi bears lollipop sweet jujubes topping tootsie roll. Tart candy canes sugar plum caramels chocolate bar tiramisu fruitcake. Macaroon croissant gummi bears candy canes sugar plum. Chocolate lollipop donut cheesecake muffin carrot cake. Oat cake sweet apple pie fruitcake marzipan macaroon. Chocolate cake sweet muffin pie lemon drops. Cookie gummies candy canes powder cupcake donut powder chocolate bar powder. Carrot cake pudding cookie pie halvah wafer tiramisu jelly beans jujubes.</p></div>
          </div>
        </div></div>
    );
  }
}

export default Plant;