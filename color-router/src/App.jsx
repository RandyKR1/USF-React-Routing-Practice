import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Colors from './Colors'
import Color from './Color'
import Nav from './Nav'
import NewColorForm from './NewColorForm'
import { useState } from 'react'

const colorsDefaults = [
  {
    name: "Yellow",
  },
  {
    name: "Blue",
  },
  {
    name: "Green",
  },
  {
    name: "Orange",
  }
]

function App({ colors = colorsDefaults }) {
  const [colorsList, setColorsList] = useState(colors);
  const [newColors, setNewColors] = useState([]);

  const addColor = newColor => {
    setNewColors(colors => [...colors, newColor]);
  }

  return (
    <>
      <BrowserRouter>
        <nav>
          <Nav colors={colorsList} />
        </nav>
        <Routes>
          <Route path="/colors" element={<Colors newColors={newColors} />} />
          <Route path="/colors/:name" element={<Color colors={[...colorsList, ...newColors]} />} />
          <Route path="/colors/new" element={<NewColorForm createColor={addColor} />} />
          <Route path="*" element={<Navigate to="/colors" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
