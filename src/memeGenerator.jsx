import React, { useState } from 'react'
import memeData from './memeData'

const MemeGenerator = () => {    
    let arrayData = memeData.data.memes
    const urls = arrayData.map(item => item.url)
    /* const [memeImage, setMemeImage] = useState("") */

    


    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })


    const [allMemeImages, setAllMemeImages] = useState(urls)

    const getUrls = () => {
        const randomIndex = Math.floor(Math.random() * allMemeImages.length)
        let item = allMemeImages[randomIndex]
        console.log(item)
        setMeme(prevState => ({
            ...prevState,
            randomImage: item 

        }))
}   

  return (
    <>
        <div className='w-[40%] m-auto mt-36 h-80'>
            <div className='flex bg-gradient-to-r from-violet-700 to-purple-500
             text-white items-center justify-between px-6 py-3'>
                <div className='flex items-center gap-3'>
                    <img src={require("./images/Troll Face.png")} alt="" className='w-16'/>
                    <h1 className='text-2xl font-semibold'>Meme Generator</h1>
                </div>
                <div>
                    <p>React Course - Project 3</p>
                </div>
            </div>


            <div className='grid grid-cols-2 py-10 gap-5 px-7'>
                <div>
                    <h1 className='pt'>Top text</h1>
                    <input type="text" placeholder='First text' className='border border-black w-full pl-3 py-3 rounded-md'/>
                </div> 
                <div>
                    <h1>Bottom text</h1>
                    <input type="text" placeholder='Second text' className='border border-black w-full pl-3 py-3 rounded-md'/>
                </div>
            </div>
            <button className='bg-gradient-to-r from-violet-700 to-purple-500
             text-white px-5 py-2 w-full rounded-md' onClick={getUrls}>Get a new meme image  🖼</button>

             <img src={meme.randomImage} alt="images" className='m-auto px-7 py-10'/>
        </div>
    </>
  )
}

export default MemeGenerator