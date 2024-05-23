import React, { useEffect, useRef } from "react";

const FocusableInput = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <input type="text" ref={inputRef} placeholder="Focus me on mount" />
    </>
  );
};

export default FocusableInput;
