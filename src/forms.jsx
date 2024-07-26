import React, { useState } from 'react'

const Forms = () => {

    const [name, setName] = useState({firstName:"", lastName:"", email:"", comments:""})

    const handleInput = (event) => {
        setName(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    console.log(name)
 
  return (
    <div className='w-[40%] m-auto my-10'>
        <h1>Use of forms in React</h1>

        <input type="text" name="firstName"  placeholder='First name' onChange={handleInput} value={name.firstName}/>
        <input type="text" name="lastName" placeholder='Last name' onChange={handleInput} value={name.lastName}/>
        <input type="email" name="email" placeholder='Email' onChange={handleInput} value={name.email}/>
        <textarea 
            name="comments"
            placeholder='Add a comment'
            value={name.comments}
            onChange={handleInput}
        />
    </div>
  )
}

export default Forms