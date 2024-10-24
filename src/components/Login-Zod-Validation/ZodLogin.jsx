import React, { useState } from 'react'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid e-mail address' }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters',
  }),
})

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [isSubminttin, setIsSubmitting] = useState(false)
  const [fakeData, setFakeData] = useState({
    email: 'nikola@gmail.com',
    password: '123456',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validacija podataka pomoću Zod šeme
    const result = loginSchema.safeParse({ email, password })

    if (!result.success) {
      const formErrors = result.error.format()
      setErrors({
        email: formErrors.email?._errors[0] || '',
        password: formErrors.password?._errors[0] || '',
      })
      return
    }

    // Ako je validacija uspešna, uporedi sa fakeData
    if (email !== fakeData.email) {
      setErrors({ email: 'Email does not match' })
    } else if (password !== fakeData.password) {
      setErrors({ password: 'Password does not match' })
    } else {
      // Ako je sve u redu, prijava je uspešna
      setErrors({})
      setIsSubmitting(true)

      // Simulacija uspešne prijave
      setTimeout(() => {
        alert('Login success')
        setIsSubmitting(false)
      }, 1000)
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h2>Login</h2>
      <form
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 10,
        }}
        onSubmit={handleSubmit}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <label style={{ width: '200px', textAlign: 'left' }}>Email:</label>
          <input
            style={{ padding: '10px', width: '200px' }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <small style={{ color: 'red', fontSize: '14px' }}>
              {errors.email}
            </small>
          )}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <label style={{ width: '200px', textAlign: 'left' }}>Password:</label>
          <input
            style={{ padding: '10px', width: '200px' }}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <small style={{ color: 'red', fontSize: '14px' }}>
              {errors.password}
            </small>
          )}
        </div>

        <button type="submint" disabled={isSubminttin}>
          {isSubminttin ? 'Logining in...' : 'Login'}
        </button>
      </form>
    </div>
  )
}

export default LoginForm
