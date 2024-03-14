import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface UserState {
    login: boolean
    value: number
}

const initialState: UserState = {
    login: false,
    value: 0,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state) => {
        state.login = true
        },
        logout: (state) => {
        state.login = false
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value += action.payload
        },
    },
})

export const { login, logout, incrementByAmount } = userSlice.actions
export const selectUser = (state: RootState) => state.user
export default userSlice.reducer