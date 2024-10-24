import React from 'react'
import Navbar from './Navbar'
import useFetch from '../customHooks/useFetch'

const Home = () => {
  const { data, error, isPendig } = useFetch('https://dummyjson.com/products')

  console.log('DATAAA ', data)
  return (
    <>
      {data && (
        <div>
          {/* {data.products.map((singleProduct) => (
            <div key={singleProduct.id}>{singleProduct.title}</div>
          ))} */}
        </div>
      )}
      <h1>OVO JE HOME PAGE</h1>
      {isPendig && <h1>Loadgin</h1>}
      <Navbar />
      {error && <p style={{ color: 'red' }}>NESTO LOSE IDE</p>}
    </>
  )
}

export default Home
