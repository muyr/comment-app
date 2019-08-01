import React, {Component} from 'react'
import CommentInputContainer from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {

    render() {
        return (
            <div className='wrapper'>
                <CommentInputContainer/>
                <CommentList/>
            </div>
        )
    }
}

export default CommentApp
