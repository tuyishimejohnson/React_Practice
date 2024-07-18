import React from 'react'
import { useState } from 'react'

const Practice = () => {

    const [name, setName] = useState("Johnson")
    const [age, setAge] = useState(34)

    const sayHello = () => {

        setName("Tuyishime")
        setAge(43)
    }
  return (
    <div>
        <p>{ name } is { age } years old.</p>
        <button className='bg-gray-300 text-gray-700 px-4 py-2' onClick={sayHello}>Click this button</button>


    </div>
  )
}

export default Practice