import React, { useState } from "react";
import text from "./data"; // Importing the text array from the provided file
import "./App.css";

function App() {
  const [numParagraphs, setNumParagraphs] = useState(1);
  const [generatedText, setGeneratedText] = useState("");

  const generateLoremIpsum = () => {
    if (numParagraphs > 0 && numParagraphs < 9) {
      const selectedText = text.slice(0, numParagraphs);
      setGeneratedText(selectedText.join("\n\n"));
    } else if (numParagraphs < 1) {
      alert("sorry, you are giving a negative number");
    } else if (numParagraphs > 8) {
      alert("sorry, you should consider giving input less than 8");
      const selectedText = text.slice(0, numParagraphs);
      setGeneratedText(selectedText.join("\n\n"));
    }
  };

  return (
    <div className="container">
      <h1>Lorem Ipsum Generator</h1>
      <div className="controls">
        <label htmlFor="numParagraphs">Number of Paragraphs:</label>
        <input
          type="number"
          id="numParagraphs"
          min="1"
          value={numParagraphs}
          onChange={(e) => setNumParagraphs(e.target.value)}
        />
        <button onClick={generateLoremIpsum}>Generate</button>
      </div>
      <div className="output">
        <textarea value={generatedText} readOnly />
      </div>
    </div>
  );
}

export default App;
