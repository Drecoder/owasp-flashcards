import React, { useState } from "react";
import "./Flashcard.css";

const Flashcard = ({ term, definition, example, mitigation}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`flashcard ${isFlipped ? "flipped" : ""}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="front">
        <h2>{term}</h2>
      </div>
      <div className="back">
      <p><strong>Definition:</strong> {definition}</p>
      <p><strong>Example:</strong> {example}</p>
      <p><strong>Mitigation:</strong> {mitigation}</p>
      </div>
    </div>
  );
};

export default Flashcard;
