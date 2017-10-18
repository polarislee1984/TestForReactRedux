import { fork } from 'redux-saga/effects'

import watchLists from '../lists/sagas'
import watchTodos from '../todos/sagas'

export default function* sagas () {
  yield [
    fork(watchLists),
    fork(watchTodos)
  ]
}
