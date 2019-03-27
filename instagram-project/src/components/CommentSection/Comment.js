import React from 'react';
import PropTypes from 'prop-types'; 

const Comment = props =>  {
    return (
        <div>
            <span>{props.comment.username}</span>
            <span>{props.comment.text}</span>
        </div>
    )
}

export default Comment;

Comment.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({username: PropTypes.string, 
        comment: PropTypes.string
    }))
}