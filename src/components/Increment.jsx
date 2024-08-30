import { type } from '@testing-library/user-event/dist/type'
import React, { useReducer, useState } from 'react'

// 333333333333333
const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
}

// ZA USE REDUCER 2222222222222
function reducer(state, action) {
  switch (action.type) {
    // sada ovde moze case ACTIONS.INCREMENT: 33333333333333
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state
  }
}

const Increment = () => {
  const [count, setCount] = useState(0)

  // ZA USE REDUCER 2222222222222
  // useReducer prihvata               reducer i  initial state
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  function increment() {
    // setCount((prev) => prev + 1)
    // ZA USE REDUCER 2222222222222222
    dispatch({ type: 'increment' })
    // ili ACTIONS.INCREMENT
  }

  function decrement() {
    // setCount((prev) => prev - 1)
    // ZA USE REDUCER 22222222222222222
    dispatch({ type: 'decrement' })
  }
  return (
    <div>
      <button
        style={{ padding: '15px', cursor: 'pointer' }}
        onClick={decrement}
      >
        -
      </button>
      {/* <span style={{ margin: '0 20px', fontSize: '30px' }}>{count}</span> */}
      {/*  ZA USE REDUCER */}
      <span style={{ margin: '0 20px', fontSize: '30px' }}>{state.count}</span>
      <button
        style={{ padding: '15px', cursor: 'pointer' }}
        onClick={increment}
      >
        +
      </button>
    </div>
  )
}

export default Increment
