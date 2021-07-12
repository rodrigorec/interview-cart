/* eslint-disable react/prop-types */
import React from 'react'
import './index.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './store'
import ReduxThunk from 'redux-thunk'

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(ReduxThunk))
)

const StoreWrapper = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)

export default StoreWrapper
