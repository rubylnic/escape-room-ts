import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from './index'
import axios from 'axios';

const BOOK_INFO_URL = 'http://localhost:7777/bookInfo';

interface BookInfoState {
    bookInfo: BookInfo[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null | undefined,
}

export interface BookInfo {
    time: string,
    price: number,
    taken: boolean
}

const initialState: BookInfoState = {
    bookInfo: [],
    status: 'idle',
    error: null,
}

export const fetchBookInfo = createAsyncThunk<BookInfo[]>(
    'data/fetchBookInfo',
    async () => {
        try {
            const response = await axios.get(BOOK_INFO_URL)
            const data = response.data;
            return data
        } catch (err: any) {
            return err.message
        }
    }
)

export const dataSlice = createSlice({
    name: 'bookInfo',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBookInfo.pending, (state) => {
                state.status = 'loading'
                state.error = null;
            })
            .addCase(fetchBookInfo.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const loadedData = action.payload.map(data => {
                    return data
                })
                state.bookInfo = state.bookInfo.concat(loadedData);
            })
            .addCase(fetchBookInfo.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})

export const selectBookInfo = (state: RootState) => state.bookInfo.bookInfo;
export const selectBookInfoStatus = (state: RootState) => state.bookInfo.status;
export const selectBookInfoError = (state: RootState) => state.bookInfo.error;

export default dataSlice.reducer