import { useState } from "react";
import Warning from "./Warning";

export default function Texrarea(props) {
  const [showwarning, setWarning] = useState(false);
  const [warningText, setWarningtext] = useState("");

  const handleChange = (event) => {
    let newText = event.target.value;
    if (newText.includes("<script>")) {
      newText = newText.replace("<script>", "");
      setWarning(true);
      setWarningtext("no script allowed");
    }else {
      setWarning(false);
    }
    props.setText(newText);
  };
  return (
    <div className="textarea">
      <textarea
        value={props.text}
        onChange={handleChange}
        placeholder="Type your text here.."
      ></textarea>
      {showwarning && <Warning warningText={warningText} />}
    </div>
  );
}
