const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Star DB</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <a className="nav-link" href="#">Planets</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Persons</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Starships</a>
                    </li>
                </ul>

                </div>
            </div>
            </nav>
    );
}

export default Header;