const PlanetContent = ({planet}) => {
    const { id, name, population, rotationPeriod, diameter } = planet;
    return (
        <>
        <div className="random-planet-img">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='random planet img'/>
        </div>
        <div className="random-planet-item flex-grow-1">
            <h5>{name}</h5>
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Population: 
                    <span className="badge bg-primary rounded-pill">{population}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Rotation Period: 
                    <span className="badge bg-primary rounded-pill">{rotationPeriod}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Daimater: 
                    <span className="badge bg-primary rounded-pill">{diameter}</span>
                </li>
            </ul>
        </div>
        </>
    );
}

export default PlanetContent;