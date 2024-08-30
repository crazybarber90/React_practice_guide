import React, { useEffect, useState } from 'react'

const Debouncer = () => {
  //11111111111111111111
  const [text, setText] = useState('')
  //2222222222222222222222
  const [debounced, setDebounced] = useState(text)

  //2222222222222222222222
  const useDebounce = (text, delay) => {
    useEffect(() => {
      const timer = setTimeout(() => {
        setDebounced(text)
      }, delay)

      return () => {
        clearTimeout(timer)
      }
    }, [text, delay])

    return debounced
  }

  //33333333333333333
  const debouncedText = useDebounce(text, 1000)

  return (
    <>
      {/* 11111111111111111111111 */}
      <h2>Debounce Hook Tester</h2>
      <input
        type="text"
        placeholder="Type somenthing..."
        onChange={(e) => setText(e.target.value)}
        style={{ padding: '10px 5px', outline: 'none' }}
        //33333333333333333333
        value={text}
      />
      {/*  33333333333333333 */}
      <p>Debounce value: {debouncedText}</p>
    </>
  )
}

export default Debouncer
