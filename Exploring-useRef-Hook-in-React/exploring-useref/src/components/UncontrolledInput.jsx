import React, { useRef, useEffect, useState } from "react";

const UncontrolledInput = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");

  const handleInputChange = () => {
    if (inputRef.current) {
      setValue(inputRef.current.value);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("input", handleInputChange);
    }

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener("input", handleInputChange);
      }
    };
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <p>Current value: {value}</p>
    </div>
  );
};

export default UncontrolledInput;
