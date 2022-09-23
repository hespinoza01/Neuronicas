import { createSelector } from '@reduxjs/toolkit'
import { RootState } from './types'

export const globalSelector = (state: RootState) => state.defaultReducer
export const messageSelector = createSelector(
    globalSelector,
    state => state.message
)
