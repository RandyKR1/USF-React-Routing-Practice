import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";

const Color =({ colors }) => {
  const { name } = useParams();
  const color = colors.find(color => color.name.toLowerCase() === name.toLowerCase());

  if (!color) {
    return <Navigate to="/colors" />;
  }

  return (
    <>
    <div
        style={{
            backgroundColor: color.name,
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent:"center",
            color: 'white',
            flexDirection: 'column'
        }}>
      <h1
        style={{
          padding: '20px',
          fontSize: '4em'
        }}>
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
