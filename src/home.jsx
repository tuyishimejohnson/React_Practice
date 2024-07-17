import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <>
      <div className='w-1/2 m-auto flex flex-col justify-center h-screen text-white'>
          <div className="navbar">
              <h1 className='text-center bg-slate-500 rounded-t-xl py-3 font-semibold text-4xl'>Todo Application</h1>
          </div>

          <div className='bg-gray-200 py-6'>
            <div className='flex justify-center gap-10'>
              <input type="text" placeholder='Add a todo' className='w-1/2 focus:outline-none focus:ring-1 rounded-md pl-3 text-gray-500'/>
              <button id='add' className='border border-gray-500 rounded-full px-7 py-2 hover:text-white hover:bg-gray-500 hover:translate-x-1 transition text-gray-500'>Add</button>
              <button>< FontAwesomeIcon icon={faTrash} id='delete' className='text-red-400 text-2xl hover:translate-y-1 transition'/></button>
            </div>
          </div>
      </div>
    </>
  )
}

export default Home