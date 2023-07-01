export default class SwapiService {
    #baseApi = 'https://swapi.dev/api/';
    async getResources(url) {
        const request = await fetch(this.#baseApi + url);
        if(!request.ok) {
            throw new Error(`could not fetch api ${url}` )
        }
        const data = await request.json();
        return data;  
    }
  
    async getAllPeople() {
      const allPeople = await this.getResources('people/');
      return allPeople.results.map(this._transformPerson);
    }
  
    async getPerson(id) {
      const person = await this.getResources('people/' + id) 
      return this._transformPerson(person);
    }
    
    async getAllPlanets() {
      const planets = await this.getResources('planets/');
      return planets.results;
    }
  
    async getPlanet(id) {
      const planet = await this.getResources(`planets/${id}`);
      return this._transformPlanet(planet);
    };
  
    async getAllStarships() {
      return (await this.getResources('starships/')).results;
    }
  
    async getStarship(id) {
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



  