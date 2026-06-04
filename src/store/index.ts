import { configureStore } from '@reduxjs/toolkit'
import localeReducer from '../i18n/localeSlice'
import visitReducer from './slices/visitSlice'
import windowReducer from './slices/windowSlice'

export const store = configureStore({
  reducer: {
    locale: localeReducer,
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
export { setLocale, toggleLocale } from '../i18n/localeSlice'
export type { Locale } from '../i18n/localeSlice'
export {
  setPortfolioMaximized,
  togglePortfolioMaximized,
  resetPortfolioWindow,
} from './slices/windowSlice'

export const selectLocale = (state: RootState) => state.locale.locale
