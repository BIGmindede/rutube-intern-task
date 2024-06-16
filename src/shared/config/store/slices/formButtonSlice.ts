import { createSlice } from "@reduxjs/toolkit"
import { RootState } from ".."

export interface FormButtonState {
    disabled: boolean
}

const initialState: FormButtonState = {
    disabled: true
}

 const formButtonStateSlice = createSlice({
    name: "formButtonStateSlice",
    initialState,
    reducers: {
        undisable: (state) => {
            state.disabled = false
        }
    }
})

export const { undisable } = formButtonStateSlice.actions

export const selectFormButtonState = (state: RootState) => state.formButtonState.disabled

export default formButtonStateSlice.reducer