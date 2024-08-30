import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <>
      <h1>NOT FOUND PAGE</h1>
      <Link to="/">Go to Home</Link>
      <Navigate to="/" />
    </>
  )
}

export default NotFoundPage
