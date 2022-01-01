import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

//Import our action to add a new timer
import { addTimer } from '../actions'

export default function NewTimer() {
    const [name, setName] = useState('')
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