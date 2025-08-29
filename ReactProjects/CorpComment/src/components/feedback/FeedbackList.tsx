import FeedbackItem from "./FeedbackItem";
import { TfeedbackItem } from "../../lib/types";

export default function FeedbackList({feedbackItems,Loading,error}:{feedbackItems:TfeedbackItem[],Loading:boolean,error:string}) {


  return (
    <ol className="feedback-list">
      {error && <div className="error-message">{error}</div> }
      {Loading && <div className="spinner" />}
      {feedbackItems.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </ol>
  );
}
