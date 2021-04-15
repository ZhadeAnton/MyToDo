import {takeLatest, put, all, call} from 'redux-saga/effects'
import * as actionCreators from './userActionCreators'
import * as actionTypes from './userActionTypes'

import {
  auth,
  googleProvider,
  facebookProvider,
  getCurrentUser,
  creacteUserProfileDocument
} from '../../firebase.config'

function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef =
    yield call(creacteUserProfileDocument, userAuth, additionalData)
    const userSnapshot = yield userRef.get()
    yield put(actionCreators.signInSuccess({
      id: userSnapshot.id, ...userSnapshot.data()
    }))
  } catch (error) {
    yield put(actionCreators.signInFailure(error.message))
  }
}

export function* signInWithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(actionCreators.signInFailure(error.message))
  }
}

export function* signInWithFacebook() {
  try {
    const {user} = yield auth.signInWithPopup(facebookProvider)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(actionCreators.signInFailure(error.message))
  }
}

export function* signInWithEmail({payload: {email, password}}) {
  try {
    const {user} = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(actionCreators.signInFailure(error.message))
  }
}

export function* signUpStart({payload: {email, password, displayName}}) {
  try {
    const {user} = yield auth.createUserWithEmailAndPassword(email, password)
    yield getSnapshotFromUserAuth(user, {displayName})
  } catch (error) {
    yield put(actionCreators.signUpFailure(error.message))
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

export function* signOut() {
  try {
    yield auth.signOut()
    yield put(actionCreators.signOutSuccess())
  } catch (error) {
    yield put(actionCreators.signOutFailure())
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(actionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

function* onFacebookSignInStart() {
  yield takeLatest(actionTypes.FACEBOOK_SIGN_IN_START, signInWithFacebook)
}

function* onSignInWithEmail() {
  yield takeLatest(actionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

function* onSignUpStart() {
  yield takeLatest(actionTypes.SIGN_UP_START, signUpStart)
}

function* onSignOut() {
  yield takeLatest(actionTypes.SIGN_OUT_START, signOut)
}

function* onCheckUserSession() {
  yield takeLatest(actionTypes.CHECK_USER_SESSION, checkUserSession)
}

export default function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onFacebookSignInStart),
    call(onSignInWithEmail),
    call(onSignUpStart),
    call(onSignOut),
    call(onCheckUserSession)
  ])
}
