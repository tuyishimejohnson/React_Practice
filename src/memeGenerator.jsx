import React from 'react'

const MemeGenerator = () => {
  return (
    <>
        <div className='w-[40%] m-auto mt-36'>
            <div className='flex bg-violet-500 text-white items-center justify-between px-6 py-3'>
                <div className='flex items-center gap-3'>
                    <img src={require("./images/Troll Face.png")} alt="" className='w-16'/>
                    <h1 className='text-2xl font-semibold'>Meme Generator</h1>
                </div>
                <div>
                    <p>React Course - Project 3</p>
                </div>
            </div>


            <div className='flex gap-5 py-10'>
                <div className='w-1/2'>
                    <h1 className='pt'>Top text</h1>
                    <input type="text" placeholder='First text' className='border border-black w-full'/>
                </div> 
                <div  className='w-1/2'>
                    <h1>Bottom text</h1>
                    <input type="text" placeholder='Second text' className='border border-black w-full'/>
                </div>
            </div>
            <div className='flex justify-center'>
                <button className='bg-violet-500 text-white px-5 py-2'>Get a new meme image  🖼</button>
            </div>
        </div>
    </>
  )
}

export default MemeGenerator