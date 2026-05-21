import { createSlice } from '@reduxjs/toolkit'

/**
 * Primeira visita na sessão da página: `true` ao abrir a URL ou recarregar (F5).
 * Vira `false` após `completeFirstVisit` — permanece assim até novo carregamento.
 * Não persiste em localStorage (não é “primeira vez na vida”, é por load).
 */
export type VisitState = {
  isFirstVisit: boolean
}

const initialState: VisitState = {
  isFirstVisit: true,
}

const visitSlice = createSlice({
  name: 'visit',
  initialState,
  reducers: {
    completeFirstVisit(state) {
      state.isFirstVisit = false
    },
  },
})

export const { completeFirstVisit } = visitSlice.actions
export default visitSlice.reducer
