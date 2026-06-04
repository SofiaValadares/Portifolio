import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type Locale = 'pt' | 'en'

const STORAGE_KEY = 'portfolio-locale'

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return 'pt'
  return window.localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'pt'
}

type LocaleState = {
  locale: Locale
}

const initialState: LocaleState = {
  locale: readStoredLocale(),
}

const localeSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    setLocale(state, action: PayloadAction<Locale>) {
      state.locale = action.payload
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_KEY, action.payload)
        document.documentElement.lang = action.payload === 'en' ? 'en' : 'pt-BR'
      }
    },
    toggleLocale(state) {
      const next: Locale = state.locale === 'pt' ? 'en' : 'pt'
      state.locale = next
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_KEY, next)
        document.documentElement.lang = next === 'en' ? 'en' : 'pt-BR'
      }
    },
  },
})

export const { setLocale, toggleLocale } = localeSlice.actions
export default localeSlice.reducer
