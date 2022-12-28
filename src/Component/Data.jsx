
import React, { useState, setState } from 'react'
import { v4 } from "uuid"

const Data = (props) => {

    const dir = props.dir
    const setDir = props.setDir

    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")

    const add = (e) => {
        e.preventDefault()
        const Contact = {
            name: Name,
            email: Email
        }
        setDir([...dir, { id: v4(), Contact }])
        setEmail("")
        setName("")

    }


    const handelemail = (e) => {
        // Email="";
        setEmail(e.target.value)
    }
    const handelname = (e) => {
        // Name="";
        setName(e.target.value)
    }

    return (
        <div className='center' style={{width :'100vw'}}>
            <div className='ui main'>
                <h2>Add Contact</h2>
                <form className='ui form' onSubmit={add}>
                    <div className='field'>
                        <label> Name </label>
                        <input type="text"
                            name="Name"
                            required
                            placeholder="Name"
                            value={Name}
                            onChange={e => handelname(e)}

                        />
                    </div>
                    <div className='field'>
                        <label> Email </label>
                        <input type="email"
                            required
                            name="Email"
                            placeholder="Email"
                            value={Email}
                            onChange={(e) => handelemail(e)}

                        />
                    </div>
                    <button className='ui button blue' id='btn'>Add</button>
                </form>
            </div>
        </div>
    )
}

export default Data

