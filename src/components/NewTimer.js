import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

//Import our action to add a new timer
import { addTimer } from '../actions'

export default function NewTimer() {
//useState used to create a value that will be available across multiple renders of this component
    const [name, setName] = useState('')
//dispatch will give you access to the Redux store and allow your component to send actions when you need to update the store
    const dispatch = useDispatch()


    return (
        <div>
            <input>
                type="text"
                placeholder="Name your timer"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            </input>
            <button onClick={() => dispatch(addTimer(name))}>
                Save
            </button>
        </div>
    )
}