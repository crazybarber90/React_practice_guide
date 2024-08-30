import React, { useState } from 'react'

const FormNameEmail = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })

  const handleInptuChange = (e) => {
    const { name, value } = e.target

    setFormData((prevState) => {
      return { ...prevState, [name]: value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('FORMDATA', formData)
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        title: formData.name,
      }),
      //   body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log('DATA', data))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
          paddingTop: '2rem',
          gap: '2rem',
        }}
      >
        <div styles={{ width: '30%' }}>
          <label style={{ marginRight: '10px' }}>Name:</label>
          <input
            style={{ padding: '10px 5px', outline: 'none' }}
            type="text"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleInptuChange}
          />
        </div>
        <div styles={{ width: '30%' }}>
          <label style={{ marginRight: '10px' }}>Email:</label>
          <input
            style={{ padding: '10px 5px', outline: 'none' }}
            type="email"
            name="email"
            placeholder="name"
            value={formData.email}
            onChange={handleInptuChange}
          />
        </div>
        <button style={{ cursor: 'pointer' }}>Submit</button>
      </div>
    </form>
  )
}

export default FormNameEmail
