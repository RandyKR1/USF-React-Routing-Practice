import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

function Nav({ dogs }) {
  return (
    <nav className="navBar">
      
        {dogs.map(dog => (
          <h3 key={dog.name}>
            <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
          </h3>
        ))}
      
    </nav>
  );
}

export default Nav;
