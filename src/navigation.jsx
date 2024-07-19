import React from 'react'

const Navigation = () => {
  return (
    <>
        <div className="bg-gray-800 w-[60%] m-auto text-white items-center h-screen my-56 rounded-xl">
          <div className='flex items-center justify-between px-8 py-10 bg-neutral-800'>
            <nav className="flex gap-4">
            <img src={require('./reactjs-icon.png')} alt="" className='w-9'/>
              <h1 className='text-3xl font-bold text-cyan-300'>ReactFacts</h1>
            </nav>

            <h2 className='text-2xl font-bold'>React-Course - Project1</h2>
          </div>
          
          
          <div className="pt-16">
            <h1 className='text-5xl pl-8 pb-9'>Fun facts about React</h1>
            <ul className="pl-16 flex flex-col gap-3 text-xl">
              <li>Was first released in 2013</li>
              <li>Was originally created by Jordan Walke</li>
              <li>Has well over 100K stars on GitHub</li>
              <li>Is maintained by Meta</li>
              <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
          </div>
          
        </div>
    </>
  )
}

export default Navigation