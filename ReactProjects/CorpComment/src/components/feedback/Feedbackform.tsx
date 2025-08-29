import { useState } from "react"

import { MAX_FEEDBACK_LENGTH } from "../../lib/constants"
export default function Feedbackform({addItem} :{addItem: (text: string) => void}) {
  const [feedback, setFeedback] = useState("")
  const[ValdiedIndicator,setValdiedIndicator] =useState(false);
  const[InvaldiedIndicator,setInvaldiedIndicator] =useState(false);

  const feedbackLength = MAX_FEEDBACK_LENGTH - feedback.length
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if(feedback.includes("#") &&feedback.length >10){

      setValdiedIndicator(true)
      setTimeout(() => {
        setValdiedIndicator(false)
      }, 2000);
    }
    else{
      setInvaldiedIndicator(true)
      setTimeout(() => {
        setInvaldiedIndicator(false)
      }, 2000);
      return;
    }
    addItem(feedback)
    setFeedback("")
  }
  return (
<form className={`form ${ValdiedIndicator ? "form--valid" : ""} ${InvaldiedIndicator ? "form--invalid" : ""}`} onSubmit={handleSubmit}>
  <textarea id="feadbackformid"
  value={feedback}
  onChange={(event)=>{
    const value = event.target.value
    if (value.length > MAX_FEEDBACK_LENGTH) {
      return
    }
    setFeedback(value)
  }}></textarea>
  <label htmlFor="feadbackformid">Your Feedback</label>
   <div>
    <p className="u-italic">{feedbackLength}</p>
    <button>Submit</button>
   </div>
</form>
  )
}
