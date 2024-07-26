import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'




const MenuList = (props) => {
    const [favorite, setIsFavorite] = useState("#e5e7eb")
    let styles = {
        color: favorite ? "#e5e7eb" : "red"
    }

    const checkFavorite = () => {
        setIsFavorite(prevState => !prevState)
    }

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
            
            <span className='font-bold flex flex-col justify-center'>{props.price} EURO</span>
            <span className='pt-4 flex'>< FontAwesomeIcon icon={faHeart} className='text-3xl' style={styles} onClick={checkFavorite} /></span>
        </div>
    </div>
  )
}

export default MenuList