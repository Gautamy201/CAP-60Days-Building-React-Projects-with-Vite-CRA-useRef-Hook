import React from "react";
import FocusableInput from "./components/FocusableInput";
import UncontrolledInput from "./components/UncontrolledInput";
import ColorChangingDiv from "./components/ColorChangingDiv";

const App = () => {
  return (
    <div>
      <h1>Focusable Input</h1>
      <FocusableInput />
      <h1>Uncontrolled Input</h1>
      <UncontrolledInput />
      <h1>Color Changing Div</h1>
      <ColorChangingDiv />
    </div>
  );
};

export default App;
