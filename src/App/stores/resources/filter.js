import createReducer from '../utils/createReducer'

import t from './actions/constants'

export const defaultState = {
  filter: ''
}

export default (type) => createReducer({
  initialState: defaultState,

  [t.SET_FILTER]: (state, { payload }) => {
    return {
      filter: payload.filter
    }
  },
})
