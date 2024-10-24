import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Definiši tip za korisnika
interface UserState {
  user: User | null;
  isAuthenticated: boolean;
}

// Inicijalno stanje
const initialState: UserState = {
  user: null,
  isAuthenticated: false,
}

// Kreiraj slice za korisnika
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.isAuthenticated = true
    },
    clearUser: (state) => {
      state.user = null
      state.isAuthenticated = false
    },
  },
})

// Exportuj akcije i reducer
export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer
