import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'
import axios from 'axios';
import type { Filter } from './filtersSlice';

const QUESTS_URL = 'quests.json';

interface QuestsState {
    quests: Quest[],
    filtered: Quest[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null | undefined,
    chosen: Quest | null
}

export interface Quest {
    name: string,
    address: string
    people: string,
    difficulty: "легкий" | "средний" | "сложный",
    img: string,
    hit: false,
    genre: "adventure" | "detective" | "mistery" | "horror" | "scifi",
    time: string,
    text: string
}

const initialState: QuestsState = {
    quests: [],
    filtered: [],
    status: 'idle',
    error: null,
    chosen: null
}

export const fetchQuests = createAsyncThunk<Quest[]>(
    'quests/fetchQuests',
    async () => {
        try {
            const response = await axios.get(QUESTS_URL)
            const data: Quest[] = response.data;
            return data
        } catch (err: any) {
            return err.message
        }
    }
)

export const questsSlice = createSlice({
    name: 'quests',
    initialState,
    reducers: {

        filterQuests: (state, action: PayloadAction<string>) => {
            const currentQuests: Quest[] = current(state.quests);
            const filterOption: string = action.payload;
            if (filterOption) {
                const filtered = [...currentQuests.slice().filter((item: Filter) => {
                    if (item.genre === filterOption) {
                        return item;
                    }
                })]
                state.filtered = filtered;
            } else {
                state.filtered = state.quests;
            }

        },
        chooseQuests: (state, action: PayloadAction<Quest>) => {
            state.chosen = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuests.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(fetchQuests.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const loadedQuests = action.payload.map(quest => {
                    return quest
                })
                state.quests = state.quests.concat(loadedQuests);
                state.filtered = state.filtered.concat(loadedQuests);

            })
            .addCase(fetchQuests.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message
            })
    }
})

export const { filterQuests, chooseQuests } = questsSlice.actions;

export const selectAllQuests = (state: RootState) => state.quests.quests;
export const getQuestsStatus = (state: RootState) => state.quests.status;
export const getQuestsError = (state: RootState) => state.quests.error;
export const selectFilteredQuests = (state: RootState) => state.quests.filtered;
export const selectChosenQuest = (state: RootState) => state.quests.chosen;

export default questsSlice.reducer