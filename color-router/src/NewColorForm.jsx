import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid';

const NewColorForm = ({ createColor }) => {
  const INITIAL_STATE = {
    name: ''
  }

  const [formData, setFormData] = useState(INITIAL_STATE);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const inputData = (e) => {
    e.preventDefault();
    createColor({ ...formData, id: uuid() });
    setFormData(INITIAL_STATE)
    navigate("/colors");
  }

  return (
    <div className="form">
      <form onSubmit={inputData}>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={formData.name}
            id='name'
            required='True'
          />
        </div>
        <button id="newBoxButton">Add a new color!</button>
      </form>
    </div>
  )
}

export default NewColorForm
