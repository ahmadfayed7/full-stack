import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import React from "react";

export default function CountButtons(props) {
  return (
    <div className="button-container">
      <button disabled={props.locked}  onClick={(event,prev)=>{props.setcount((prev) => {
        if(prev ===5) return 5;
        return prev + 1;
      event.currentTarget.blur();});}} 
      className="count-btn">
        <PlusIcon  className="count-btn-icon "/>
      </button>
      <button disabled={props.locked} onClick={(prev,event)=>{props.setcount((prev) => {
        const newcount = prev - 1;
        if(newcount <0) return 0;
        return newcount;
      event.currentTarget.blur();});}} 
      className="count-btn">
        <MinusIcon  className="count-btn-icon "/>
      </button>
    </div>
  );
}
