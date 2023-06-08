

import React from 'react'
import { useState } from 'react';

export default function StateCounter() {

    const[counter, setCounter] = useState({value:1000 ,type:'counter'});

    const increment = () => {
        setCounter((prevCounter)=>{
            return({value : prevCounter.value + 3});
        });
    };

    const decrement = () => {
        setCounter((prevCounter)=>{
            return({value : prevCounter.value - 3});
        });
    };

    

  return (
    <>
        <h3>{`counter value is ${counter.value}`}</h3> 
        <button onClick={increment}>+3</button> 
        <button onClick={decrement}>-3</button> 
    </>
  )
}
