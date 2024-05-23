import React, { useRef } from "react";

const ColorChangingDiv = () => {
  const divRef = useRef(null);

  const handleClick = () => {
    if (divRef.current) {
      divRef.current.style.backgroundColor =
        divRef.current.style.backgroundColor === "yellow" ? "blue" : "yellow";
    }
  };

  return (
    <div
      ref={divRef}
      onClick={handleClick}
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: "yellow",
        cursor: "pointer",
      }}
    >
      Click me to change color
    </div>
  );
};

export default ColorChangingDiv;
