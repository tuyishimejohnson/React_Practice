import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAfrica } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <>
        <header className='w-[40%] m-auto mt-36 flex justify-center text-2xl bg-red-500 text-white items-center gap-3 py-2'>< FontAwesomeIcon icon={faEarthAfrica}/> <h1>my travel journal.</h1></header>
    </>
  )
}

export default Header