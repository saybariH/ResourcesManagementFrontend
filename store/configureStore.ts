import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reduxSlice/counterSlice'
import { githubApi } from '@/services/githubapi'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
