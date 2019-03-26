import React from 'react';

const Comment = props =>  {
    return (
        <div>
            return (
                <div>
                    <span>{props.comment.username}</span>
                    <span>{props.comment.text}</span>
                </div>
            )
        </div>
    )
}

export default Comment;