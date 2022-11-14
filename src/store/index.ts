import { configureStore } from '@reduxjs/toolkit'
import bgSlice from './bgSlice'
import citySlice from './citySlice'
import questInfoSlice from './questInfoSlice'
import modalSlice from './modalSlice'
import questsSlice from './questsSlice'
import bookInfoSlice from './bookInfoSlice'
import filtersSlice from './filtersSlice'


export const store = configureStore({
    reducer: {
        background: bgSlice,
        modal: modalSlice,
        city: citySlice,
        quests: questsSlice,
        quest: questInfoSlice,
        bookInfo: bookInfoSlice,
        filters: filtersSlice
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch