import React from 'react';

const Comment = props =>  {
    return (
        <div>
            return (
                {props.data.map(comment => {
                    return (
                        <div key={comment.id}>
                            <span>{comment.username}</span>
                            <span>{comment.text}</span>
                        </div>
                    )
                })}
            )
        </div>
    )
}

export default Comment