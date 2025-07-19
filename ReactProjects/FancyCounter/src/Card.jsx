import React, { useState,useEffect } from 'react'
import Title from './Title'
import Count from './Count'
import ResetButton from './ResetButton'
import CountButtons from './CountButtons'

export default function Card() {
const [count, setcount] =useState(0);
const locked = count===5 ? true : false;
useEffect(() => {
  const handleKeydown = (event) => {
    if (event.code === "Space") {
      setcount((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount > 5) return 5;
        return newCount;
      });
    }
  };

  window.addEventListener("keydown", handleKeydown);

  return () => {
    window.removeEventListener("keydown", handleKeydown);
  };
}, []);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
        <Title locked={locked}/>
        <Count count ={count} /> 
        <ResetButton setcount={setcount} />
        <CountButtons locked={locked} setcount={setcount}/>
      </div>
  )
}
