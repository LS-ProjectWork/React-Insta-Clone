import React from 'react';
import Comment from './Comment'

class CommentSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: this.props.comments,
            inputText: '',
            like: props.post.likes,
            post: this.props.post,
            liked: false
        }
    }

    addNewComment = event => {
        event.preventDefault()
        console.log('hi')
        const newComment = {id: 4, username: 'Darien', text: this.state.inputText}
        this.setState({comments: [...this.state.comments, newComment]})
        this.setState({inputText: ''})
    }
    
    handleChange = event => {
        this.setState({inputText: event.target.value})
    }

    handleLike = like => {
        // const {likes} = post
        // console.log(likes)
        // const newPosts = {id: copyPost.id, imageUrl: copyPost.imageUrl, likes: this.state.like +1, thumbnailUrl: copyPost.thumbnailUrl, timestamp: copyPost.timestamp, username:copyPost.username}
        if (this.state.liked === true) {
            this.setState({like: like-1, liked: !this.state.liked})
        } else {
            this.setState({like: like+1, liked: !this.state.liked})
        }
        // this.state.comments.filter()
    }

    render() {
        return (
            <div>
                <i className="fas fa-heart-broken" onClick={ () => this.handleLike(this.state.like)}>{this.state.like}
                {/* if handleLike is invoked, add 1 to like */}
                </i>

                {this.state.comments && this.state.comments.map(comment => {
                    return <Comment key={comment.id} comment={comment} />
                })}
                <form onSubmit={this.addNewComment}>
                    <input type="text" placeholder='Add comment' onChange={this.handleChange} value={this.state.inputText} />
                </form>
            </div>
        )
    }
}

export default CommentSection