import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Nav from "./Nav";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

const dogsDefault = [
  {
    name: "Whiskey",
    age: 5,
    src: "path/to/whiskey.jpg", // Replace with actual image paths
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!"
    ]
  },
  {
    name: "Duke",
    age: 3,
    src: "path/to/duke.jpg",
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs."
    ]
  },
  {
    name: "Perry",
    age: 4,
    src: "path/to/perry.jpg",
    facts: [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain."
    ]
  },
  {
    name: "Tubby",
    age: 4,
    src: "path/to/tubby.jpg",
    facts: [
      "Tubby is really stupid.",
      "Tubby does not like walks.",
      "Angelina used to hate Tubby, but claims not to anymore."
    ]
  }
];

function App({ dogs = dogsDefault }) {
  return (
    <Router>
      <div>
        <div className="nav">
        <Nav dogs={dogs} />
        </div>
        <Routes>
          <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
          <Route path="*" element={<Navigate to="/dogs" />} />  {/* Catch-all route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
