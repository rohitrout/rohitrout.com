import "./styles.css";
import React, { useState } from "react";
var emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "😘": "Face Blowing a Kiss",
  "😗" :"Kissing Face",
  "😛": "Face with Tongue",
  "😚" :"Kissing Face with Closed Eyes"
};

var emojiWeKnow = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("");

  function onChange(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>inside outtt</h1>
      <input onChange={onChange}></input>

      <div>
        <h2>{meaning}</h2>
      </div>
      <h3>Emojis We Know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1.2rem", padding: ".5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
            {""}
          </span>
        );
      })}
    </div>
  );
}
