import { useEffect, useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Header from "./components/Header";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [memoryArray, setMemoryArray] = useState([]);

  const handleScore = (player) => {
    if (memoryArray.includes(player.id)) {
      setScore(0);
      setMemoryArray([]);
    } else {
      setMemoryArray(memoryArray.concat(player.id));
      setScore(score + 1);
    }
  };

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);
  return (
    <div>
      <Header score={score} highScore={highScore} />
      <Game
        score={score}
        highScore={highScore}
        memoryArray={memoryArray}
        handleScore={handleScore}
      />
    </div>
  );
}

export default App;
