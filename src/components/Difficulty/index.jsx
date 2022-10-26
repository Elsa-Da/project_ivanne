import './difficulty.scss';
import leafOn from "../../assets/leafOn.png";
import leafOff from "../../assets/leafOff.png";

function Difficulty(plant) {
     switch (plant.value) {
    case 1:
            return (<span><img src={leafOn} alt="1/3 difficulté" className="leaf" />
                <img src={leafOff} alt="1/3 difficulté" className="leaf" />
                <img src={leafOff} alt="1/3 difficulté" className="leaf" /></span>);
        case 2:
            return (<span><img src={leafOn} alt="2/3 difficulté" className="leaf" />
                <img src={leafOn} alt="2/3 difficulté" className="leaf" />
                <img src={leafOff} alt="2/3 difficulté" className="leaf" /></span>);
        case 3:
            return (<span><img src={leafOn} alt="3/3 difficulté" className="leaf" />
                <img src={leafOn} alt="3/3 difficulté" className="leaf" />
            <img src={leafOn} alt="3/3 difficulté" className="leaf" /></span>);
}
}

export default Difficulty