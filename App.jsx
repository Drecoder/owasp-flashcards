import React, { useState } from "react";
import Game from "./src/components/Game"; // Import the flashcard game
import MatchingGame from "./src/components/MatchingGame"; // Import the matching game
import "./App.css";

function App() {
  const [showMatchingGame, setShowMatchingGame] = useState(false);

  return (
    <div className="App">
      <h1>OWASP Top 10 Flashcards</h1>

      {/* Navigation */}
      <nav>
        <button onClick={() => setShowMatchingGame(false)}>Flashcards</button>
        <button onClick={() => setShowMatchingGame(true)}>Matching Game</button>
      </nav>

      {/* Render the selected feature */}
      {showMatchingGame ? <MatchingGame /> : <Game />}
    </div>
  );
}

export default App;
