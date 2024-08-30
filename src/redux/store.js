import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

// TS
// export const RootState = ReturnType<typeof store.getState>;
// export const AppDispatch = typeof store.dispatch;
