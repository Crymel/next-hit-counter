"use client";
import React from "react";
import "./styles.css";

function ShyButton({ children }) {
  const [revealed, setRevealed] = React.useState(false);

  const handleClick = () => {
    setRevealed(!revealed);
  };

  return (
    <button onClick={handleClick} className={revealed ? undefined : "censored"}>
      {children}
    </button>
  );
}

export default ShyButton;
