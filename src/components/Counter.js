import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from '../redux/counter/counterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>REDUX TOOLKIT</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          IncrementByAmount
        </button>
        <button onClick={() => dispatch(incrementAsync(5))}>
          incrementAsync
        </button>
      </div>
    </div>
  )
}

export default Counter
