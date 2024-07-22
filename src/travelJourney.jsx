import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons/faLocation'

const TravelJourney = (props) => {
  return (
    <>
    
        <div className='w-[40%] m-auto'>
            
            <div>
                <div className='flex gap-5 pt-6 px-10'>
                    <img src={props.image} alt="alt" className='object-contain w-[40%]'/>
                    <div className="flex flex-col gap-3">
                        <div className='flex gap-3 items-center'>
                            < FontAwesomeIcon icon={faLocation}/>
                            <span className='text-blue-500 text-xs uppercase tracking-widest'>{props.location}</span>
                            <span className='underline'>View on Google Maps</span>
                        </div>
                        
                            <h1 className='text-2xl font-semibold'>{props.title}</h1>
                        <span className='text-sm font-semibold'>{props.startdate} - {props.enddate}</span>
                        <p>{props.paragraph}</p>
                    </div>
                </div>
            </div>
            
            
        </div>
    
    </>
  )
}

export default TravelJourney