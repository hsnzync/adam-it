import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'
import { Job } from '@/types'
import client from '@/../client'

interface State {
    jobs: Job[]
}

const initialState: State = {
    jobs: [],
}

const fetchJobs = createAsyncThunk('job/fetch', async (_, thunkApi) => {
    const jobs = await client.fetch(`*[_type == "job"]`)
    return jobs
})

export const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchJobs.fulfilled, (state, action) => {
            state.jobs = action.payload
        })
    },
})

export const jobsSelector = (state: RootState): State => state.jobs
export { fetchJobs }
export default jobSlice.reducer
