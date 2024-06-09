import React from "react";
import {Link} from 'react-router-dom'
import "./Nav.css"


const Nav = ({colors}) => {
    return(
        <nav className="navBar">
            {colors.map(color=> (
                <p
                    key={color.name}>
                        <Link to={`/colors/${color.name.toLowerCase()}`}>{color.name}</Link>
                </p>
            ))}
        </nav>
    )
}


export default Nav
