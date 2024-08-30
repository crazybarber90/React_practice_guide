import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Book = () => {
  const { id } = useParams()
  return (
    <>
      <h2 style={{ marginBottom: '2rem' }}>Book {id}</h2>
      <Link to="/books">Go to Book List</Link>
    </>
  )
}

export default Book
