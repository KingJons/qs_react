import React from 'react'
import { connect } from 'react-redux'

const PostItem = ({ entity, onClickDeleteButton }) => {
    return (
        <div>
            <h3>{ entity.title }</h3>
            <button onClick={ onClickDeleteButton}>DELETE</button>
        </div>
    )
}
const PostList = ({ entities, onClickDeleteButton }) => {
    const items = entities.map(item => <PostItem key={ item.id } entity={ item } onClickDeleteButton={ () => onClickDeleteButton(item.id)}/>) 
    return (
        <div>{ items }</div>
    )
}
const mapStateToProps = (state) => {
    return {
        entities: state.posts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onClickDeleteButton: (id) => {
            dispatch({
                type: 'DELETE_POST',
                id
            })
        }
    }
}
const Posts = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList)
export default Posts