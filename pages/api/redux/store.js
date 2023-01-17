import { configureStore } from '@reduxjs/toolkit'
import likereducer from './likereducer'

const store = configureStore({
    reducer:{
        like: likereducer,
    }
})

export default store