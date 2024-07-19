import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FaLinkedin } from 'react-icons/fa'

const BusinessCard = () => {
  return (
    <>
        <div className='bg-zinc-800 w-[40%] m-auto'>
            <div>
                <img src={require("./images/Rectangle 90.png")} alt="" className='w-[60%] m-auto pt-14'/>
            </div>

            <div className='flex flex-col items-center gap-2'>
                <h1 className='text-white text-3xl font-bold'>Laura Smith</h1>
                <h3 className='text-orange-200 text-xl'>Frontend Developer</h3>
                <h3 className='text-white'>laurasmith.website</h3>
            </div>

            <div>
                <button className='bg-white border-none px-8 py-3'><FontAwesomeIcon icon={faEnvelope} />Email</button>
                <button className='bg-blue-400 border-none px-8 py-3'><FontAwesomeIcon icon={FaLinkedin} />LinkedIn</button>
            </div>
        </div>
    </>
  )
}

export default BusinessCard