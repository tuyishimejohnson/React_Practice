import React, { useState } from 'react'

const Forms = () => {

    const [name, setName] = useState({firstName:"", 
                                    lastName:"", 
                                    email:"", 
                                    comments:"",
                                    isChecked: true,
                                    favoriteColor: ""
                                })

    const handleInput = (event) => {
        setName(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        console.log("Shiii!")
    }
 
  return (
    <div className='w-[40%] m-auto my-10'>
        <h1>Use of forms in React</h1>


        <form onSubmit={handlSubmit}>

        <input type="text" name="firstName"  placeholder='First name' onChange={handleInput} value={name.firstName}/>
        <input type="text" name="lastName" placeholder='Last name' onChange={handleInput} value={name.lastName}/>
        <input type="email" name="email" placeholder='Email' onChange={handleInput} value={name.email}/>
        <textarea 
            name="comments"
            placeholder='Add a comment'
            value={name.comments}
            onChange={handleInput}
        />

        <input type="checkbox" checked={name.isChecked} id='isChecked'/>
        <label htmlFor="isChecked">Is it Y?</label>
        <select name="favoriteColor" id="" value={name.favoriteColor} onChange={handleInput}>
            <option value="red">-- Choose --</option>
            <option value="red">Red</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
            <option value="white">White</option>
        </select>
        <br />

        <button>Submit</button>
        </form>

        
    </div>
  )
}

export default Forms