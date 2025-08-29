import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TfeedbackItem } from "../../lib/types";
import { useState } from "react";




type FeedbackItemProps = {
    item: TfeedbackItem}

export default function FeedbackItem({item}:FeedbackItemProps) {
  const [upvoteCount,setUpvoteCount] =useState(item.upvoteCount);
  const [open,setOpen] =useState(false);
  return (
     <li className={`feedback ${open ? 'feedback--expand' : ""}`} onClick={()=>setOpen(!open)}>
      <button onClick={(e)=>{e.stopPropagation(); setUpvoteCount(upvoteCount + 1);e.currentTarget.disabled=true}} className="upvote-button">
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>
      <div>
        <p>{item.badgeLetter}</p>
      </div>
      <div>
        <p>{item.company}</p>
        <p>{item.text}</p>
      </div>
      <p>{item.daysAgo}d</p>
    </li>
  )
}
