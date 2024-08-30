// import { useWixClient } from '@/hooks/useWixClient'
import React, { useState } from 'react'

// OVO JE KOMPONENTA KOJA NA OSNOVU STEJTA MENJA FORME
// LOGIN / REGISTER / RESET PASSWORD / EMAIL VERIFICATION
// localhost:3000/login

enum MODE {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  RESET_PASSWORD = 'RESET_PASSWORD',
  EMAIL_VERIFICATION = 'EMAIL_VERIFICATION',
}

const LoginPage = () => {
  const [mode, setMode] = useState(MODE.LOGIN)

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailCode, setEmailCode] = useState('')
  const [isLoading, setIsLIading] = useState<boolean>(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const formTitle =
    mode === MODE.LOGIN
      ? 'Log in'
      : mode === MODE.REGISTER
      ? 'Register'
      : mode === MODE.RESET_PASSWORD
      ? 'Reset Your Password'
      : 'Verify Your Password'

  const buttonTitle =
    mode === MODE.LOGIN
      ? 'Login'
      : mode === MODE.REGISTER
      ? 'Register'
      : mode === MODE.RESET_PASSWORD
      ? 'Reset'
      : 'Verify'

  return (
    <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
      <form className="flex flex-col gap-8">
        <h1 className="text-2xl font-semibold">{formTitle}</h1>

        {/* USERNAME FORM INPUT */}
        {mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              placeholder="john"
              className="ring-2 ring-gray-300 rounded-md p-4"
            />
          </div>
        ) : null}

        {/* EMAIL FORM INPUT */}
        {mode !== MODE.EMAIL_VERIFICATION ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="john@email.com"
              className="ring-2 ring-gray-300 rounded-md p-4"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Verification Code</label>
            <input
              type="text"
              name="emailCode"
              placeholder="Code"
              className="ring-2 ring-gray-300 rounded-md p-4"
            />
          </div>
        )}

        {/*  */}
        {mode === MODE.LOGIN || mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="ring-2 ring-gray-300 rounded-md p-4"
            />
          </div>
        ) : null}

        {mode === MODE.LOGIN && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.RESET_PASSWORD)}
          >
            Forgot Password?
          </div>
        )}

        <button
          disabled={isLoading}
          className=" bg-pinkara text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Loading...' : buttonTitle}
        </button>
        {error && <div className="text-red-600">{error}</div>}
        {mode === MODE.LOGIN && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.REGISTER)}
          >
            {"Dont't"} have an account?
          </div>
        )}
        {mode === MODE.REGISTER && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.LOGIN)}
          >
            Allready have an account?
          </div>
        )}
        {mode === MODE.RESET_PASSWORD && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.LOGIN)}
          >
            Go back to login
          </div>
        )}
        {message && <div className="text-green-600 text-sm">{message}</div>}
      </form>
    </div>
  )
}

export default LoginPage