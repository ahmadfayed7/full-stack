import { useActiveIdContext } from "../lib/hooks";
import { jobItem } from "../lib/types";
import BookmarkIcon from "./BookmarkIcon";

export default function JobListItem({item}: {item: jobItem})  {

   const {ActiveId}=useActiveIdContext();
  return (
    <li className={`job-item ${ActiveId===item.id ? 'job-item--active':''}`} id={item.id.toString()}>
      <a href={`#${item.id}`} className="job-item__link">
        <div className="job-item__badge">{item.badgeLetters}</div>

        <div className="job-item__middle">
          <h3 className="third-heading">{item.title}</h3>
          <p className="job-item__company">{item.company}</p>
        </div>

        <div className="job-item__right">
          <BookmarkIcon id={item.id}  />
          <time className="job-item__time">{item.daysAgo}d</time>
        </div>
      </a>
    </li>
  );
}
