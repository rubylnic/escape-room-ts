import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'

interface ModalState {
    value: string,
    ifOpened: boolean
}

const initialState: ModalState = {
    value: '',
    ifOpened: false
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<string>) => {
            state.value = action.payload
            state.ifOpened = true
        },
        closeModal: (state, action: PayloadAction<string>) => {
            state.value = action.payload
            state.ifOpened = false
        },
    },
})

export const { openModal, closeModal } = modalSlice.actions
export const modal = (state: RootState) => state.modal.value

export default modalSlice.reducer