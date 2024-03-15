import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface SidebarState {
    visible: boolean
}

const initialState: SidebarState = {
    visible: false,
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        showSidebar: (state) => {
        state.visible = true
        },
        hideSidebar: (state) => {
        state.visible = false
        },
    },
})

export const { showSidebar, hideSidebar } = sidebarSlice.actions
export const selectUser = (state: RootState) => state.user
export default sidebarSlice.reducer