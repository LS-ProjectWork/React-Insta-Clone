import React from 'react';

const CommentSection = props => {
    return (
        <div>
            {props.data.map(comment => {
                return (
                    <div key={comment.id}>
                        {comment.username}
                        {comment.text}
                    </div>
                )
            })}
        </div>
    )
}

export default CommentSection