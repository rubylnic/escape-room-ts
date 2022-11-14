import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'
import setTranslatedMonth from '../helpers/setTranslatedMonth'


export type DateType = {
    day: number,
    month: string
}

interface DateState {
    date: DateType,
    time: string,
    price: number
}

const initialState: DateState = {
    date: {
        day: new Date().getDate(),
        month: setTranslatedMonth(new Date().getMonth())
    },
    time: '',
    price: 0
}

export const questInfoSlice = createSlice({
    name: 'quest',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setDate: (state, action: PayloadAction<DateType>) => {
            state.date = action.payload
        },
        setPrice: (state, action: PayloadAction<number>) => {
            state.price = action.payload
        },
        setTime: (state, action: PayloadAction<string>) => {
            state.time = action.payload
        },
    },
})

export const { setDate, setPrice, setTime } = questInfoSlice.actions

export const date = (state: RootState) => state.quest.date;
export const time = (state: RootState) => state.quest.time;
export const price = (state: RootState) => state.quest.price;

export default questInfoSlice.reducer