import { createSlice } from "@reduxjs/toolkit"

const alertState = {
    openAlert: false,
    message: ''
}

export const alertSlice = createSlice({
    name: 'alert',
    initialState: alertState,
    reducers: {
        setOpenAlert(state, action) {
            state.openAlert = action.payload
        },
        setMessage(state, action) {
            state.message = action.payload
        }
    }
})

export const { setOpenAlert, setMessage } = alertSlice.actions

export const openAlert = (state) => state.alert.openAlert
export const alertMessage = (state) => state.alert.message

export default alertSlice.reducer