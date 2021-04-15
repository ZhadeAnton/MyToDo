import {all, call} from 'redux-saga/effects'
import todoSagas from '../todo/todoSagas'
import userSagas from '../user/userSagas'

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(todoSagas)
  ])
}
