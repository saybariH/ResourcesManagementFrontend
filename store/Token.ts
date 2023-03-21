import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './configureStore'
import { TokenState ,initialToken} from '@/code/Type'

// Define a type for the slice state


// Define the initial state using that type
const initialState: TokenState = {
    token :'',
    email :'',
    role  :'',
    expiration :0
}


export const tokenSlice = createSlice({
  name: 'token',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login:(state,action : PayloadAction<TokenState>) =>{
        state.token = action.payload.token
        state.email = action.payload.email
        state.role  = action.payload.role
        state.expiration = action.payload.expiration
    },
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const {  } = tokenSlice.actions

// Other code such as selectors can use the imported `RootState` type
export default tokenSlice.reducer
