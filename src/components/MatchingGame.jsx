import React, { useState } from "react";
import Flashcard from "./Flashcard";
import vulnerabilities from "../data/data";
import "./MatchingGame.css"; // Add specific styles for the matching game

const MatchingGame = () => {
  const [unmatchedCards, setUnmatchedCards] = useState(vulnerabilities);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [selectedDefinition, setSelectedDefinition] = useState(null);
  const [selectedExample, setSelectedExample] = useState(null);

  // Handle definition selection
  const handleDefinitionClick = (index) => {
    setSelectedDefinition(index);
  };

  // Handle example selection
  const handleExampleClick = (index) => {
    setSelectedExample(index);
  };

  // Check if the selected definition and example match
  const checkMatch = () => {
    if (selectedDefinition !== null && selectedExample !== null) {
      const definitionCard = unmatchedCards[selectedDefinition];
      const exampleCard = unmatchedCards[selectedExample];

      if (definitionCard.id === exampleCard.id) {
        // Match found
        setMatchedPairs((prevPairs) => [
          ...prevPairs,
          { definition: definitionCard, example: exampleCard },
        ]);

        // Remove matched cards from the unmatched list
        setUnmatchedCards((prevCards) =>
          prevCards.filter((card) => card.id !== definitionCard.id)
        );
      }

      // Reset selections
      setSelectedDefinition(null);
      setSelectedExample(null);
    }
  };

  return (
    <div className="matching-game-container">
      <h1>OWASP Top 10 Matching Game</h1>

      {/* Definitions and Examples */}
      <div className="definitions-container">
        <h2>Definitions</h2>
        {unmatchedCards.map((card, index) => (
          <div
            key={card.id}
            className={`definition-card ${
              selectedDefinition === index ? "selected" : ""
            }`}
            onClick={() => handleDefinitionClick(index)}
          >
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <div className="examples-container">
        <h2>Examples</h2>
        {unmatchedCards.map((card, index) => (
          <div
            key={card.id}
            className={`example-card ${
              selectedExample === index ? "selected" : ""
            }`}
            onClick={() => handleExampleClick(index)}
          >
            <p>{card.example}</p>
          </div>
        ))}
      </div>

      {/* Match Button */}
      <button className="match-button" onClick={checkMatch}>
        Match
      </button>

      {/* Matched Flashcards */}
      <div className="flashcard-display">
        {matchedPairs.map((pair, index) => (
          <Flashcard
            key={index}
            term={pair.definition.name}
            definition={pair.definition.description}
            example={pair.example.example}
            mitigation={pair.definition.mitigation}
          />
        ))}
      </div>
    </div>
  );
};

export default MatchingGame;