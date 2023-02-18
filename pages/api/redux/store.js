import { configureStore } from '@reduxjs/toolkit'
import likereducer from './likereducer'
import coursereducer from './coursereducer'
const store = configureStore({
    reducer:{
        like: likereducer,
        course: coursereducer,
    }
})

export default store