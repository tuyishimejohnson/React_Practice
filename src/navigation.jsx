import React from 'react'

const Navigation = () => {
  return (
    <>
        <div className="bg-gray-800 w-[40%] shadow-md shadow-gray-400 m-auto text-white items-center h-screen my-56 rounded-xl">
          <div className='flex items-center justify-between px-8 py-10 bg-neutral-800 rounded-t-xl'>
            <nav className="flex gap-4">
            <img src={require('./images/reactjs-icon.png')} alt="" className='w-9'/>
              <h1 className='text-3xl font-bold text-cyan-300'>ReactFacts</h1>
            </nav>

            <div className='bg-white w-20 h-10 rounded-full relative cursor-pointer'>
              <input type="checkbox" className='sr-only peer'/>
              <span className='w-8 h-8 top-1 left-1 rounded-full absolute bg-blue-500 peer-checked:bg-blue-200 peer-checked:left-11 transition-all duration-500'></span>
            </div>
          </div>
          
          <div className="pt-16 relative">
            <h1 className='text-5xl pl-8 pb-9'>Fun facts about React</h1>
            <ul className="pl-16 flex flex-col gap-3 text-xl list-disc marker:text-cyan-300 marker:text-2xl max-w-[85%]">
              <li>Was first released in 2013</li>
              <li>Was originally created by Jordan Walke</li>
              <li>Has well over 100K stars on GitHub</li>
              <li>Is maintained by Meta</li>
              <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <div className='absolute right-0 top-1/2'> 
              <img src={require("./images/reactjs-icon 2.png")} alt=""/>
            </div>
            
          </div>
          
        </div>
    </>
  )
}

export default Navigation