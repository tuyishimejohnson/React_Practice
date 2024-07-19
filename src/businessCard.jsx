import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons/faSquareTwitter'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare'


const BusinessCard = () => {
  return (
    <>
        <div className='bg-zinc-800 w-[40%] m-auto px-20 py-14 '>

            
                <div>
                    <img src={require("./images/Rectangle 90.png")} alt="" className='m-auto w-full'/>
                </div>

                <div className='bg-zinc-900 rounded-b-lg'>
                    <div className='flex flex-col items-center gap-1 pt-10 pb-6'>
                        <h1 className='text-white text-3xl font-bold'>Laura Smith</h1>
                        <h3 className='text-orange-200 text-xl'>Frontend Developer</h3>
                        <h3 className='text-white'>laurasmith.website</h3>
                    </div>

                    <div className='flex gap-8 items-center justify-center px-10'>
                        <button className='bg-white border-none px-10 py-3 rounded-md font-semibold'><FontAwesomeIcon icon={faEnvelope} />  Email</button>
                        <button className='bg-blue-400 border-none px-10 py-3 rounded-md text-white font-semibold'><FontAwesomeIcon icon={faLinkedin} />  LinkedIn</button>
                    </div>

                    <div className='px-14'>
                        <div>
                            <h1 className='text-white text-3xl font-bold pt-12 pb-2'>About</h1>
                            <p className='text-white'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                        </div>
                        <div>
                            <h1 className='text-white text-3xl font-bold pt-5 pb-2'>Interests</h1>
                            <p className='text-white'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                        </div>
                    </div>

                    <div className='text-white justify-center text-5xl flex gap-6 pt-14 pb-10'>
                        < FontAwesomeIcon icon={faSquareTwitter}/>
                        < FontAwesomeIcon icon={faFacebookSquare}/>
                        < FontAwesomeIcon icon={faInstagramSquare}/>
                        < FontAwesomeIcon icon={faGithubSquare}/>
                    </div>
                    
            
                </div>
        </div>
    </>
  )
}

export default BusinessCard