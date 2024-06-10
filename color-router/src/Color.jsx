import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import "./Color.css"


const Color =({ colors }) => {
  const { name } = useParams();
  const color = colors.find(color => color.name.toLowerCase() === name.toLowerCase());

  if (!color) {
    return <Navigate to="/colors" />;
  }

  return (
    <>
    <div className="unit"
        style={{
            backgroundColor: color.name
        }}>
      <h1>
          This is {color.name}, isnt it neat?
      </h1>

        <Link 
          to="/colors"
          style={{
            textDecoration: 'none',
            color: 'white',
            fontSize: '2em',
            
          }}>
            Back to Home
            </Link>
    </div>
    </>
  );
}

export default Color;
