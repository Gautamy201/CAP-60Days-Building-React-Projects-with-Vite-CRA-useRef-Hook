import React, { useState, useRef } from "react";

const Form = () => {
  const [inputs, setInputs] = useState([{ value: "", isValid: true }]);
  const inputRefs = useRef([]);

  const addInputField = () => {
    setInputs([...inputs, { value: "", isValid: true }]);
  };

  const handleInputChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index].value = event.target.value;
    newInputs[index].isValid = event.target.value.length >= 3;
    setInputs(newInputs);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValidForm = inputs.every((input) => input.isValid);
    if (isValidForm) {
      console.log(
        "Form submitted:",
        inputs.map((input) => input.value)
      );
    } else {
      console.log("Form contains invalid inputs.");
    }
  };

  const setFocus = (index) => {
    inputRefs.current[index].focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input, index) => (
        <div key={index}>
          <input
            type="text"
            value={input.value}
            onChange={(event) => handleInputChange(index, event)}
            ref={(el) => (inputRefs.current[index] = el)}
            onFocus={() => console.log(`Input ${index + 1} focused`)}
          />
          {!input.isValid && (
            <span className="error">Minimum 3 characters required</span>
          )}
          <button type="button" onClick={() => setFocus(index)}>
            Focus
          </button>
        </div>
      ))}
      <button type="button" onClick={addInputField}>
        Add Input
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
