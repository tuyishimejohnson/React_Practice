import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <>
        <div className="navbar">
            <h1 className='text-center bg-red-300 font-semibold text-4xl'>Todo App</h1>
        </div>

        <div className='bg-gray-200'>
          <input type="text" placeholder='Add a todo'/>
          <button id='add'>Add</button>
          <button>< FontAwesomeIcon icon={faTrash} id='delete'/></button>
        </div>
    
    </>
  )
}

export default Home