import { Link } from 'react-router-dom';
import './header.scss';

function Header() {
  return (<div>
    <div className="header">
      <h1><Link to={`/`}>Les conseils de Bibou</Link></h1></div></div>
  );
}

export default Header;