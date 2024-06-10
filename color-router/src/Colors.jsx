import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "./Colors.css"
import NewColorForm from './NewColorForm'

const Colors = ({ newColors }) => {
    return (
        <>
        <div className="container">

            <h1>Hello!</h1>
            <h3>Select a color that you would like to see from the NavBar!</h3>
            <div>
                <h3>If you would like to create your own color, you can do so below!</h3>

                <button className="form-btn">
                    <Link to='/colors/new'> New Color Form </Link>
                </button>
        </div>
        </div>
                {newColors.length > 0 && (
                    <div className="new-colors">
                        <h1>Your Colors</h1>
                        {newColors.map(color => (
                            <p key={color.name}>
                                <Link 
                                    to={`/colors/${color.name.toLowerCase()}`}
                                    style={{
                                        textDecoration: 'none',
                                        fontSize: '3em',
                                        color: 'rgb(140, 139, 139)'
                                    }}>{color.name}</Link>
                            </p>
                        ))}
                    </div>
                )}
            
            </>
        
    )
}

export default Colors
