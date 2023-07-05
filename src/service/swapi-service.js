export default class SwapiService {
    #baseApi = 'https://swapi.dev/api/';
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
      return planets.results;
    }
  
    getPlanet = async(id) => {
      const planet = await this.getResources(`planets/${id}`);
      return this._transformPlanet(planet);
    };
  
    getAllStarships = async() => {
      return (await this.getResources('starships/')).results;
    }
  
    getStarship = async(id) => {
      return await this.getResources('starships/' + id);
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
  };



  