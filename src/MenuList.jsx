import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const MenuList = () => {
  return (
    <div className='w-[40%] m-auto my-20'>
        <h1 className='text-3xl text-center font-semibold text-gray-600 py-5'>Wild Restaurant Menu</h1>
        <div className='border border-gray-400 flex'>
            <div className='w-2/5'>
                <img src={require("./images/asian1food.jpg")} alt="" className='w-full'/>
            </div>
            <div className='flex flex-col w-1/3 px-5'>
                <h1 className='text-xl font-semibold pt-4 pb-2'>Caesar's Salad</h1>
                <p>The original Caesar's Salad recipe</p>
            </div>
            
            <span className='font-bold flex flex-col justify-center'>12 EUR</span>
            <span className='pt-4 flex'>< FontAwesomeIcon icon={faHeart} className='text-3xl'/></span>
        </div>
    </div>
  )
}

export default MenuList