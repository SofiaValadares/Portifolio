import { createSlice } from '@reduxjs/toolkit'

export type WindowState = {
  isPortfolioMaximized: boolean
}

const initialState: WindowState = {
  isPortfolioMaximized: false,
}

const windowSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    setPortfolioMaximized(state, action: { payload: boolean }) {
      state.isPortfolioMaximized = action.payload
    },
    togglePortfolioMaximized(state) {
      state.isPortfolioMaximized = !state.isPortfolioMaximized
    },
    resetPortfolioWindow(state) {
      state.isPortfolioMaximized = false
    },
  },
})

export const {
  setPortfolioMaximized,
  togglePortfolioMaximized,
  resetPortfolioWindow,
} = windowSlice.actions

export default windowSlice.reducer
