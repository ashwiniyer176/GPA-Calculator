import React from "react";
import "../App.css";

export default function InputForm(props) {
  const handleChange = (event) => {
    var data = {
      CGPA: parseFloat(event.target.elements.cgpa.value),
      creditsDone: parseInt(event.target.elements.creditsDone.value),
      creditsRegistered: parseInt(
        event.target.elements.creditsRegistered.value
      ),
      changed:true
    };   
    props.setData(data);
    event.preventDefault();
  };
  return (
    <div className="layout">
      <form onSubmit={handleChange}>
      <div className="form-element">
        <label htmlFor="cgpa">CGPA:</label>
        <input name="cgpa" type="text"></input>
      </div>
      <div className="form-element">
        <label htmlFor="creditsDone">Credits Completed:</label>
        <input name="creditsDone" type="text"></input>
      </div>
      <div className="form-element">
        <label htmlFor="creditsRegistered">Credits Registered:</label>
        <input name="creditsRegistered" type="text"></input>
      </div>
      <div className="form-element">
        <button type="submit">Submit</button>
      </div>
      </form>
    </div>
  );
}
