import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
// store -> component 结合
import { Provider } from 'react-redux'
import mainReducer from './reducers'
import App from './components/App'

const store = createStore(mainReducer)
store.dispatch({
    type: 'ADD_POST',
    post: {
        id: 1,
        title: 'welcome to ninghao.net'
    }
})
store.dispatch({
    type: 'ADD_POST',
    post: {
        id: 2,
        title: 'react & redux'
    }
})
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)