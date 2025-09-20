import { TriangleDownIcon } from "@radix-ui/react-icons";
import BookmarksPopover from "./BookmarksPopover";
import { useRef, useState } from "react";
import { useOnClickOutside } from "../lib/hooks";

export default function BookmarksButton() {
  const [Bookmarksshow, setBookmarksshow] =useState(false)
    const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  useOnClickOutside([buttonRef, popoverRef], () => setBookmarksshow(false));
  return (
    <section>
      <button ref={buttonRef} onClick ={(e)=>{
        setBookmarksshow(()=>!Bookmarksshow);
        e.stopPropagation();
        e.preventDefault();
      }}className="bookmarks-btn">
        Bookmarks <TriangleDownIcon />
      </button>
     { Bookmarksshow&&<BookmarksPopover ref={popoverRef}/>}
    </section>
  );
}
