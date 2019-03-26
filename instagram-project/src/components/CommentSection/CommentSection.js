import React from 'react';
import Comment from './Comment'

class CommentSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {comments: props.comments}
    }

    render() {
        return (
            <div>
                {this.state.comments && this.state.comments.map(comment => {
                    return <Comment key={comment.id} comment={comment} />
                })}
            </div>
        )
    }
}

export default CommentSection