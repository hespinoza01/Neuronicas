import { createReducer } from '@reduxjs/toolkit'
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'
import { defaultAction } from './actions'

const initialState = {
    message: 'default mesage',
}

export const defaultReducer = createReducer(initialState, {
    [defaultAction.type]: (state, action) => {
        const { payload } = action

        return { ...state, payload }
    },
})

const reducers = {
    defaultReducer,
}

const persistConfig = {
    key: 'approot',
    storage: storage,
    timeout: undefined,
    whitelist: [''],
}

export const rootReducer = persistCombineReducers(persistConfig, reducers)
export default rootReducer
