import { configureStore } from '@reduxjs/toolkit'
import likereducer from './likereducer'
import coursereducer from './coursereducer'
import connectreducer from './connectreducer'
import profilereducer from './profilereducer'
import connectlistreducer from './connectlistreducer'
const store = configureStore({
    reducer:{
        like: likereducer,
        course: coursereducer,
        connect: connectreducer,
        connection: connectlistreducer,
        profile: profilereducer,
    }
})

export default store