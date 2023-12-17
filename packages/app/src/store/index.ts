import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import jobsReducer from './states/jobs'

export const store = configureStore({
    reducer: {
        jobs: jobsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
