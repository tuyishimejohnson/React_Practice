import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAfrica } from '@fortawesome/free-solid-svg-icons'
import { faLocation } from '@fortawesome/free-solid-svg-icons/faLocation'

const TravelJourney = (props) => {
  return (
    <>
    
        <div className='w-[40%] m-auto'>
            <header className='flex justify-center text-2xl bg-red-500 text-white items-center gap-3 py-2'>< FontAwesomeIcon icon={faEarthAfrica}/> <h1>my travel journal.</h1></header>
            <div>
                <div className='flex gap-5 pt-6 px-10'>
                    <img src={props.image} alt="alt" className='w-[40%] over'/>
                    <div className="flex flex-col gap-3">
                        <div className='flex gap-3 items-center'>
                            < FontAwesomeIcon icon={faLocation}/>
                            <span>{props.location}</span>
                            <span className='underline'>View on Google Maps</span>
                        </div>
                        
                            <h1 className='text-2xl'>{props.title}</h1>
                        <span>{props.startdate} - {props.enddate}</span>
                        <p>{props.paragraph}</p>
                    </div>
                </div>
            </div>
            
            
        </div>
    
    </>
  )
}

export default TravelJourney