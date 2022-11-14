import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'

// Define a type for the slice state
interface CityState {
    value: string
}

// Define the initial state using that type
const initialState: CityState = {
    value: 'Новосибирск',
}

export const citySlice = createSlice({
    name: 'city',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setCity: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
    },
})

export const { setCity } = citySlice.actions

// Other code such as selectors can use the imported `RootState` type
export const city = (state: RootState) => state.city.value

export default citySlice.reducer