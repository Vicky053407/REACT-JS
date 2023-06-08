import React from 'react'

export default function StateExaple() {

    let user = 'vicky'

    const changeName = () => {
        user = 'kishore bro';
        console.log(user);
    }

  return (
    <>
        <h1>{user}</h1>
        <button onClick={changeName}>ChangeName</button>
    </>
  )
}
