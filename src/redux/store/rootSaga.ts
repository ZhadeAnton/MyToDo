import {all, call} from 'redux-saga/effects'
import todoSagas from '../Todo/todoSagas'
import userSagas from '../User/userSagas'

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(todoSagas)
  ])
}
