// module 有利于状态的分开管理
import { combineReducers } from 'redux'
// init old new
const postsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST': return [...state, {...action.post}]
        case 'DELETE_POST': return state.filter(item => action.id !== item.id)
        default:
            return state
    } 
}
const commentsReducers = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENT': return [...state, {...action.comment}]
        default:
            return state
    }
}
const mainReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducers
})
export default mainReducer