import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'

const Contacts = (props) => {
  return (
    <>
    <div className='w-[40%] m-auto gap-5'>
      <div>
          <div className="shadow-xl shadow-black ">
            <img src={require("./images/Rectangle 90.png")} alt=""/>
              <h3>{props.name}</h3>
              <div className="flex gap-2 items-center">
                  < FontAwesomeIcon icon={faPhone}/>
                  <p>{props.phone}</p>
              </div>
              <div className="flex gap-2 items-center">
              < FontAwesomeIcon icon={faEnvelope}/>
                  <p>{props.email}</p>
              </div>
          </div>
        </div>
        
      </div>  
    </>


  
  )

  
}

export default Contacts