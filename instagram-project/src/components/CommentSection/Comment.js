import React from 'react';

const Comment = props =>  {
    console.log(props)
    return (
        <div>
            <span>{props.comment.username}</span>
            <span>{props.comment.text}</span>
        </div>
    )
}

export default Comment;