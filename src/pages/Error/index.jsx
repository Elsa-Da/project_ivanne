import './error.scss';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="error">
      <h1>404</h1>
      <p className="error__description">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error__link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;