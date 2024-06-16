import { configureStore } from "@reduxjs/toolkit"
import formButtonStateReducer from './slices/formButtonSlice'

export const store = configureStore({
    reducer: {
        formButtonState: formButtonStateReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch