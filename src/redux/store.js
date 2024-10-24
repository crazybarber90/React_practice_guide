import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import userReducer from './counter/userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
})

// TS
// export const RootState = ReturnType<typeof store.getState>;
// export const AppDispatch = typeof store.dispatch;
