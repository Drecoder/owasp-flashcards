import React, { useState } from "react";
import Flashcard from "./Flashcard";
import "./Game.css";

// Import vulnerabilities from data.js
import vulnerabilities from "../data/data";

// Map the vulnerabilities to the flashcard structure
const flashcards = vulnerabilities.map(vuln => ({
  term: vuln.name,
  definition: vuln.description,
  example: vuln.example,
  mitigation: vuln.mitigation
}));

const Game = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current flashcard index

  // Handle the "Next" button click
  const nextCard = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handle the "Previous" button click
  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="game-container">
      {/* Render only the current flashcard */}
      <Flashcard 
        term={flashcards[currentIndex].term} 
        definition={flashcards[currentIndex].definition} 
        example={flashcards[currentIndex].example}
        mitigation={flashcards[currentIndex].mitigation}
      />
      
      <div className="navigation-buttons">
        <button onClick={prevCard} disabled={currentIndex === 0}>Previous</button>
        <button onClick={nextCard} disabled={currentIndex === flashcards.length - 1}>Next</button>
      </div>
    </div>
  );
};

export default Game;

