import React, { useState } from 'react'

const Forms = () => {

    const [name, setName] = useState({firstName:"", 
                                    lastName:"", 
                                    email:"", 
                                    comments:"",
                                    isChecked: false,
                                    favoriteColor: ""
                                })

    const handleInput = (event) => {
        const {type, value, checked} = event.target
        setName(prevState => ({
            ...prevState,
            [name]: type === "checked" ? checked : value
        }))
    }

    
    const [names, setNames] = useState("")
    const changes = (e) => {
        setNames(e.target.value)
    }
  return (
    <div className='w-[40%] m-auto my-10'>
        <h1>Use of forms in React</h1>


        <form>

        <input type="text" name="firstName"  placeholder='First name' onChange={handleInput} value={name.firstName}/>
        <input type="text" name="lastName" placeholder='Last name' onChange={handleInput} value={name.lastName}/>
        <input type="email" name="email" placeholder='Email' onChange={handleInput} value={name.email}/>
        <textarea 
            name="comments"
            placeholder='Add a comment'
            value={name.comments}
            onChange={handleInput}
        />

        <input type="checkbox" checked={name.isChecked} onChange={handleInput} id='isChecked'/>
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


        <form action="">
            <label htmlFor="">First Name</label>
            <input type="text" value={names}/>
            onChange={changes}
        </form>
        
    </div>
  )
}

export default Forms