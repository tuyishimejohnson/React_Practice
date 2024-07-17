import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <>
      <div className='w-1/2 m-auto flex flex-col justify-center h-screen'>
        <div className="navbar">
              <h1 className='text-center bg-red-300 font-semibold text-4xl'>Todo Application</h1>
          </div>

          <div className='bg-gray-200'>

            <div className='flex justify-center gap-10'>
              <input type="text" placeholder='Add a todo' className='w-1/2 focus:outline-none'/>
              <button id='add' className='border border-black px-4 py-2'>Add</button>
              <button>< FontAwesomeIcon icon={faTrash} id='delete' className='text-red-400'/></button>
            </div>
          </div>
      </div>
      
    
    </>
  )
}

export default Home