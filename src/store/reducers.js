import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { loadingBarReducer } from 'react-redux-loading-bar'
import app from './modules/app'
import auth from './modules/auth'
import student from './modules/student'
import account from './modules/account'
// import ayterm from './modules/ayterm'
// import campus from './modules/campus'
// import civilstatus from './modules/civilstatus'
// import incomebracket from './modules/incomebracket'
// import strand from './modules/strand'
// import testingcenter from './modules/testingcenter'
// import interview from './modules/interview'
// import testingsched from './modules/testingsched'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    router,
    app,
    auth,
    student,
    account,
    loadingBar: loadingBarReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
