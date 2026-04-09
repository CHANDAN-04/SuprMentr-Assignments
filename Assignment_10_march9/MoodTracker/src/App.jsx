import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const moods = [
    {
      id: "happy",
      emoji: "😊",
      label: "Happy",
      description: "Feeling energetic and positive today.",
      theme: "happy-theme",
    },
    {
      id: "calm",
      emoji: "😌",
      label: "Calm",
      description: "Relaxed and peaceful state of mind.",
      theme: "calm-theme",
    },
    {
      id: "neutral",
      emoji: "😐",
      label: "Neutral",
      description: "Balanced and steady mood.",
      theme: "neutral-theme",
    },
    {
      id: "sad",
      emoji: "😢",
      label: "Sad",
      description: "Low energy today. Take it easy.",
      theme: "sad-theme",
    },
    {
      id: "angry",
      emoji: "😠",
      label: "Angry",
      description: "Feeling frustrated or irritated.",
      theme: "angry-theme",
    },
  ];

  const [selectedMood, setSelectedMood] = useState(
    localStorage.getItem("mood") || "neutral",
  );

  useEffect(() => {
    localStorage.setItem("mood", selectedMood);
  }, [selectedMood]);

  const mood = moods.find((m) => m.id === selectedMood);

  return (
    <main className={`app ${mood.theme}`}>
      <div className="card">
        <h1 className="title">Mood Interface</h1>

        <div className="mood-buttons">
          {moods.map((m) => (
            <button
              key={m.id}
              className={`mood-btn ${selectedMood === m.id ? "active" : ""}`}
              onClick={() => setSelectedMood(m.id)}
            >
              <span className="emoji">{m.emoji}</span>
              <span className="label">{m.label}</span>
            </button>
          ))}
        </div>

        <div className="display">
          <div className="display-emoji">{mood.emoji}</div>
          <h2>{mood.label}</h2>
          <p>{mood.description}</p>
        </div>
      </div>
    </main>
  );
}

export default App;
