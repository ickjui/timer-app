import React, {  } from 'react'
import { useDispatch } from 'react-redux'
//Import the toggleTimer action
import { toggleTimer } from './actions'

export default function TimerView(props) {
    //Extract these props to use within the component:
    const {index, timer} = props
    const dispatch = useDispatch()

    return (
        <div>
            <h2>{timer.name}</h2>
            <h1>{timer.time}</h1>
            <button onClick={() => dispatch(toggleTimer(index))}>
                {timer.isRunning ? "Stop" : "Start"}
            </button>
        </div>
    )
}