import React from 'react';

const Comment = props =>  {
    return (
        <div>
            return (
                {props.data.map(comment => {
                    return (
                        <div key={comment.id}>
                            {comment.username}
                            {comment.text}
                        </div>
                    )
                })}
            )
        </div>
    )
}

export default Coment