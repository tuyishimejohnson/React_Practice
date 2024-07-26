import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'




const MenuList = (props) => {
  return (
    
    <div className='w-[40%] m-auto my-10'>
        <div className='border rounded-lg border-gray-400 flex'>
            <div className='w-2/5'>
                <img src={props.image} alt="" className='w-full rounded-l-lg' />
            </div>
            <div className='flex flex-col w-1/3 px-5'>
                <h1 className='text-xl font-semibold pt-4 pb-2'>{props.itemName}</h1>
                <p>{props.description}</p>
            </div>
            
            <span className='font-bold flex flex-col justify-center'>{props.price}</span>
            <span className='pt-4 flex'>< FontAwesomeIcon icon={faHeart} className='text-3xl'/></span>
        </div>
    </div>
  )
}

export default MenuList