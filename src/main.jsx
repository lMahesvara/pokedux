import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { pokemonsReducer } from './reducers/pokemons'
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore
} from 'redux'
import './index.css'
import { logger } from './middlewares'
import thunk from 'redux-thunk'

const composeAlt =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const commposedEnhancers = composeAlt(applyMiddleware(thunk, logger))

const store = createStore(pokemonsReducer, commposedEnhancers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
