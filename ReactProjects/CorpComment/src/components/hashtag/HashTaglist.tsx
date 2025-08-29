import { useFeedbackItemStore } from "../store/FeedbackItemStore";
import HashTagItem from "./HashTagItem";

export default function HashTaglist() {
  
  const { getcomponylist, selectTag } = useFeedbackItemStore();
  const componylist = getcomponylist();
  return (
    <ul className="hashtags">
      {componylist.map((company) => (
        <HashTagItem key={company} company={company} handletagClick={selectTag} />
      ))}
    </ul>
  );
}
