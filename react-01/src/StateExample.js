import React from 'react'
import {useState} from 'react'

export default function StateExample() {

    //let user = 'vicky'
    const[user, setUser] = useState('vicky');

    const changeName = () => {
        setUser('kishore bro');
        console.log(user);
    }

  return (
    <>
        <h1>{user}</h1>
        <button onClick={changeName}>ChangeName</button>
    </>
  )
}
