import React from 'react'

const Navigation = () => {
  return (
    <>
        <div className="">
          <nav className="bg-green-500">
            <img src=".s    rc/Group.png" alt="" />
            <h1>ReactFacts</h1>
          </nav>
          
          <div className="body1">
            <h1>Fun facts about React</h1>
            <ul className="body">
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