import { configureStore } from '@reduxjs/toolkit'
import visitReducer from './slices/visitSlice'
import windowReducer from './slices/windowSlice'

export const store = configureStore({
  reducer: {
    visit: visitReducer,
    window: windowReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const selectIsFirstVisit = (state: RootState) => state.visit.isFirstVisit
export const selectIsPortfolioMaximized = (state: RootState) =>
  state.window.isPortfolioMaximized

export { completeFirstVisit } from './slices/visitSlice'
export {
  setPortfolioMaximized,
  togglePortfolioMaximized,
  resetPortfolioWindow,
} from './slices/windowSlice'
