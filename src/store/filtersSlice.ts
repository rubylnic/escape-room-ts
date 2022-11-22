import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from './index'
import axios from 'axios';

const FILTERS_URL = 'filters.json';

interface FiltersState {
    filters: Filter[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null | undefined,
}

export type Filter = {
    name: string,
    genre: string
}

const initialState: FiltersState = {
    filters: [],
    status: 'idle',
    error: null,
}

export const fetchFilters = createAsyncThunk<Filter[]>(
    'filters/fetchFilters',
    async () => {
        try {
            const response = await axios.get(FILTERS_URL)
            const data: Filter[] = response.data;
            return data
        } catch (err: any) {
            return err.message
        }
    }
)

export const filtersSlice = createSlice({
    name: 'quests',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilters.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(fetchFilters.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const loadedData = action.payload.map(data => {
                    return data
                })
                state.filters = state.filters.concat(loadedData);

            })
            .addCase(fetchFilters.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message
            })
    }
})


export const selectFilters = (state: RootState) => state.filters.filters;
export const selectFiltersStatus = (state: RootState) => state.filters.status;
export const selectFiltersError = (state: RootState) => state.filters.error;

export default filtersSlice.reducer