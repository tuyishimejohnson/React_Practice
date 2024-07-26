import React from "react"

const boxes =  [
  {
      id: 1,
      on: true
  },   
  {
      id: 2,
      on: false
  },   
  {
      id: 3,
      on: true
  },   
  {
      id: 4,
      on: true
  },   
  {
      id: 5,
      on: false
  },   
  {
      id: 6,
      on: false
  },   
]


const Star = (props) => {


  let style = {
    backgroundColor: props.darkMode ? "green" : "transparent"
  }

  let ids = boxes.map(ele => (<div style={style} className='border border-black w-full h-36' key={ele.id}></div>))
 
  return (
    <div>

        <div className='border border-gray-400 mt-96 w-[40%] m-auto'>
            <div className='grid grid-cols-3 gap-2 p-2 rounded-md'>{ids}</div>
        </div>        
        
    </div>
  )
}

export default Star