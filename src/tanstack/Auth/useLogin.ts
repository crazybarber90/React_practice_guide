import { CredentialsType, ProfileType } from '../types'
import { useMutation } from 'react-query'

const login = async (Credentials: CredentialsType): Promise<ProfileType> => {
  const response = await fetch('http://api.com/login')

  if (response.data.authKey) {
    await localStorage.setItem('token', response.data.authKey)
    await localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

export const useLogin = () => {
  return useMutation((request: CredentialsType) => login(request), {
    onSuccess: () => console.log('it works'),
    onError: () => console.log('it does not work'),
  })
}

// ONDA SE NEGDE POZIVA ----------------------------------------
const { mutateAsync: querryLogin, isLoading } = useLogin()

const handleLogin = async (userData: CredentialsType) => {
  try {
    const user = await querryLogin(userData)

    if (user.authKey) {
      // useNavigation or so
      // Toastify
    }
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      // Toast error sa error.response.data.message
    }
  }
}

{
  isLoading && <spiner />
}
