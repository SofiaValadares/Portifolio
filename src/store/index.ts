import { configureStore } from '@reduxjs/toolkit'
import localeReducer from '../i18n/localeSlice'
import visitReducer from './slices/visitSlice'

export const store = configureStore({
  reducer: {
    locale: localeReducer,
    visit: visitReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const selectIsFirstVisit = (state: RootState) => state.visit.isFirstVisit

export { completeFirstVisit } from './slices/visitSlice'
export { setLocale, toggleLocale } from '../i18n/localeSlice'
export type { Locale } from '../i18n/localeSlice'

export const selectLocale = (state: RootState) => state.locale.locale
