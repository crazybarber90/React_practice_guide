import React from 'react'
import { useParams } from 'react-router-dom'

const ClientDetails = () => {
  const { id } = useParams()
  //   const params = useParams()0

  return <div>ClientDetails : {id}</div>
  //   return <div>ClientDetails : {params.id}</div>
}

export default ClientDetails
