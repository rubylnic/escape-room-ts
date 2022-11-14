import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'

interface BgState {
    value: string
}

const initialState: BgState = {
    value: '',
}

export const bgSlice = createSlice({
    name: 'background',
    initialState,
    reducers: {
        setBg: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
    },
})

export const { setBg } = bgSlice.actions
export const bg = (state: RootState) => state.background.value
export default bgSlice.reducer