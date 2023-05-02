import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Navigation(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">            
          <NavLink className="navbar-brand" to="/">Netflix 
          <FontAwesomeIcon icon={faUser} />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/browse">Tv Shows</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/browse">Movies</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/browsebygenre">Browse by Genre</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
}

export default Navigation;