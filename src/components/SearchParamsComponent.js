import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const SearchParamsComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 })

  //get nam vadi vrednost kljuca n
  console.log(searchParams.get('n'))

  const number = searchParams.get('n')

  return (
    <div>
      <h1>Book list</h1>
      {/* <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link> */}
      <br />
      <Link to={`/books/${number}`}>New Book = {number}</Link>
      <br />
      <br />
      <br />
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />
    </div>
  )
}

export default SearchParamsComponent
