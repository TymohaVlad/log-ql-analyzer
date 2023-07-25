import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit';
import logsFormatSlice from './redusers/logsFotmatSlise'
import querySlice from './redusers/QuerySlice';
import ResultQuerySlise from './redusers/ResultQuerySlise';

const rootRedusers = combineReducers({
    logsFormat: logsFormatSlice,
    query: querySlice,
    logs: logsFormatSlice,
    results: ResultQuerySlise
})

export const store = configureStore({
  reducer: {
    logsFormat: logsFormatSlice,
    query: querySlice,
    results: ResultQuerySlise
  },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch