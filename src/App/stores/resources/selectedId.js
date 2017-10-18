import createReducer from '../utils/createReducer'

import t from './actions/constants'

export const defaultState = {
  selectedId: ''
}

export default (type) => createReducer({
  initialState: defaultState,

  [t.SELECT_LIST]: (state, { payload }) => {
    console.log("SELECT_LIST-------------", payload)
    return {
      selectedId: payload.id
    }
  },
})
