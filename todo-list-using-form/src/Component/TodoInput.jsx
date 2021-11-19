import React, { useState } from "react";

function TodoInput({ onSubmit }) {
  const [state, setState] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
  };
  return (
    <form onSubmit={(e) => onFormSubmit(e)}>
      <div className="input-add-btn">
        <input
          placeholder="Add Something..."
          name="title"
          value={state.title}
          onChange={handleInputChange}
          className="input-btn"
        /> 
        <input type="submit" value="+" className="Add-btn"/>

      </div>
      <div className="desciption-div">
        <textarea
          placeholder="Description.."
          name="description"
          value={state.description}
          onChange={handleInputChange}
          className="description-box"
        />
      </div>
    </form>
  );
}

export default TodoInput;
