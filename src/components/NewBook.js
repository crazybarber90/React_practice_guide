import React from 'react'
import { Link } from 'react-router-dom'

const NewBook = () => {
  return (
    <>
      <h2 style={{ marginBottom: '2rem' }}>NewBook</h2>
      <Link to="/books">Go to Book-list</Link>
    </>
  )
}

export default NewBook
