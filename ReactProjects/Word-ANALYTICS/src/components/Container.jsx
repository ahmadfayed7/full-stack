import { useState } from "react";
import { FACEBOOK_MAX_CHARS, INSTAGRAM_MAX_CHARS } from "./Constant";
import Texrarea from "./Texrarea"
import Stats from "./Stats"
export default function Container() {
    const [text, setText] = useState("");
    const numOfChar =text.length;
    const instgramCharsLeft= INSTAGRAM_MAX_CHARS - numOfChar;
    const facebookCharsLeft= FACEBOOK_MAX_CHARS - numOfChar;
    const numofWords = text.split(" ").filter(word => word !== "").length;

  return (
<main className="container">
    <Texrarea text={text} setText={setText} />
    <Stats numOfChar ={numOfChar} instgramCharsLeft={instgramCharsLeft} facebookCharsLeft={facebookCharsLeft}  numofWords={numofWords}/>
</main>
  )
}
