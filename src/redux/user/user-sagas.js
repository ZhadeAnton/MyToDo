import {takeLatest, put, all, call} from 'redux-saga/effects'
import * as actionCreators from './userActionCreators'
import * as actionTypes from './userActionTypes'

import {
  auth,
  googleProvider,
  getCurrentUser,
  creacteUserProfileDocument
} from '../../firebase/firebase.config'

function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef =
    yield call(creacteUserProfileDocument, userAuth, additionalData)
    const userSnapshot = yield userRef.get()
    yield put(actionCreators.signInSuccess({
      id: userSnapshot.id, ...userSnapshot.data()
    }))
  } catch (error) {
    yield put(actionCreators.signInFailure(error))
  }
}

export function* signInWithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(actionCreators.signInFailure(error))
  }
}

export function* signInWithEmail({payload: {email, password}}) {
  try {
    const {user} = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(actionCreators.signInFailure(error))
  }
}

export function* checkUserSession() {
  try {
    const userAuth = yield getCurrentUser()
    if (!userAuth) return
    yield getSnapshotFromUserAuth(userAuth)
  } catch (error) {
    yield put(actionCreators.signInFailure(error))
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(actionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

function* onCheckUserSession() {
  yield takeLatest(actionTypes.CHECK_USER_SESSION, checkUserSession)
}

function* onSignInWithEmail() {
  yield takeLatest(actionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export default function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onCheckUserSession),
    call(onSignInWithEmail)
  ])
}
