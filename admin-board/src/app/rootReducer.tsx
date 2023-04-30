import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({})

// for multiple reducer
// const rootReducer = combineReducers({
//     oneReducer,
//     anotherReducer,
//     yetAnotherReducer
// })

export type RootState =  ReturnType<typeof rootReducer>

export default rootReducer