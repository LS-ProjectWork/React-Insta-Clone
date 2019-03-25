import React from 'react';

const PostContainer = props => {
    console.log(props.data)
    return (
        <div>
            {props.data.map(post => {
                return(
                    <div className='post-header'>
                        <img src={post.thumbnailUrl}/>
                        <h2>{post.username}</h2>
                        <img src={post.imageUrl}/>
                        <p>{post.likes}</p>
                        <p>{post.timestamp}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default PostContainer