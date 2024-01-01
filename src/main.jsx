import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'


import store from './store.js'
import App from './App.jsx'
import './index.css'


// store.subscribe(() => console.log(store.getState()))
// store.dispatch(filterChange('IMPORTANT'))
// store.dispatch(createNote('combineReducers forms one reducer from many simple reducers'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
