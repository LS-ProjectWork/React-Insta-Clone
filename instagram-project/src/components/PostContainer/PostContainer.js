import React from 'react';
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = props => {
    console.log(props.data)
    return (
        <div>
            {props.data.map(post => {
                return(
                    <div key={post.id} className='post-header'>
                        <img src={post.thumbnailUrl} alt='profile-picture'/>
                        <h2>{post.username}</h2>
                        <img src={post.imageUrl} alt='post-image'/>
                        <p>{post.likes}</p>
                        <p>{post.timestamp}</p>
                        <CommentSection key={post.id} data={post.comments}/>
                    </div>
                )
            })}
        </div>
    )
}

export default PostContainer