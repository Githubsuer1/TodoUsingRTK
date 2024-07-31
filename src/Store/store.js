import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../Store/todoSlice'

export const store = configureStore({
    reducer:todoReducer
})