import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAfrica } from '@fortawesome/free-solid-svg-icons'
import { faLocation } from '@fortawesome/free-solid-svg-icons/faLocation'

const TravelJourney = () => {
  return (
    <>
    
        <div className='w-[40%] m-auto'>
            <header className='flex justify-center text-2xl bg-red-500 text-white items-center gap-3 py-2'>< FontAwesomeIcon icon={faEarthAfrica}/> <h1>my travel journal.</h1></header>
            <div className='flex gap-5 pt-6 px-10'>
                <img src={require("./images/alev-takil-Q4MIMpOgfEo-unsplash.jpg")} alt="alt" className='w-[40%] over'/>
                <div className="flex flex-col gap-3">
                    <div className='flex gap-3 items-center'>
                        < FontAwesomeIcon icon={faLocation}/>
                        <span>JAPAN</span>
                        <span className='underline'>View on Google Maps</span>
                    </div>
                    
                        <h1 className='text-2xl'>Mount Fuji</h1>
                    <span>12 Jan, 2021 - 24 Jan, 2021</span>
                    <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
                
                
            </div>
            
        </div>
    
    </>
  )
}

export default TravelJourney