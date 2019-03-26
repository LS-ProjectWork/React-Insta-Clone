import React from 'react';
import Comment from './Comment'

class CommentSection extends React.Component {
    state = {comments: props.comments}

    render() {
        return (
            <div>
                {this.state.map(comment => {
                    return <Comment comment={this.state.comments} />
                })}
            </div>
        )
    }
}

export default CommentSection