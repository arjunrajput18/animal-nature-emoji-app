import "./styles.css";
import { useState } from "react";

const emojiDict = {
  "🙈": "See-No-Evil Monkey",
  "🙉": "Hear-No-Evil Monkey",
  "🙊": "Speak-No-Evil Monkey",
  "💥": "Collision",
  "💫": "Dizzy",
  "💦": "Sweat Droplets",
  "💨": "Dashing Away",
  "🐵": "Monkey Face",
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐶": "Dog Face"
};

var meaningsOfEmoji = Object.keys(emojiDict);

//console.log(meaningsOfEmoji)

export default function App() {
  let [emojiMeaning, setEmojiMeaning] = useState("");

  function eventHandler(event) {
    var userInput = event.target.value;
    var emojiMeaning = emojiDict[userInput];

    if (emojiMeaning === undefined) {
      emojiMeaning = "this emoji is not in our database";
    }

    setEmojiMeaning(emojiMeaning);
  }

  function emojiClickHandler(val) {
    var meaning = emojiDict[val];

    setEmojiMeaning(meaning);
    //console.log(val);
  }
  return (
    <>
      <div className="App">
        <h1>Animal & Nature Emoji Meaning </h1>
        <input onClick={eventHandler} />
        <h2>{emojiMeaning}</h2>
        <h2>Animal & nature Emoji we Know </h2>
        {meaningsOfEmoji.map((val, index) => (
          <span
            onClick={() => emojiClickHandler(val)}
            key={index}
            style={{ fontSize: "25px", cursor: "pointer" }}
          >
            {val}{" "}
          </span>
        ))}
      </div>
    </>
  );
}
