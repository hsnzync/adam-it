import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'
import { Job } from '../../types'

interface State {
    jobs: Job[]
}

const initialState: State = {
    jobs: [],
}

const fetch = createAsyncThunk(
    'instructions/fetch',
    async (id: number, thunkApi) => {
        return []
    }
)

export const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetch.fulfilled, (state, action) => {
            state.jobs = action.payload
        })
    },
})

export const jobsSelector = (state: RootState): State => state.jobs

export default jobSlice.reducer
