export default class SwapiService {
    #baseApi = 'https://swapi.dev/api/';
    _baseImage = 'https://starwars-visualguide.com/assets/img/';

    getResources = async(url) => {
        const request = await fetch(this.#baseApi + url);
        if(!request.ok) {
            throw new Error(`could not fetch api ${url}` )
        }
        const data = await request.json();
        return data;  
    }
  
    getAllPeople = async() => {
      const allPeople = await this.getResources('people/');
      return allPeople.results.map(this._transformPerson);
    }
  
    getPerson = async(id) => {
      const person = await this.getResources('people/' + id) 
      return this._transformPerson(person);
    }
    
    getAllPlanets= async() => {
      const planets = await this.getResources('planets/');
      return planets.results.map(this._transformPlanet);
    }
  
    getPlanet = async(id) => {
      const planet = await this.getResources(`planets/${id}`);
      return this._transformPlanet(planet);
    };
  
    getAllStarships = async() => {
      const startships = await this.getResources('starships/'); 
      return startships.results.map(this._transformStartship);
    }
  
    getStarship = (id) => {
      return this.getResources('starships/' + id);
    }

    getPersonImage = ({id}) => {
      return (`${this._baseImage}characters/${id}.jpg`);
    }

    getStartshipImage = ({id}) => {
      return (`${this._baseImage}starships/${id}.jpg`);
    }

    getPlanetImage = ({id}) => {
      return (`${this._baseImage}planets/${id}.jpg`);
    }



    _extractId = (item) => {
      const idRegExp = /\/([0-9]*)\/$/;
      return  item.url.match(idRegExp)[1];
    }
    
    _transformPlanet = (planet) => {
      return {
        id: this._extractId(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter,
      }
    }

     _transformPerson = (person) => {
      return {
        id: this._extractId(person),
        name: person.name,
        eyeColor: person.eye_color,
        gender: person.gender,
        birthYear: person.birth_year,
      }
    }

    _transformStartship = (startship) => {
      return {
        id: this._extractId(startship),
        name: startship.name,
        model: startship.model,
        passengers: startship.passengers,
        length: startship.length,
      }
    }
  };



  