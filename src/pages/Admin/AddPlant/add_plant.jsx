import { Component } from "react";
import PlantDataService from "../../../services/plant.service.js";
import './add_plant.scss';

export default class AddPlant extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeSciName = this.onChangeSciName.bind(this);
    this.onChangeOrigin = this.onChangeOrigin.bind(this);
    this.onChangePicture = this.onChangePicture.bind(this);
    this.onChangeDifficulty = this.onChangeDifficulty.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeWatering = this.onChangeWatering.bind(this);
    this.onChangeSunshine = this.onChangeSunshine.bind(this);
    this.onChangeSubstrate = this.onChangeSubstrate.bind(this);
    this.onChangeAdvice = this.onChangeAdvice.bind(this);
    this.savePlant = this.savePlant.bind(this);
    this.newPlant = this.newPlant.bind(this);

    this.state = {
      id: null,
      name: "",
        sciName: "", 
        origin: "", 
        picture: "", 
        difficulty: "", 
        category: "", 
        watering: "", 
        sunshine: "", 
        substrate: "", 
        advice: ""
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeSciName(e) {
    this.setState({
      sciName: e.target.value
    });
    }
    
     onChangeOrigin(e) {
    this.setState({
      origin: e.target.value
    });
    }
    
     onChangePicture(e) {
    this.setState({
      picture: e.target.value
    });
    }
    
     onChangeDifficulty(e) {
    this.setState({
      difficulty: e.target.value
    });
    }
    
     onChangeCategory(e) {
    this.setState({
      category: e.target.value
    });
    }
    
     onChangeWatering(e) {
    this.setState({
      watering: e.target.value
    });
    }
    
     onChangeSunshine(e) {
    this.setState({
      sunshine: e.target.value
    });
    }
    
     onChangeSubstrate(e) {
    this.setState({
      substrate: e.target.value
    });
    }
    
     onChangeAdvice(e) {
    this.setState({
      advice: e.target.value
    });
  }

  savePlant() {
    var data = {
      name: this.state.name,
        sciName: this.state.sciName, 
        origin: this.state.origin, 
        picture: this.state.picture, 
        difficulty: this.state.difficulty, 
        category: this.state.category, 
        watering: this.state.watering, 
        sunshine: this.state.sunshine, 
        substrate: this.state.substrate, 
        advice: this.state.advice
    };

    PlantDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          sciName: response.data.sciName, 
        origin: response.data.origin, 
        picture: response.data.picture, 
        difficulty: response.data.difficulty, 
        category: response.data.category, 
        watering: response.data.watering, 
        sunshine: response.data.sunshine, 
        substrate: response.data.substrate, 
        advice: response.data.advice
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newPlant() {
    this.setState({
      id: null,
      name: "",
        sciName: "", 
        origin: "", 
        picture: "", 
        difficulty: "", 
        category: "", 
        watering: "", 
        sunshine: "", 
        substrate: "", 
        advice: ""
    });
  }

   render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div className="formPage">
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newPlant}>
              Add
            </button>
          </div>
            ) : (
                <div className="formPage">
                      <div className="formPage__field">
              <label htmlFor="name">Nom de la plante</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              /></div>
                        
                      
            <div className="formPage__field">
              <label htmlFor="sciName">Nom scientifique de la plante</label>
              <input
                type="text"
                className="form-control"
                id="sciName"
                value={this.state.sciName}
                onChange={this.onChangeSciName}
                name="sciName"
              />     </div>
                        
            <div className="formPage__field">
              <label htmlFor="origin">Origine de la plante</label>
              <input
                type="text"
                className="form-control"
                id="origin"
                required
                value={this.state.origin}
                onChange={this.onChangeOrigin}
                name="origin"
              />
                        </div>

            <div className="formPage__field">
              <label htmlFor="picture">URL de photo de la plante</label>
              <input
                type="text"
                className="form-control"
                id="picture"
                required
                value={this.state.picture}
                onChange={this.onChangePicture}
                name="picture"
              />
                        </div>
                        
                          <div className="formPage__field">
              <label htmlFor="difficulty">Difficulté de la plante</label>
              <input
                type="number"
                className="form-control"
                  id="difficulty"
                  min="1"
                  max="3"
                required
                value={this.state.difficulty}
                onChange={this.onChangeDifficulty}
                name="difficulty"
              />
                        </div>

                          <div className="formPage__field">
              <label htmlFor="category">Catégorie de la plante</label>
              <input
                type="text"
                className="form-control"
                id="category"
                required
                value={this.state.category}
                onChange={this.onChangeCategory}
                name="category"
              />
                        </div>

                          <div className="formPage__field">
              <label htmlFor="watering">Conseils d'arrosage</label>
              <textarea
                className="form-control"
                id="watering"
                required
                value={this.state.watering}
                onChange={this.onChangeWatering}
                name="watering"
              />
                        </div>

                          <div className="formPage__field">
              <label htmlFor="sunshine">Conseils d'ensoleillement</label>
              <textarea
                className="form-control"
                id="sunshine"
                required
                value={this.state.sunshine}
                onChange={this.onChangeSunshine}
                name="sunshine"
              />
                        </div>

                          <div className="formPage__field">
              <label htmlFor="substrate">Conseils sur le substrat</label>
              <textarea
                className="form-control"
                id="substrate"
                required
                value={this.state.substrate}
                onChange={this.onChangeSubstrate}
                name="substrate"
              />
                        </div>

                          <div className="formPage__field">
              <label htmlFor="advice">Conseils généraux sur la plante</label>
              <textarea
                className="form-control"
                id="advice"
                required
                value={this.state.advice}
                onChange={this.onChangeAdvice}
                name="advice"
              />
                        </div>

            <button onClick={this.savePlant} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }

}
