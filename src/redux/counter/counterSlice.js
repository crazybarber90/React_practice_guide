import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    //mmoze da prihvati action ali je optional
    // u action je action.payload
    // ovaj state je kopija pravog stejta,on se menja i onda updejtuje pravi stejt
    // createSlice nam sam pravi kopiju stejta , ne moramo ono ...state ,
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  // ASINHRONO !
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log('incrementAsync.pending')
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.value += action.payload
      })
  },
})

//--------------------------------------------
//SIMULACIJA ASINHRONOE AKCIJE
//MORA DA SE DEFINISE name "counter/incrementAsync", dok gore ne mora, samo ide increment, decrement ...
export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (amount) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return amount
  }
)
//--------------------------------------------

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
