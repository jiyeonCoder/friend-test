import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Start from "./Start";
import Quiz from "./Quiz";
import Score from "./Score";

function App() {
  const [name, setName] = React.useState("Jiyeon");

  return (
    <div
      className="App"
      style={{
        maxWidth: "350px",
        margin: "auto",
      }}>
      <Routes>
        <Route path="/" element={<Start name={name} />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/score" element={<Score name={name} />} />
      </Routes>
    </div>
  );
}

export default App;
